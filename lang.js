/**
 * Kollder — Language detection & persistence
 * Place this file at the root of the repo.
 * Add <script src="/lang.js"></script> to every page <head>.
 *
 * What it does:
 * 1. Reads saved language from localStorage ('kollder_lang')
 * 2. If no saved preference, detects browser language
 * 3. Shows a one-time banner if browser language ≠ page language
 * 4. Banner is dismissed permanently once clicked
 */

(function () {
  // ── 1. Detect page language from <html lang="..."> ──────────────────────
  var pageLang = document.documentElement.lang || 'fr';
  pageLang = pageLang.startsWith('en') ? 'en' : 'fr';

  // ── 2. Read saved preference ─────────────────────────────────────────────
  var savedLang = localStorage.getItem('kollder_lang');

  // ── 3. Detect browser language ───────────────────────────────────────────
  var browserLang = (navigator.language || navigator.userLanguage || 'fr').toLowerCase();
  browserLang = browserLang.startsWith('en') ? 'en' : 'fr';

  // ── 4. If user has a saved preference and it differs from page → no banner
  //       (they are already on the right language by their own choice)
  //    If no saved preference and browser differs from page → show banner
  var bannerDismissed = localStorage.getItem('kollder_lang_banner_dismissed');

  if (!bannerDismissed && !savedLang && browserLang !== pageLang) {
    document.addEventListener('DOMContentLoaded', function () {
      showLanguageBanner(pageLang, browserLang);
    });
  }

  // ── 5. Show banner ───────────────────────────────────────────────────────
  function showLanguageBanner(currentLang, targetLang) {
    var isEN = targetLang === 'en';

    var message = isEN
      ? 'This page is in French.'
      : 'Cette page est en anglais.';

    var switchText = isEN
      ? 'Switch to English →'
      : 'Passer en français →';

    var dismissText = isEN ? 'Keep French' : 'Garder l\'anglais';

    // Build banner element
    var banner = document.createElement('div');
    banner.id = 'kollder-lang-banner';
    banner.style.cssText = [
      'position: fixed',
      'bottom: 24px',
      'left: 50%',
      'transform: translateX(-50%)',
      'background: #0f0f0d',
      'color: #faf9f7',
      'padding: 14px 20px',
      'border-radius: 8px',
      'display: flex',
      'align-items: center',
      'gap: 16px',
      'font-family: "DM Sans", sans-serif',
      'font-size: 14px',
      'z-index: 9999',
      'box-shadow: 0 4px 24px rgba(0,0,0,0.3)',
      'white-space: nowrap',
      'max-width: calc(100vw - 48px)',
    ].join(';');

    // Message span
    var msg = document.createElement('span');
    msg.textContent = message;
    msg.style.opacity = '0.7';

    // Switch button
    var switchBtn = document.createElement('button');
    switchBtn.textContent = switchText;
    switchBtn.style.cssText = [
      'background: #faf9f7',
      'color: #0f0f0d',
      'border: none',
      'padding: 6px 14px',
      'border-radius: 4px',
      'font-size: 13px',
      'font-weight: 600',
      'cursor: pointer',
      'white-space: nowrap',
    ].join(';');

    // Dismiss button
    var dismissBtn = document.createElement('button');
    dismissBtn.textContent = dismissText;
    dismissBtn.style.cssText = [
      'background: transparent',
      'color: rgba(250,249,247,0.5)',
      'border: none',
      'padding: 6px 8px',
      'font-size: 13px',
      'cursor: pointer',
      'white-space: nowrap',
    ].join(';');

    banner.appendChild(msg);
    banner.appendChild(switchBtn);
    banner.appendChild(dismissBtn);
    document.body.appendChild(banner);

    // Switch action — save preference and navigate to equivalent page
    switchBtn.addEventListener('click', function () {
      localStorage.setItem('kollder_lang', targetLang);
      localStorage.setItem('kollder_lang_banner_dismissed', '1');
      dismissBanner();

      // Try to find equivalent article URL
      // Article URLs follow pattern: /blog/fr/slug/ or /blog/en/slug/
      var currentPath = window.location.pathname;
      var newPath = null;

      if (currentPath.includes('/blog/fr/')) {
        newPath = currentPath.replace('/blog/fr/', '/blog/en/');
      } else if (currentPath.includes('/blog/en/')) {
        newPath = currentPath.replace('/blog/en/', '/blog/fr/');
      } else if (currentPath.includes('/blog/')) {
        // Blog index — just add lang param
        newPath = null;
        if (typeof setLang === 'function') setLang(targetLang);
        return;
      } else {
        // Homepage or other — use setLang if available
        if (typeof setLang === 'function') setLang(targetLang);
        return;
      }

      if (newPath) {
        // Navigate to equivalent article, fallback to blog if 404
        window.location.href = newPath;
      }
    });

    // Dismiss action — save dismissal, never show again
    dismissBtn.addEventListener('click', function () {
      localStorage.setItem('kollder_lang', currentLang);
      localStorage.setItem('kollder_lang_banner_dismissed', '1');
      dismissBanner();
    });

    function dismissBanner() {
      banner.style.transition = 'opacity 0.3s, transform 0.3s';
      banner.style.opacity = '0';
      banner.style.transform = 'translateX(-50%) translateY(10px)';
      setTimeout(function () {
        if (banner.parentNode) banner.parentNode.removeChild(banner);
      }, 300);
    }

    // Auto-dismiss after 8 seconds
    setTimeout(function () {
      if (document.getElementById('kollder-lang-banner')) {
        dismissBanner();
      }
    }, 8000);
  }
})();
