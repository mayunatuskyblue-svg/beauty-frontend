(function(global){
 const T = global.BL_I18N && global.BL_I18N.T ? global.BL_I18N.T : { ja:{}, en:{} };
 
 T.ja =T.ja.hero_title = 'スリランカで叶える、私だけの美しさ。';
T.en.hero_title = 'Your beauty, your way — in Sri Lanka.';
T.ja.hero_sub   = 'ヘア・ネイル・まつ毛・アーユルヴェーダ・マッサージ/スパ。口コミと写真で選べる予約サイト。';
T.en.hero_sub   = 'Hair, nails, lashes, Ayurveda, spa & massage. Book with reviews and photos.'; 
  Object.assign({}, T.ja, {
      ui:{ phone:'電話番号', close:'閉じる', process:'処理中…' , mypage:'マイページ', currency:'通貨' , back_to_search:'検索に戻る' , back:'← 戻る', toTop:'トップに戻る', show:'表示', your_name:'お名前', email:'メールアドレス', password:'パスワード',
      pay_with_card:'カードで支払う（PayPal）', pay_on_site:'現地で支払う（記録）', done:'完了', confirm:'確認', yourInfo:'予約者情報', notes:'要望・メモ（任意）', name:'お名前 / Name', phone:'電話番号 / Phone' },
  auth:{ login:'ログイン', signup:'新規登録', goto_signup:'新規登録はこちら', signup_here:'新規登録はこちら', login_with_password:'パスワードでログイン', login_with_magic:'メールリンクでログイン', send_magic:'ログインリンクを送る/登録用リンクを送る', magic_hint:'メール内のリンクを開くと登録が完了します。', email:'メールアドレス', password:'パスワード' },
  reserve:{ title:'予約の確認', salon:'サロン', menu:'メニュー', staff:'施術者', datetime:'日時', estimate:'目安金額', contactEmail:'予約連絡用メール', note:'※空でも予約はできます。メールを入れると bookings シートに反映されます。', submit:'この内容で予約する', backOnce:'一度戻る', process:'処理中…', select_dt:'日時を選択', prev:'‹ 前へ', next:'次へ ›', legend:'◯ 空き　× 予約不可' },
  search:{ ph_kw:'キーワード（例：まつ毛、スパ）', place:'場所', type:'種類', btn:'検索' },
  pay:{ title:'Stripe支払い', method:'Stripe 支払い', method_title:'お支払い方法', pay_stripe:'Stripeで支払う', pay_cash:'現地支払いで続ける', note_open_newtab:'※ Stripeボタンは新しいタブで開きます。決済後は自動でサイトに戻るように（成功URL/キャンセルURL）をPayment Link設定で指定してください。', nonlink_title:'オンライン決済リンクが未設定', nonlink_desc:'このメニュー/クーポンにはStripeのPayment Linkが未設定です。現地支払いでご予約を続けられます。', choose_method_label:'支払い方法を選んでください：' },
  footer:{ terms:'Terms', privacy:'Privacy', cancel:'Cancel Policy', contact:'Contact' },
  mypage:{
  title:'マイページ', favs:'お気に入り', search_history:'検索履歴', booking_history:'予約履歴',
  place:'場所', type:'種類', date:'日付', datetime:'日時', shop:'店舗', price_est:'料金目安'
},
  details:{ rv_name_ph:'例：M*** さん', rv_text_ph:'施術の感想を書いてください' ,
  photos:'写真', menu:'メニュー', menu_empty:'（準備中です。スプレッドシートにメニューを追加したら自動表示されます）',
  coupons:'クーポン', coupon_empty:'（準備中です）', info:'店舗情報', fallback:'対象が見つからなかったので先頭のサロンを表示しています',
  genre:'ジャンル', area:'エリア', price:'目安価格', rating:'★評価',
  back_to_list:'一覧に戻る', go_reserve:'予約へ進む',
  map:'地図・道順', route_google:'Googleで道順',
  reviews:'レビュー', loading:'（読み込み中…）',
  verified_note:'施術後に配布される専用リンクからの投稿フォームです。', name_opt:'お名前（任意）', rating_lbl:'評価', comment_lbl:'コメント', submit_review:'この内容で投稿'
},
  confirm:{
  title:'予約内容の確認', uf_desc:'連絡が取れるメールアドレスと電話番号をご入力ください。',
  time_prefix:'時間 :', pay_prefix:'支払い :', staff_default:'指名なし',
  toast_missing:'未入力があります。', close:'閉じる',
  // バリデーションで使うフィールド名
  field_name:'お名前', field_email:'メール', field_phone:'電話番号',
  toast_prompt:'お支払いに進むには、{fields} を入力してください。'
},
  card:{ card_no:'カード番号' , save_btn:'カードを保存する', go_input:'カード情報の入力へ' , 
  title:'カード情報の保存（後払い用）', shop:'サロン', menu:'メニュー', staff:'施術者', when:'日時', price:'目安金額',
  i_agree:'利用規約に同意します', go_input:'カード情報の入力へ',
  email:'メール', name:'お名前', check_then_go:'チェックしてから「カード情報の入力へ」を押してください。'
},
  thanks:{ title:'ご予約ありがとうございます', msg:'この店舗の口コミ投稿ができるようになりました。', back_to_shop:'店舗ページへ戻る' }
});
 T.en = Object.assign({}, T.en, {
  ui:{ phone:'Phone', close:'Close', process:'Processing…' , mypage:'My page', currency:'Currency' , back_to_search:'Back to search' , back:'← Back', toTop:'Back to top', show:'Show', your_name:'Your name', email:'Email', password:'Password',
      pay_with_card:'Pay with card (PayPal)', pay_on_site:'Pay at venue', done:'Done', confirm:'Confirm', yourInfo:'Your information', notes:'Notes', name:'Name', phone:'Phone' },
  auth:{ login:'Log in', signup:'Sign up', signup_here:'Create an account', login_with_password:'Log in with password', login_with_magic:'Log in via email link', send_magic:'Send sign-up link', magic_hint:'Open the link in the email to complete sign-up.', email:'Email', password:'Password' },
  reserve:{ title:'Reservation confirmation', salon:'Salon', menu:'Menu', staff:'Staff', datetime:'Date & time', estimate:'Estimated price', contactEmail:'Contact email', note:'You can book without email. If provided, it will appear on the bookings sheet.', submit:'Confirm booking', backOnce:'Go back', process:'Processing…', select_dt:'Select date & time', prev:'‹ Prev', next:'Next ›', legend:'◯ Available  × Unavailable' },
  pay:{ title:'Payment', method:'Payment', method_title:'Payment method', pay_stripe:'Pay with Stripe', pay_cash:'Continue with pay-on-site', note_open_newtab:'The Stripe button opens in a new tab. After payment, set success/cancel URLs in Payment Link to return here automatically.', nonlink_title:'Online payment link not set', nonlink_desc:'No Stripe Payment Link is set for this item. You can continue with pay-on-site.', choose_method_label:'Select a payment method: ' },
  search:{ ph_kw:'Keyword (e.g., lashes, spa)', place:'Area', type:'Type', btn:'Search' },
  thanks:{ title:'Thank you for your reservation', msg:'You can now post a review for this shop.', back_to_shop:'Back to shop page' },
  mypage:{
  title:'My page', favs:'Favorites', search_history:'Search history', booking_history:'Bookings',
  place:'Place', type:'Type', date:'Date', datetime:'Date & time', shop:'Shop', price_est:'Est. price'
},
  details:{ rv_name_ph:'e.g., M***', rv_text_ph:'Write your experience...' ,
  photos:'Photos', menu:'Menu', menu_empty:'(Coming soon. Once menus are added to the sheet, they will appear automatically.)',
  coupons:'Coupons', coupon_empty:'(Coming soon)', info:'Shop info', fallback:'Target not found; showing the first salon.',
  genre:'Genre', area:'Area', price:'Est. price', rating:'Rating',
  back_to_list:'Back to list', go_reserve:'Go to booking',
  map:'Map & route', route_google:'Directions on Google',
  reviews:'Reviews', loading:'(Loading...)',
  verified_note:'This form is only accessible via a special link after the service.', name_opt:'Name (optional)', rating_lbl:'Rating', comment_lbl:'Comment', submit_review:'Post review'
},
  confirm:{
  title:'Review your reservation', uf_desc:'Enter an email and a phone number we can reach you at.',
  time_prefix:'Time:', pay_prefix:'Payment:', staff_default:'No preference',
  toast_missing:'Some fields are missing.', close:'Close',
  field_name:'name', field_email:'email', field_phone:'phone number',
  toast_prompt:'To proceed to payment, please enter {fields}.'
},
  card:{ card_no:'Card number', save_btn:'Save card', go_input:'Go to card input' ,
  title:'Save your card (pay later)', shop:'Shop', menu:'Menu', staff:'Staff', when:'Date & time', price:'Est. price',
  i_agree:'I agree to the Terms', go_input:'Go to card input',
  email:'Email', name:'Name', check_then_go:'Please check the box, then press “Go to card input”.'
},
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

})(window);
