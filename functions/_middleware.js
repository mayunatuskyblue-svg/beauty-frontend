// functions/_middleware.js
export const onRequest = async ({ request, next }) => {
  // まず通常通り配信
  const res = await next();
  const url = new URL(request.url);

  // /assets/css/*.css だけ Content-Type を強制
  if (url.pathname.startsWith('/assets/css/') && url.pathname.endsWith('.css')) {
    // 既存ヘッダをコピーして上書き
    const headers = new Headers(res.headers);
    headers.set('content-type', 'text/css; charset=utf-8');

    // Response を作り直して返す（←ここがポイント）
    return new Response(res.body, {
      status: res.status,
      statusText: res.statusText,
      headers
    });
  }

  return res;
};
