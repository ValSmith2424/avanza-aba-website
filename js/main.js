/* ============================================================
   AVANZA ABA — Main JS
   Form handling, utilities, misc interactions
   ============================================================ */

(function () {
  // ── LANGUAGE AUTO-DETECTION ────────────────────────────────
  // On first visit with no saved preference, redirect Spanish-language
  // browsers to the /es/ version. Respects manual EN↔ES switches.
  (function detectLang() {
    const isEsPage = window.location.pathname.includes('/es/');
    const savedPref = localStorage.getItem('avanza-lang');

    if (!isEsPage && !savedPref) {
      const lang = (navigator.language || navigator.userLanguage || '').toLowerCase();
      if (lang.startsWith('es')) {
        const page = window.location.pathname.replace(/^\//, '').split('/').pop() || 'index.html';
        window.location.replace('/es/' + (page || 'index.html'));
        return;
      }
    }

    // Save preference when user manually clicks the language switcher
    document.querySelectorAll('.nav-lang a, .nav-lang-mobile a').forEach(link => {
      link.addEventListener('click', () => {
        const href = link.getAttribute('href') || '';
        localStorage.setItem('avanza-lang', (href.includes('/es/') || href.startsWith('es/')) ? 'es' : 'en');
      });
    });
  })();

  // ── SMOOTH ANCHOR SCROLL (offset for fixed nav) ────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // ── CONTACT FORM HANDLER (Web3Forms → Valerie@avanzaaz.com) ──
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async e => {
      e.preventDefault();
      const btn = contactForm.querySelector('[type="submit"]');
      const originalText = btn.textContent;

      btn.textContent = 'Sending…';
      btn.disabled = true;

      const data = new FormData(contactForm);
      data.append('access_key', '522114');

      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: data
        });
        const json = await res.json();

        if (json.success) {
          btn.textContent = 'Message Sent! ✓';
          btn.style.background = 'linear-gradient(135deg,#1BAF8A,#48B8E8)';
          contactForm.reset();
          setTimeout(() => {
            btn.textContent = originalText;
            btn.disabled = false;
            btn.style.background = '';
          }, 5000);
        } else {
          throw new Error(json.message || 'Submission failed');
        }
      } catch (err) {
        btn.textContent = 'Error — please try again';
        btn.style.background = '#c0392b';
        btn.disabled = false;
        console.error('Form error:', err);
        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.background = '';
        }, 4000);
      }
    });
  }

  // ── BACK TO TOP (appears after 400px scroll) ───────────────
  const topBtn = document.getElementById('backToTop');
  if (topBtn) {
    window.addEventListener('scroll', () => {
      topBtn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // ── YEAR IN FOOTER ─────────────────────────────────────────
  const yearEl = document.getElementById('footerYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
