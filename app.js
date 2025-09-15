
// app.js - shared behaviors for BeautyLanka
(function(){

// /* currency patch v2 */
// Redefine rates as per-1 unit of currency to LKR
const rates = { LKR:1, USD:300.0, JPY:2.0, EUR:330.0 };
function formatPrice(fromCur, amount, toCur){
  const fromRate = rates[fromCur]||1;
  const toRate = rates[toCur]||1;
  const lkr = amount*fromRate;
  const val = lkr/toRate;
  try{
    return new Intl.NumberFormat(lang, {style:'currency', currency:toCur}).format(val);
  }catch(e){
    return val.toFixed(0)+' '+toCur;
  }
}
window.BL_format = formatPrice;

// repaintPrices override
function repaintPrices(){
  /*enhanced-repaint*/
  document.querySelectorAll('[data-price-lkr]').forEach(el=>{
    const lkr=parseFloat(el.getAttribute('data-price-lkr'))||0;
    el.textContent = formatPrice('LKR', lkr, currentCurrency);
  });
  document.querySelectorAll('.card[data-price]').forEach(card=>{
    const price=parseFloat(card.getAttribute('data-price'))||0;
    const from=card.getAttribute('data-cur')||'LKR';
    const el=card.querySelector('.rowmeta b, .price b, b');
    if(el){ el.textContent = formatPrice(from, price, currentCurrency); }
  });
  const priceBox=document.getElementById('price');
  if(priceBox && priceBox.hasAttribute('data-price')){
    const from=priceBox.getAttribute('data-cur')||'LKR';
    const val=parseFloat(priceBox.getAttribute('data-price'))||0;
    const txt=(window.BL_lang==='en'?'From ':'料金目安：')+formatPrice(from,val,currentCurrency)+(window.BL_lang==='en'?'':'〜');
    priceBox.textContent=txt;
  }
}
window.repaintPrices = repaintPrices;
document.addEventListener('DOMContentLoaded', repaintPrices);

  const ls = {
    get(k, d){ try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d } },
    set(k, v){ localStorage.setItem(k, JSON.stringify(v)); }
  };

  // ---- Language handling ----
  const langPref = (ls.get('bl_lang_pref','auto'));
  const sysLang = (navigator.language||'en').toLowerCase().startsWith('ja') ? 'ja':'en';
  const lang = (langPref==='auto'? sysLang : langPref);
  document.documentElement.setAttribute('lang', lang);

  // ---- Currency handling ----
  const defaultByLang = { ja:'JPY', en:'USD' };
  const currencyPref = ls.get('bl_currency', defaultByLang[lang] || 'USD');
  let currentCurrency = currencyPref;
  // Static rates (update server-side later). Base: LKR.
  const rates = { LKR:1, USD: 1/300.0, JPY: 1/2.0, EUR: 1/330.0 }; // placeholder
  function formatPriceLKRto(cur, lkrAmount){
    const rate = rates[cur] || 1;
    const val = (lkrAmount * rate);
    try {
      return new Intl.NumberFormat(lang, { style:'currency', currency:cur }).format(val);
    } catch {
      const sym = cur==='USD'?'$':(cur==='JPY'?'¥':(cur==='EUR'?'€':'Rs '));
      return sym + Math.round(val).toLocaleString(lang);
    }
  }
  window.BL_formatPrice = (lkr) => formatPriceLKRto(currentCurrency, lkr);
  // Convert from arbitrary currency to current
  function formatFromCurrency(from, amount){
    // Convert source -> LKR -> current
    const rFrom = rates[from] || 1; // rFrom is amount of 'from' per LKR (per our mapping)
    // If mapping is LKR->target factor, then 1 LKR * rate[target] = target.
    // So to get LKR from 'from', divide by its rate.
    const lkr = amount / rFrom;
    return formatPriceLKRto(currentCurrency, lkr);
  }
  window.BL_formatFrom = (from, amount) => formatFromCurrency(from, amount);

  function repaintPrices(){
  /*enhanced-repaint*/
    // Elements with explicit LKR base
    document.querySelectorAll('[data-price-lkr]').forEach(el=>{
      const lkr = parseFloat(el.getAttribute('data-price-lkr'))||0;
      el.textContent = formatPriceLKRto(currentCurrency, lkr);
    });
    // Cards carrying price in non-LKR (e.g., JPY)
    document.querySelectorAll('.card[data-price]').forEach(card=>{
      const price = parseFloat(card.getAttribute('data-price'))||0;
      const from = card.getAttribute('data-cur')||'LKR';
      const el = card.querySelector('.rowmeta b, .price b, b');
      if(el){ el.textContent = formatFromCurrency(from, price); }
    });
    // Explicit price spans
    document.querySelectorAll('.priceVal').forEach(el=>{
      const from = el.getAttribute('data-cur')||'LKR';
      const val = parseFloat(el.getAttribute('data-price'))||0;
      el.textContent = formatFromCurrency(from, val);
    });

    // Details page header price
    const priceBox = document.getElementById('price');
    if(priceBox && priceBox.hasAttribute('data-price')){
      const from = priceBox.getAttribute('data-cur')||'LKR';
      const val = parseFloat(priceBox.getAttribute('data-price'))||0;
      const txt = (window.BL_lang==='en' ? 'From ' : '料金目安：') + formatFromCurrency(from, val) + (window.BL_lang==='en' ? '' : '〜');
      priceBox.textContent = txt;
    }
  }
  document.addEventListener('DOMContentLoaded', repaintPrices);
  document.addEventListener('DOMContentLoaded', ()=>{
    try{
      const mo=new MutationObserver(()=>{ repaintPrices(); });
      mo.observe(document.body, {childList:true, subtree:true});
    }catch(e){}
  });

  window.BL_setCurrency = (cur)=>{
    currentCurrency = cur;
    ls.set('bl_currency', cur);
    // repaint prices
    document.querySelectorAll('[data-price-lkr]').forEach(el=>{
      const lkr = parseFloat(el.getAttribute('data-price-lkr'))||0;
      el.textContent = formatPriceLKRto(cur, lkr);
    });
    const x = document.getElementById('currencySelect'); if(x) x.value = cur; try{repaintPrices();}catch(e){}
  };

  // ---- Apply prices on load ----
  document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelectorAll('[data-price-lkr]').forEach(el=>{
      const lkr = parseFloat(el.getAttribute('data-price-lkr'))||0;
      el.textContent = formatPriceLKRto(currentCurrency, lkr);
    });
    const curSel = document.getElementById('currencySelect');
    if(curSel){ curSel.value = currentCurrency; curSel.addEventListener('change', e=> window.BL_setCurrency(e.target.value)); }

    const langSel = document.getElementById('langSelect');
    if(langSel){ langSel.value = langPref; langSel.addEventListener('change', e=> { ls.set('bl_lang_pref', e.target.value); location.reload(); }); }
  });

  // ---- Microinteractions ----
  // Scroll fade-ins
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelectorAll('.fade-on-scroll').forEach(el=> io.observe(el));
  });

  // Tag press ripple tactile feel
  document.addEventListener('pointerdown', (e)=>{
    const tag = e.target.closest('.tag, .chip');
    if(!tag) return;
    tag.classList.add('pressed');
  });
  document.addEventListener('pointerup', (e)=>{
    document.querySelectorAll('.tag.pressed, .chip.pressed').forEach(el=> el.classList.remove('pressed'));
  });

  // ---- Breadcrumbs ----
  function buildCrumbs(){
    const map = {
      '/index.html': { label:{ja:'検索', en:'Search'} },
      '/details.html': { label:{ja:'詳細', en:'Details'} },
      '/reservation.html': { label:{ja:'予約', en:'Reservation'} },
      '/confirm.html': { label:{ja:'確認', en:'Confirm'} },
      '/payments.html': { label:{ja:'支払い', en:'Payment'} },
      '/thankyou.html': { label:{ja:'完了', en:'Done'} },
      '/login.html': { label:{ja:'ログイン', en:'Log in'} },
      '/signup.html': { label:{ja:'新規登録', en:'Sign up'} },
      '/mypage.html': { label:{ja:'マイページ', en:'My Page'} }
    };
    const path = location.pathname.replace(/.*\//,'');
    const order = ['index.html','details.html','reservation.html','confirm.html','payments.html','thankyou.html'];
    const list = [];
    for(const p of order){
      if(map['/'+p]){
        list.push({ href:p, text: map['/'+p].label[lang] });
        if(p===path) break;
      }
    }
    const el = document.querySelector('.breadcrumbs');
    if(!el) return;
    el.innerHTML = list.map((x,i)=> `<a ${i===list.length-1?'aria-current="page"':''} href="${i===list.length-1?'#':x.href}">${x.text}</a>`).join('<span class="sep">›</span>');
  }
  document.addEventListener('DOMContentLoaded', buildCrumbs);

  // ---- i18n pass (lightweight). Will prefer [data-i18n] keys if present. ----
  const dict = {
    ja: {
      search:'検索', login:'ログイン', signup:'新規登録', mypage:'マイページ', details:'詳細',
      book:'予約へ進む', viewMap:'地図で見る', highlights:'おすすめポイント：', reservation:'予約', confirm:'確認',
      payment:'支払い', done:'完了', staff:'施術者', noPreference:'指名なし', reviews:'レビュー', viewAll:'すべて見る',
      selectDate:'日付を選択', selectTime:'時間を選択', selectStaff:'施術者を選ぶ', reserve:'予約する'
    },
    en: {
      search:'Search', login:'Log in', signup:'Sign up', mypage:'My Page', details:'Details',
      book:'Book', viewMap:'View map', highlights:'Highlights:', reservation:'Reservation', confirm:'Confirm',
      payment:'Payment', done:'Done', staff:'Staff', noPreference:'No preference', reviews:'Reviews', viewAll:'View all',
      selectDate:'Select date', selectTime:'Select time', selectStaff:'Choose a staff', reserve:'Reserve'
    }
  };
  function applyI18n(){
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      const v = dict[lang]?.[key];
      if(v) el.textContent = v;
    });
    // placeholders
    document.querySelectorAll('[data-ph]').forEach(el=>{
      const key = el.getAttribute('data-ph');
      const v = dict[lang]?.[key];
      if(v) el.setAttribute('placeholder', v);
    });
  }
  document.addEventListener('DOMContentLoaded', applyI18n);

  // ---- API stub (swap to real backend later) ----
  window.BL_API = (function(){
    const useLocal = true; // flip to false and implement fetch calls later
    const KEYS = { reviews:'bl_reviews', staff:'bl_staff' };
    function seed(){
      if(!ls.get(KEYS.staff)) ls.set(KEYS.staff, [
        { id:'s1', name:'Aisha' }, { id:'s2', name:'Nimal' }, { id:'s3', name:'Mika' }
      ]);
      if(!ls.get(KEYS.reviews)) ls.set(KEYS.reviews, [
        { id:1, user:'Yuki', rating:5, text:'最高でした！'},
        { id:2, user:'Anna', rating:4, text:'Great service and ambience.'},
        { id:3, user:'Sara', rating:5, text:'Loved the massage and tea.'},
        { id:4, user:'Emma', rating:4, text:'Booked again for next week!'}
      ]);
    }
    seed();
    return {
      async listStaff(){ return ls.get(KEYS.staff,[]) },
      async listReviews(){ return ls.get(KEYS.reviews,[]) },
    };
  })();

  // Make some helpers globally accessible
  window.BL_lang = lang;
  window.BL_currentCurrency = ()=>currentCurrency;
})();
