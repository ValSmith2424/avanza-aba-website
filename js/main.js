/* ============================================================
   AVANZA ABA — Main JS
   Form handling, utilities, misc interactions
   ============================================================ */

(function () {
  const IS_ES = window.location.pathname.includes('/es/');

  // ── AVAILABILITY BANNER ────────────────────────────────────
  (function injectBanner() {
    const banner = document.createElement('div');
    banner.className = 'avail-banner';
    banner.innerHTML = IS_ES
      ? 'Aceptando Nuevos Clientes<span class="avail-sep">•</span>Sin Lista de Espera<span class="avail-sep">•</span>Servicios Bilingües Disponibles<span class="avail-sep">•</span>En el Hogar y la Comunidad'
      : 'Now Accepting New Clients<span class="avail-sep">•</span>No Waitlist<span class="avail-sep">•</span>Bilingual Services Available<span class="avail-sep">•</span>In-Home &amp; Community-Based';
    document.body.insertBefore(banner, document.body.firstChild);
  })();

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
      // Fixed chrome height varies (banner wraps on small phones) — measure it
      const banner = document.querySelector('.avail-banner');
      const nav = document.getElementById('mainNav');
      const offset = (banner ? banner.offsetHeight : 0) + (nav ? nav.offsetHeight : 0) + 12;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // ── CONTACT FORM HANDLER (Web3Forms → Valerie@avanzaaz.com) ──
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    const reasonSelect = document.getElementById('reasonSelect');
    const subjectInput = contactForm.querySelector('input[name="subject"]');

    // Update subject based on reason for intake submissions
    if (reasonSelect) {
      reasonSelect.addEventListener('change', () => {
        if (subjectInput) {
          subjectInput.value = reasonSelect.value.includes('New Client Intake')
            ? 'New Client Intake Inquiry, Avanza ABA'
            : 'New Contact Form Submission, Avanza ABA';
        }
      });
    }

    // Handle conditional age fields based on "Who are you seeking services for?"
    const serviceForSelect = document.getElementById('service_for');
    if (serviceForSelect) {
      const ageFieldUnder5 = document.getElementById('ageFieldUnder5');
      const ageField6to12 = document.getElementById('ageField6to12');
      const ageFieldTeen = document.getElementById('ageFieldTeen');
      const ageFieldAdult = document.getElementById('ageFieldAdult');
      const ageUnder5 = document.getElementById('ageUnder5');
      const age6to12 = document.getElementById('age6to12');
      const ageTeen = document.getElementById('ageTeen');
      const ageAdult = document.getElementById('ageAdult');
      const ageNA = document.getElementById('ageNA');

      serviceForSelect.addEventListener('change', () => {
        const selection = serviceForSelect.value;
        // Hide all age fields first
        if (ageFieldUnder5) ageFieldUnder5.style.display = 'none';
        if (ageField6to12) ageField6to12.style.display = 'none';
        if (ageFieldTeen) ageFieldTeen.style.display = 'none';
        if (ageFieldAdult) ageFieldAdult.style.display = 'none';
        // Reset required attributes
        if (ageUnder5) ageUnder5.required = false;
        if (age6to12) age6to12.required = false;
        if (ageTeen) ageTeen.required = false;

        if (selection.includes('under 5')) {
          if (ageFieldUnder5) ageFieldUnder5.style.display = 'block';
          if (ageUnder5) ageUnder5.required = true;
        } else if (selection.includes('6-12')) {
          if (ageField6to12) ageField6to12.style.display = 'block';
          if (age6to12) age6to12.required = true;
        } else if (selection.includes('13–17')) {
          if (ageFieldTeen) ageFieldTeen.style.display = 'block';
          if (ageTeen) ageTeen.required = true;
        } else if (selection.includes('18+')) {
          if (ageFieldAdult) ageFieldAdult.style.display = 'block';
        }
      });
    }

    contactForm.addEventListener('submit', async e => {
      e.preventDefault();
      const btn = contactForm.querySelector('[type="submit"]');
      const originalText = btn.textContent;

      btn.textContent = IS_ES ? 'Enviando…' : 'Sending…';
      btn.disabled = true;

      const data = new FormData(contactForm);

      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: data
        });

        let json;
        try {
          json = await res.json();
        } catch {
          throw new Error(`HTTP ${res.status} — could not parse response`);
        }

        if (json.success) {
          btn.textContent = IS_ES ? '¡Mensaje Enviado! ✓' : 'Message Sent! ✓';
          btn.style.background = 'linear-gradient(135deg,#1BAF8A,#48B8E8)';
          contactForm.reset();
          setTimeout(() => {
            btn.textContent = originalText;
            btn.disabled = false;
            btn.style.background = '';
          }, 5000);
        } else {
          throw new Error(json.message || `Rejected (HTTP ${res.status})`);
        }
      } catch (err) {
        btn.textContent = IS_ES ? 'Error: intenta de nuevo' : 'Error: please try again';
        btn.style.background = '#c0392b';
        btn.disabled = false;
        console.error('Web3Forms error:', err.message || err);
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
