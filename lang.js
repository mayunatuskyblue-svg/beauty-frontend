
(function(global){
 T.ja = Object.assign({}, T.ja, {
      ui:{back:'← 戻る', toTop:'トップに戻る', show:'表示', your_name:'お名前', email:'メールアドレス', password:'パスワード',
      pay_with_card:'カードで支払う（PayPal）', pay_on_site:'現地で支払う（記録）', done:'完了', confirm:'確認', yourInfo:'予約者情報', notes:'要望・メモ（任意）', name:'お名前 / Name', phone:'電話番号 / Phone' },
  auth:{ login:'ログイン', signup:'新規登録', signup_here:'新規登録はこちら', login_with_password:'パスワードでログイン', login_with_magic:'メールリンクでログイン', send_magic:'登録用リンクを送る', magic_hint:'メール内のリンクを開くと登録が完了します。', email:'メールアドレス', password:'パスワード' },
  reserve:{ title:'予約の確認', salon:'サロン', menu:'メニュー', staff:'施術者', datetime:'日時', estimate:'目安金額', contactEmail:'予約連絡用メール', note:'※空でも予約はできます。メールを入れると bookings シートに反映されます。', submit:'この内容で予約する', backOnce:'一度戻る', process:'処理中…', select_dt:'日時を選択', prev:'‹ 前へ', next:'次へ ›', legend:'◯ 空き　× 予約不可' },
  pay:{ title:'Stripe支払い', method:'Stripe 支払い', method_title:'お支払い方法', pay_stripe:'Stripeで支払う', pay_cash:'現地支払いで続ける', note_open_newtab:'※ Stripeボタンは新しいタブで開きます。決済後は自動でサイトに戻るように（成功URL/キャンセルURL）をPayment Link設定で指定してください。', nonlink_title:'オンライン決済リンクが未設定', nonlink_desc:'このメニュー/クーポンにはStripeのPayment Linkが未設定です。現地支払いでご予約を続けられます。', choose_method_label:'支払い方法を選んでください：' },
  footer:{ terms:'Terms', privacy:'Privacy', cancel:'Cancel Policy', contact:'Contact' }
});
 T.en = Object.assign({}, T.en, {
  ui:{ back:'← Back', toTop:'Back to top', show:'Show', your_name:'Your name', email:'Email', password:'Password',
      pay_with_card:'Pay with card (PayPal)', pay_on_site:'Pay at venue', done:'Done', confirm:'Confirm', yourInfo:'Your information', notes:'Notes', name:'Name', phone:'Phone' },
  auth:{ login:'Log in', signup:'Sign up', signup_here:'Create an account', login_with_password:'Log in with password', login_with_magic:'Log in via email link', send_magic:'Send sign-up link', magic_hint:'Open the link in the email to complete sign-up.', email:'Email', password:'Password' },
  reserve:{ title:'Reservation confirmation', salon:'Salon', menu:'Menu', staff:'Staff', datetime:'Date & time', estimate:'Estimated price', contactEmail:'Contact email', note:'You can book without email. If provided, it will appear on the bookings sheet.', submit:'Confirm booking', backOnce:'Go back', process:'Processing…', select_dt:'Select date & time', prev:'‹ Prev', next:'Next ›', legend:'◯ Available  × Unavailable' },
  pay:{ title:'Payment', method:'Payment', method_title:'Payment method', pay_stripe:'Pay with Stripe', pay_cash:'Continue with pay-on-site', note_open_newtab:'The Stripe button opens in a new tab. After payment, set success/cancel URLs in Payment Link to return here automatically.', nonlink_title:'Online payment link not set', nonlink_desc:'No Stripe Payment Link is set for this item. You can continue with pay-on-site.', choose_method_label:'Select a payment method: ' },
  footer:{ terms:'Terms', privacy:'Privacy', cancel:'Cancel Policy', contact:'Contact' }
});
  
  function getLang(){ return localStorage.getItem('lang') || 'ja'; }
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
BL_I18N.dict = BL_I18N.dict || {};
BL_I18N.dict.ja = Object.assign(BL_I18N.dict.ja||{}, {
  "ui.back": "← 戻る",
  "ui.email": "メールアドレス",
  "ui.password": "パスワード",
  "ui.show": "表示",
  "ui.your_name": "お名前",

  "auth.login": "ログイン",
  "auth.signup": "新規登録",
  "auth.signup_here": "新規登録はこちら",
  "auth.password_signup": "パスワード登録",
  "auth.magic_signup": "メールリンク登録",
  "auth.create_account": "アカウント作成",
  "auth.send_magic": "登録用リンクを送る",
  "auth.magic_hint": "メール内のリンクを開くと登録が完了します。",

  "booking.title": "予約",
  "booking.salon": "サロン",
  "booking.menu": "メニュー",
  "booking.date": "日付",
  "booking.time": "時間",
  "booking.staff": "施術者",
  "booking.confirm": "予約を確定する",
  "booking.note_cancel": "キャンセルポリシーをご確認ください。",

  "contact.title": "お問い合わせ",
  "contact.message": "お問い合わせ内容",

  "footer.terms": "Terms",
  "footer.privacy": "Privacy",
  "footer.cancel": "Cancel Policy",
  "footer.contact": "Contact",
});

BL_I18N.dict.en = Object.assign(BL_I18N.dict.en||{}, {
  "ui.back": "← Back",
  "ui.email": "Email",
  "ui.password": "Password",
  "ui.show": "Show",
  "ui.your_name": "Your name",

  "auth.login": "Log in",
  "auth.signup": "Sign up",
  "auth.signup_here": "Create an account",
  "auth.password_signup": "Sign up with password",
  "auth.magic_signup": "Sign up with email link",
  "auth.create_account": "Create account",
  "auth.send_magic": "Send sign-up link",
  "auth.magic_hint": "Open the link in the email to complete sign-up.",

  "booking.title": "Booking",
  "booking.salon": "Salon",
  "booking.menu": "Menu",
  "booking.date": "Date",
  "booking.time": "Time",
  "booking.staff": "Staff",
  "booking.confirm": "Confirm booking",
  "booking.note_cancel": "Please review the cancel policy.",

  "contact.title": "Contact",
  "contact.message": "Message",

  "footer.terms": "Terms",
  "footer.privacy": "Privacy",
  "footer.cancel": "Cancel Policy",
  "footer.contact": "Contact",
  // 追記例（既存の T でも BL_I18N.dict.* でもOK、どちらかに寄せる）
BL_I18N.dict = BL_I18N.dict || {};
BL_I18N.dict.ja = Object.assign(BL_I18N.dict.ja || {}, {
  "auth.login_with_password": "パスワードでログイン",
  "auth.login_with_magic": "メールリンクでログイン",

  "pay.title": "Stripe支払い",
  "pay.method": "Stripe 支払い",
  "pay.method_title": "お支払い方法",
  "pay.pay_stripe": "Stripeで支払う",
  "pay.pay_cash": "現地支払いで続ける",
  "pay.note_open_newtab": "※ Stripeボタンは新しいタブで開きます。決済後は自動でサイトに戻るように（成功URL/キャンセルURL）をPayment Link設定で指定してください。",
  "pay.nonlink_title": "オンライン決済リンクが未設定",
  "pay.nonlink_desc": "このメニュー/クーポンにはStripeのPayment Linkが未設定です。現地支払いでご予約を続けられます。",

  "reserve.title": "予約の確認",
  "reserve.staff": "施術者",
  "reserve.select_dt": "日時選択",
  "reserve.prev": "‹ 前へ",
  "reserve.next": "次へ ›",
  "reserve.legend": "◯ 空き　× 予約不可",
});
BL_I18N.dict.en = Object.assign(BL_I18N.dict.en || {}, {
  "auth.login_with_password": "Log in with password",
  "auth.login_with_magic": "Log in via email link",

  "pay.title": "Payment",
  "pay.method": "Payment",
  "pay.method_title": "Payment method",
  "pay.pay_stripe": "Pay with Stripe",
  "pay.pay_cash": "Continue with pay-on-site",
  "pay.note_open_newtab": "The Stripe button opens in a new tab. After payment, set success/cancel URLs in Payment Link to return here automatically.",
  "pay.nonlink_title": "Online payment link not set",
  "pay.nonlink_desc": "No Stripe Payment Link is set for this item. You can continue with pay-on-site.",

  "reserve.title": "Reservation confirmation",
  "reserve.staff": "Staff",
  "reserve.select_dt": "Select date & time",
  "reserve.prev": "‹ Prev",
  "reserve.next": "Next ›",
  "reserve.legend": "◯ Available  × Unavailable",
});

})(window);
