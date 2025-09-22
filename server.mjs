import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

/** ====== 設定 ======
 * ALLOW_IPS: 許可するIP/プレフィックスのカンマ区切り
 *   例) "123.45.67.89, 203.0.113., 2400:abcd:1234:"
 *   - 完全一致 or 先頭一致（前方一致）で許可
 * TRUST_PROXY: "true" で X-Forwarded-For を信頼
 */
const ALLOW = (process.env.ALLOW_IPS || "")
  .split(",")
  .map(s => s.trim())
  .filter(Boolean);

if ((process.env.TRUST_PROXY || "true") === "true") {
  app.set("trust proxy", true);
}

// クライアントIP取得（X-Forwarded-Forの先頭を使用）
function getClientIp(req) {
  const xff = (req.headers["x-forwarded-for"] || "").toString();
  if (xff.includes(",")) return xff.split(",")[0].trim();
  return xff || req.ip || "";
}

// IPフィルター（ALLOWが空なら全許可）
app.use((req, res, next) => {
  if (ALLOW.length === 0) return next();
  const ip = getClientIp(req);
  const ok = ALLOW.some(a => ip.startsWith(a));
  if (ok) return next();
  res.status(403).send("Forbidden");
});

// ── 静的配信（あなたの公開フォルダ名に合わせて変更）──
const PUBLIC_DIR = process.env.PUBLIC_DIR || "public"; // "dist" や "build" なら上書き
app.use(express.static(path.join(__dirname, PUBLIC_DIR)));

// SPAなら下の1行を有効化（不要なら消す）
// app.get("*", (_req, res) => res.sendFile(path.join(__dirname, PUBLIC_DIR, "index.html")));

// ヘルスチェック
app.get("/health", (_req, res) => res.json({ ok: true }));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("listening on", port, { ALLOW });
});
