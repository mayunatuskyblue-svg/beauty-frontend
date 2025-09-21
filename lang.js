(function(global){
  const T = global.BL_I18N && global.BL_I18N.T ? global.BL_I18N.T : { ja:{}, en:{} };

  // ヒーロー文言（フラットキーのままでOK）
  T.ja.hero_title = 'スリランカで叶える、私だけの美しさ。';
  T.en.hero_title = 'Your beauty, your way — in Sri Lanka.';
  T.ja.hero_sub   = 'ヘア・ネイル・まつ毛・アーユルヴェーダ・マッサージ/スパ。口コミと写真で選べる予約サイト。';
  T.en.hero_sub   = 'Hair, lashes, nails, Ayurveda, spa & massage. Book with reviews and photos.';
  // --- SmartPay box ---
T.ja.smartpay = {
  title:'SmartPay（後課金）',
  email:'メール',
  saved:'カード保存済み（Customer: ）',
  not_saved:'カード未保存'
};
T.en.smartpay = {
  title:'SmartPay (pay later)',
  email:'Email',
  saved:'Card saved (Customer: )',
  not_saved:'No card on file'
};

// --- Footer modal bodies (HTML可) ---
T.ja.legal = {
  terms_html:   '<p>本サービスの利用は各地域の法令および当サイトの予約ガイドラインに従います。継続することで規約に同意したものとみなされます。</p>',
  privacy_html: '<p>当サイトは最小限のデータ（お気に入り・予約・言語など）をブラウザに保存します。個人データの販売は行いません。</p>',
  cancel_html:  '<p>予約の24時間前までは無料でキャンセル可能です。24時間以内の変更は店舗へ直接ご連絡ください。</p>',
  contact_html: '<p>Email: support@beautylanka.example<br>Phone: +94 11 000 0000</p>'
};
T.en.legal = {
  terms_html:   '<p>Use of this service is subject to local laws and our booking guidelines. By continuing, you agree to the terms.</p>',
  privacy_html: '<p>We store minimal data (favorites, reservations, language) in your browser. We do not sell personal data.</p>',
  cancel_html:  '<p>Free cancellation until 24 hours before your appointment. Within 24 hours, please contact the shop directly.</p>',
  contact_html: '<p>Email: support@beautylanka.example<br>Phone: +94 11 000 0000</p>'
};


  // ↓↓↓ ここから “代入あり” の形に直す
  T.ja = Object.assign({}, T.ja, {
    ui:{ phone:'電話番号', close:'閉じる', process:'処理中…', mypage:'マイページ', currency:'通貨', back_to_search:'検索に戻る', back:'← 戻る', toTop:'トップに戻る', show:'表示', your_name:'お名前', email:'メールアドレス', password:'パスワード', pay_with_card:'カードで支払う（PayPal）', pay_on_site:'現地で支払う（記録）', done:'完了', confirm:'確認', yourInfo:'予約者情報', notes:'要望・メモ（任意）', name:'お名前 / Name', phone:'電話番号 / Phone' },
    auth:{ login:'ログイン', signup:'新規登録', goto_signup:'新規登録はこちら', signup_here:'新規登録はこちら', login_with_password:'パスワードでログイン', login_with_magic:'メールリンクでログイン', send_magic:'ログインリンクを送る/登録用リンクを送る', magic_hint:'メール内のリンクを開くと登録が完了します。', email:'メールアドレス', password:'パスワード' },
    search:{ ph_kw:'キーワード（例：まつ毛、スパ）', place:'場所', type:'種類', btn:'検索' },
    reserve:{ title:'予約の確認', salon:'サロン', menu:'メニュー', staff:'施術者', datetime:'日時', estimate:'目安金額', contactEmail:'予約連絡用メール', note:'※空でも予約はできます。メールを入れると bookings シートに反映されます。', submit:'この内容で予約する', backOnce:'一度戻る', process:'処理中…', select_dt:'日時を選択', prev:'‹ 前へ', next:'次へ ›', legend:'◯ 空き　× 予約不可' },
    pay:{ title:'Stripe支払い', method:'Stripe 支払い', method_title:'お支払い方法', pay_stripe:'Stripeで支払う', pay_cash:'現地支払いで続ける', note_open_newtab:'※ Stripeボタンは新しいタブで開きます。決済後は自動でサイトに戻るように（成功URL/キャンセルURL）をPayment Link設定で指定してください。', nonlink_title:'オンライン決済リンクが未設定', nonlink_desc:'このメニュー/クーポンにはStripeのPayment Linkが未設定です。現地支払いでご予約を続けられます。', choose_method_label:'支払い方法を選んでください：' },
    footer:{ terms:'Terms', privacy:'Privacy', cancel:'Cancel Policy', contact:'Contact' },
    mypage:{ title:'マイページ', favs:'お気に入り', search_history:'検索履歴', booking_history:'予約履歴', place:'場所', type:'種類', date:'日付', datetime:'日時', shop:'店舗', price_est:'料金目安', view_detail:'詳細を見る', unfav:'お気に入り解除' },
    details:{ rv_name_ph:'例：M*** さん', rv_text_ph:'施術の感想を書いてください', photos:'写真', menu:'メニュー', menu_empty:'（準備中です。スプレッドシートにメニューを追加したら自動表示されます）', coupons:'クーポン', coupon_empty:'（準備中です）', info:'店舗情報', fallback:'対象が見つからなかったので先頭のサロンを表示しています', genre:'ジャンル', area:'エリア', price:'目安価格', rating:'★評価', back_to_list:'一覧に戻る', go_reserve:'予約へ進む', map:'地図・道順', route_google:'Googleで道順', reviews:'レビュー', loading:'（読み込み中…）', verified_note:'施術後に配布される専用リンクからの投稿フォームです。', name_opt:'お名前（任意）', rating_lbl:'評価', comment_lbl:'コメント', submit_review:'この内容で投稿' },
    confirm:{ title:'予約内容の確認', uf_desc:'連絡が取れるメールアドレスと電話番号をご入力ください。', time_prefix:'時間 :', pay_prefix:'支払い :', staff_default:'指名なし', toast_missing:'未入力があります。', close:'閉じる', field_name:'お名前', field_email:'メール', field_phone:'電話番号', toast_prompt:'お支払いに進むには、{fields} を入力してください。' },
    card:{ card_no:'カード番号', save_btn:'カードを保存する', go_input:'カード情報の入力へ', title:'カード情報の保存（後払い用）', shop:'サロン', menu:'メニュー', staff:'施術者', when:'日時', price:'目安金額', i_agree:'利用規約に同意します', email:'メール', name:'お名前', check_then_go:'チェックしてから「カード情報の入力へ」を押してください。' },
    thanks:{ title:'ご予約ありがとうございます', msg:'この店舗の口コミ投稿ができるようになりました。', back_to_shop:'店舗ページへ戻る' }
  　terms_full_html: `
    <div class="container">
      <h1 data-i18n="footer.terms">利用規約</h1>
      <h2>1. サービス内容</h2>
      <p>本サービスはサロンの検索・予約のためのプラットフォームです。施術契約はゲストとサロン間で締結され、当社は当事者ではありません。</p>
      <h2>2. アカウント</h2>
      <p>正確な情報を登録し最新に保ってください。ポリシー違反があればアカウントを停止する場合があります。</p>
      <h2>3. 予約と支払い</h2>
      <p>一部の予約では Stripe によるカード情報の保存が必要です。課金は施術後、<a href="cancel.html">キャンセルポリシー</a>に従い行われます。</p>
      <h2>4. キャンセル</h2>
      <p>詳細は <a href="cancel.html">キャンセルポリシー</a> をご確認ください。</p>
      <h2>5. 免責</h2>
      <p>サロンが提供する施術・サービスについて当社は責任を負いません。紛争はゲストとサロン間で解決されます。</p>
      <h2>6. 準拠法</h2>
      <p>本規約は日本法（運用国に応じて調整）に準拠します。</p>
      <p><a href="index.html" data-i18n="ui.back">&larr; ホームへ戻る</a></p>
    </div>
  `,
  privacy_full_html: `
    <div class="container">
      <h1 data-i18n="footer.privacy">プライバシーポリシー</h1>
      <h2>取得する情報</h2>
      <p>氏名・メール・電話番号（任意）・予約情報・端末情報・Stripe が取り扱う決済トークン等。</p>
      <h2>利用目的</h2>
      <p>予約管理・通知送信・決済処理・品質向上・不正防止のため。</p>
      <h2>共同利用・提供</h2>
      <p>Stripe（決済）、Firebase（認証・メール）、WhatsApp/Twilio（通知）等の委託先と必要範囲で共有します。</p>
      <h2>保存期間</h2>
      <p>法令及び業務上必要な期間保持し、不要となった情報は削除または匿名化します。</p>
      <h2>セキュリティ</h2>
      <p>通信は暗号化され、決済データは PCI 準拠の Stripe が処理します。当社はカード番号を保持しません。</p>
      <h2>お問い合わせ</h2>
      <p>Email: support@beautylanka.example</p>
      <p><a href="index.html" data-i18n="ui.back">&larr; ホームへ戻る</a></p>
    </div>
  `,
  cancel_full_html: `
    <div class="container">
      <h1 data-i18n="footer.cancel">キャンセルポリシー</h1>
      <h2>24時間前まで無料</h2>
      <p>予約時間の24時間前までのキャンセルは無料です。</p>
      <h2>24時間以内：50%</h2>
      <p>24時間以内のキャンセルは予約金額の50%を申し受けます。</p>
      <h2>無断キャンセル</h2>
      <p>予約金額の最大100%の請求および以後のご利用制限となる場合があります。</p>
      <h2>キャンセル方法</h2>
      <p>確認メールのリンク、またはマイページ／お問い合わせよりお手続きください。</p>
      <h2>カードの事前確保</h2>
      <p>予約確保のため保存済みカードにオーソリ（与信枠の確保）を行う場合があります。最終請求は施術後に行われます。</p>
      <p><a href="index.html" data-i18n="ui.back">&larr; ホームへ戻る</a></p>
    </div>
  `,
  // Booking.com/HotPepperBeauty のトーンを参考にした問い合わせページ案
  contact_full_html: `
    <div class="container">
      <h1 data-i18n="footer.contact">お問い合わせ</h1>
      <p>ご不明点やご要望は、以下の方法でご連絡ください。</p>

      <h2>連絡方法</h2>
      <ul>
        <li><b>Email</b>：<a href="mailto:support@beautylanka.example">support@beautylanka.example</a></li>
        <li><b>WhatsApp</b>：準備中（近日公開）</li>
      </ul>

      <h2>よくあるご用件</h2>
      <ul>
        <li>予約の確認・変更・キャンセル（<a href="cancel.html">キャンセルポリシー</a>参照）</li>
        <li>支払い・領収書に関するお問い合わせ</li>
        <li>アカウント／ログインに関するサポート</li>
        <li>掲載・提携に関するご相談（サロン様向け）</li>
      </ul>

      <h2>対応時間</h2>
      <p>平日 10:00–18:00（現地時間）。内容により返信までお時間をいただく場合があります。</p>

      <h2>データの開示/削除請求</h2>
      <p>個人データの開示・訂正・削除をご希望の方は、登録メールアドレスからご連絡ください。</p>

      <p><a href="index.html" data-i18n="ui.back">&larr; ホームへ戻る</a></p>
    </div>
  `
});

  T.en = Object.assign({}, T.en, {
    ui:{ phone:'Phone', close:'Close', process:'Processing…', mypage:'My page', currency:'Currency', back_to_search:'Back to search', back:'← Back', toTop:'Back to top', show:'Show', your_name:'Your information', email:'Email', password:'Password', pay_with_card:'Pay with card (PayPal)', pay_on_site:'Pay at venue', done:'Done', confirm:'Confirm', yourInfo:'Your information', notes:'Notes', name:'Name', phone:'Phone' },
    auth:{ login:'Log in', signup:'Sign up', goto_signup:'Create an account', signup_here:'Create an account', login_with_password:'Log in with password', login_with_magic:'Log in via email link', send_magic:'Send sign-up link', magic_hint:'Open the link in the email to complete sign-up.', email:'Email', password:'Password' },
    search:{ ph_kw:'Keyword (e.g., lashes, spa)', place:'Area', type:'Type', btn:'Search' },
    reserve:{ title:'Reservation confirmation', salon:'Salon', menu:'Menu', staff:'Staff', datetime:'Date & time', estimate:'Estimated price', contactEmail:'Contact email', note:'You can book without email. If provided, it will appear on the bookings sheet.', submit:'Confirm booking', backOnce:'Go back', process:'Processing…', select_dt:'Select date & time', prev:'‹ Prev', next:'Next ›', legend:'◯ Available  × Unavailable' },
    pay:{ title:'Payment', method:'Payment', method_title:'Payment method', pay_stripe:'Pay with Stripe', pay_cash:'Continue with pay-on-site', note_open_newtab:'The Stripe button opens in a new tab. After payment, set success/cancel URLs in Payment Link to return here automatically.', nonlink_title:'Online payment link not set', nonlink_desc:'No Stripe Payment Link is set for this item. You can continue with pay-on-site.', choose_method_label:'Select a payment method: ' },
    footer:{ terms:'Terms', privacy:'Privacy', cancel:'Cancel Policy', contact:'Contact' },
    mypage:{ title:'My page', favs:'Favorites', search_history:'Search history', booking_history:'Bookings', place:'Place', type:'Type', date:'Date', datetime:'Date & time', shop:'Shop', price_est:'Est. price', view_detail:'View details', unfav:'Remove favorite' },
    details:{ rv_name_ph:'e.g., M***', rv_text_ph:'Write your experience...', photos:'Photos', menu:'Menu', menu_empty:'(Coming soon. Once menus are added to the sheet, they will appear automatically.)', coupons:'Coupons', coupon_empty:'(Coming soon)', info:'Shop info', fallback:'Target not found; showing the first salon.', genre:'Genre', area:'Area', price:'Est. price', rating:'Rating', back_to_list:'Back to list', go_reserve:'Go to booking', map:'Map & route', route_google:'Directions on Google', reviews:'Reviews', loading:'(Loading...)', verified_note:'This form is only accessible via a special link after the service.', name_opt:'Name (optional)', rating_lbl:'Rating', comment_lbl:'Comment', submit_review:'Post review' },
    confirm:{ title:'Review your reservation', uf_desc:'Enter an email and a phone number we can reach you at.', time_prefix:'Time:', pay_prefix:'Payment:', staff_default:'No preference', toast_missing:'Some fields are missing.', close:'Close', field_name:'name', field_email:'email', field_phone:'phone number', toast_prompt:'To proceed to payment, please enter {fields}.' },
    card:{ card_no:'Card number', save_btn:'Save card', go_input:'Go to card input', title:'Save your card (pay later)', shop:'Shop', menu:'Menu', staff:'Staff', when:'Date & time', price:'Est. price', i_agree:'I agree to the Terms', email:'Email', name:'Name', check_then_go:'Please check the box, then press “Go to card input”.' }
    terms_full_html: `
    <div class="container">
      <h1 data-i18n="footer.terms">Terms of Service</h1>
      <h2>1. Scope</h2>
      <p>We provide a platform to discover salons and make bookings. We are not a party to the treatment agreement between guests and salons.</p>
      <h2>2. Accounts</h2>
      <p>Provide accurate information and keep it updated. Accounts violating our policies may be suspended.</p>
      <h2>3. Bookings & Payments</h2>
      <p>Some bookings require saving a card via Stripe. Charges may be made after the service according to our <a href="cancel.html">Cancel Policy</a>.</p>
      <h2>4. Cancellations</h2>
      <p>See our <a href="cancel.html">Cancel Policy</a> for details.</p>
      <h2>5. Liability</h2>
      <p>We are not liable for services provided by salons. Disputes shall be resolved between the guest and the salon.</p>
      <h2>6. Governing Law</h2>
      <p>These terms are governed by the laws of Japan (adjust per operating country if needed).</p>
      <p><a href="index.html" data-i18n="ui.back">&larr; Back to home</a></p>
    </div>
  `,
  privacy_full_html: `
    <div class="container">
      <h1 data-i18n="footer.privacy">Privacy Policy</h1>
      <h2>Data we collect</h2>
      <p>Name, email, phone (if provided), booking details, device info, and payment tokens handled by Stripe.</p>
      <h2>Purpose</h2>
      <p>To manage bookings, send notifications, process payments, improve quality, and prevent fraud.</p>
      <h2>Sharing</h2>
      <p>We may share necessary data with providers such as Stripe (payments), Firebase (auth/emails), and WhatsApp/Twilio (notifications).</p>
      <h2>Retention</h2>
      <p>We retain data as required by law and business needs, then delete or anonymize it.</p>
      <h2>Security</h2>
      <p>Data is encrypted in transit. Payments are processed by PCI-compliant Stripe; we do not store full card numbers.</p>
      <h2>Contact</h2>
      <p>Email: support@beautylanka.example</p>
      <p><a href="index.html" data-i18n="ui.back">&larr; Back to home</a></p>
    </div>
  `,
  cancel_full_html: `
    <div class="container">
      <h1 data-i18n="footer.cancel">Cancel Policy</h1>
      <h2>Free until 24 hours prior</h2>
      <p>Cancellation is free up to 24 hours before your appointment time.</p>
      <h2>Within 24 hours: 50% fee</h2>
      <p>Cancellations within 24 hours incur a 50% fee of the booking amount.</p>
      <h2>No-show</h2>
      <p>No-show may result in up to 100% charge and future restrictions.</p>
      <h2>How to cancel</h2>
      <p>Use the link in your confirmation email or contact us via My Page / Contact.</p>
      <h2>Card authorization</h2>
      <p>We may authorize your saved card to secure the booking. Final charge is made after the service.</p>
      <p><a href="index.html" data-i18n="ui.back">&larr; Back to home</a></p>
    </div>
  `,
  // Tone inspired by booking.com & HotPepper Beauty: succinct, action-oriented, helpful
  contact_full_html: `
    <div class="container">
      <h1 data-i18n="footer.contact">Contact</h1>
      <p>If you have questions or requests, reach out via the options below.</p>

      <h2>Channels</h2>
      <ul>
        <li><b>Email</b>: <a href="mailto:support@beautylanka.example">support@beautylanka.example</a></li>
        <li><b>WhatsApp</b>: coming soon</li>
      </ul>

      <h2>Common topics</h2>
      <ul>
        <li>Check / change / cancel a booking (<a href="cancel.html">Cancel Policy</a>)</li>
        <li>Payments and receipts</li>
        <li>Account & login support</li>
        <li>Listing & partnerships (for salons)</li>
      </ul>

      <h2>Hours</h2>
      <p>Weekdays 10:00–18:00 (local time). Replies may take time depending on your request.</p>

      <h2>Data requests</h2>
      <p>To access, correct, or delete your personal data, please contact us from your registered email address.</p>

      <p><a href="index.html" data-i18n="ui.back">&larr; Back to home</a></p>
    </div>
  `
});

  function getLang(){
  return localStorage.getItem('lang') || localStorage.getItem('bl_lang') || 'ja';
}
  function setLang(l){ try{ localStorage.setItem('lang', l);}catch(e){} }
  function i18nApply(root){
    const lang = getLang();
    (root || document).querySelectorAll('[data-i18n]').forEach(el=>{
      const path = el.getAttribute('data-i18n').split('.');
      let cur = T[lang];
      for(const p of path){ if(cur && p in cur){ cur = cur[p]; } else { cur = null; break; } }
      if(typeof cur === 'string'){ el.textContent = cur; }
    });
    (root || document).querySelectorAll('[data-i18n-ph]').forEach(el=>{
      const path = el.getAttribute('data-i18n-ph').split('.');
      let cur = T[lang];
      for(const p of path){ if(cur && p in cur){ cur = cur[p]; } else { cur = null; break; } }
      if(typeof cur === 'string'){ el.placeholder = cur; }
    });
    document.documentElement.setAttribute('lang', lang==='ja'?'ja':'en');
    document.body.classList.toggle('ja', lang==='ja');
    document.body.classList.toggle('en', lang==='en');
  }
  
  global.BL_I18N = { T, getLang, setLang, i18nApply };
  // 例：lang.js のどこかの辞書に追加

})(window);
