/**
 * Kollder — Language detection & persistence
 * Single source of truth for all language logic across the site.
 * Modify this file to update the banner appearance or behaviour site-wide.
 */
(function () {

  // ── Detect page language ─────────────────────────────────────────────────
  var pageLang = document.documentElement.lang || 'fr';
  pageLang = pageLang.startsWith('en') ? 'en' : 'fr';

  // ── Read saved preference ────────────────────────────────────────────────
  var savedLang = localStorage.getItem('kollder_lang');

  // ── Detect browser language ──────────────────────────────────────────────
  var browserLang = (navigator.language || 'fr').toLowerCase();
  browserLang = browserLang.startsWith('en') ? 'en' : 'fr';

  // ── Apply saved preference if exists (blog index + homepage) ────────────
  if (savedLang && typeof setLang === 'function') {
    setLang(savedLang);
  }

  // ── Show banner if needed ────────────────────────────────────────────────
  var bannerDismissed = localStorage.getItem('kollder_lang_banner_dismissed');
  if (!bannerDismissed && !savedLang && browserLang !== pageLang) {
    document.addEventListener('DOMContentLoaded', function () {
      showBanner(pageLang, browserLang);
    });
  }

  function showBanner(currentLang, targetLang) {
    var isEN = targetLang === 'en';

    // ── Banner container ───────────────────────────────────────────────────
    var banner = document.createElement('div');
    banner.id = 'kollder-lang-banner';
    banner.style.cssText = [
      'position:fixed',
      'bottom:24px',
      'left:50%',
      'transform:translateX(-50%)',
      'background:#0f0f0d',
      'color:#faf9f7',
      'padding:14px 20px',
      'border-radius:8px',
      'display:flex',
      'align-items:center',
      'gap:16px',
      'font-family:"DM Sans",sans-serif',
      'font-size:14px',
      'z-index:9999',
      'box-shadow:0 4px 24px rgba(0,0,0,0.3)',
      'white-space:nowrap',
      'max-width:calc(100vw - 48px)'
    ].join(';');

    // ── Message ────────────────────────────────────────────────────────────
    var msg = document.createElement('span');
    msg.textContent = isEN ? 'This page is in French.' : 'Cette page est en anglais.';
    msg.style.opacity = '0.7';

    // ── Switch button ──────────────────────────────────────────────────────
    var switchBtn = document.createElement('button');
    switchBtn.textContent = isEN ? 'Switch to English \u2192' : 'Passer en fran\u00e7ais \u2192';
    switchBtn.style.cssText = [
      'background:#faf9f7',
      'color:#0f0f0d',
      'border:none',
      'padding:6px 14px',
      'border-radius:4px',
      'font-size:13px',
      'font-weight:600',
      'cursor:pointer',
      'white-space:nowrap'
    ].join(';');

    // ── Dismiss button ─────────────────────────────────────────────────────
    var dismissBtn = document.createElement('button');
    dismissBtn.textContent = isEN ? 'Keep French' : "Garder l'anglais";
    dismissBtn.style.cssText = [
      'background:transparent',
      'color:rgba(250,249,247,0.5)',
      'border:none',
      'padding:6px 8px',
      'font-size:13px',
      'cursor:pointer',
      'white-space:nowrap'
    ].join(';');

    banner.appendChild(msg);
    banner.appendChild(switchBtn);
    banner.appendChild(dismissBtn);
    document.body.appendChild(banner);

    // ── Dismiss helper ─────────────────────────────────────────────────────
    function dismiss() {
      banner.style.transition = 'opacity 0.3s, transform 0.3s';
      banner.style.opacity = '0';
      banner.style.transform = 'translateX(-50%) translateY(8px)';
      setTimeout(function () {
        if (banner.parentNode) banner.parentNode.removeChild(banner);
      }, 300);
    }

    // ── Switch action ──────────────────────────────────────────────────────
    switchBtn.addEventListener('click', function () {
      localStorage.setItem('kollder_lang', targetLang);
      localStorage.setItem('kollder_lang_banner_dismissed', '1');
      dismiss();
      var p = window.location.pathname;
      if (p.includes('/blog/fr/') || p.includes('/blog/en/')) {
        // Article page — go to blog in target language
        localStorage.setItem('kollder_lang', targetLang);
        window.location.href = '/blog/';
      } else if (typeof setLang === 'function') {
        // Homepage or blog index — switch in place
        setLang(targetLang);
      }
    });

    // ── Keep current language ──────────────────────────────────────────────
    dismissBtn.addEventListener('click', function () {
      localStorage.setItem('kollder_lang', currentLang);
      localStorage.setItem('kollder_lang_banner_dismissed', '1');
      dismiss();
    });

    // ── Auto-dismiss after 8s ──────────────────────────────────────────────
    setTimeout(function () {
      if (document.getElementById('kollder-lang-banner')) dismiss();
    }, 8000);
  }

})();
