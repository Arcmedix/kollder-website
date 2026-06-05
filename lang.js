/**
 * Kollder — Language persistence
 * lang.js runs on: article.njk, partner.njk, blog/index.njk
 * NOT on index.html or en/index.html (static pages, no setLang).
 *
 * Logic:
 *  1. Apply saved language preference if setLang() exists on this page.
 *  2. No browser-language detection, no auto-redirect — Cloudflare Pages
 *     serves the correct static page (/en/ vs /) based on URL.
 */
(function () {

  // ── Detect page language from <html lang=""> ─────────────────────────────
  var pageLang = document.documentElement.lang || 'fr';
  pageLang = pageLang.startsWith('en') ? 'en' : 'fr';

  // ── Apply saved preference if it differs from current page ───────────────
  var savedLang = localStorage.getItem('kollder_lang');
  if (savedLang && savedLang !== pageLang && typeof setLang === 'function') {
    setLang(savedLang);
  }

})();
