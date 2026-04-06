# Avanza ABA Website

**Avanza ABA — Center of Excellence for Autism**
Arizona ABA Therapy Practice

---

## Tech Stack
- Pure HTML5, CSS3, vanilla JavaScript — no frameworks
- Hosted on Vercel
- Images via Cloudinary CDN
- HIPAA intake via FormDoctor iframe embed

## File Structure
```
avanza-aba-website/
├── index.html             Home page
├── about.html             About us, team, mission
├── services.html          All services overview + detail
├── what-is-aba.html       What is ABA therapy?
├── aba-process.html       Step-by-step process
├── why-avanza.html        Differentiators + testimonials
├── intake.html            Patient intake (FormDoctor embed)
├── resources.html         Family resources + FAQ
├── blog.html              Blog (template ready)
├── careers.html           Open positions
├── giving.html            Community outreach
├── contact.html           Contact form
├── sitemap.xml            SEO sitemap
├── robots.txt             Search engine directives
├── css/
│   ├── global.css         Tokens, reset, typography, buttons, footer
│   ├── nav.css            Navigation + mobile menu
│   ├── hero.css           Hero section
│   ├── components.css     All section components
│   └── responsive.css     Breakpoints (1100, 900, 640, 400px)
├── js/
│   ├── nav.js             Sticky nav, mobile toggle, active link
│   ├── animations.js      Scroll reveal, counters, FAQ accordion
│   └── main.js            Form handling, smooth scroll, utilities
└── assets/
    ├── images/            Logo files (from Cloudinary or local)
    └── icons/
```

## Images Needed
Place in `assets/images/` or use Cloudinary URLs:
- `avanza-logo-horizontal.png` — navbar logo (image-3, top horizontal version)
- `avanza-logo-stacked.png`    — about section logo (image-1)
- `avanza-logo-hero.png`       — hero section logo (image-2)

## FormDoctor Setup
In `intake.html`, replace the comment block with your FormDoctor iframe:
```html
<iframe
  src="https://app.formdoctor.com/your-form-id"
  width="100%"
  height="800"
  frameborder="0"
  title="Avanza ABA Patient Intake Forms"
  style="border:none;border-radius:16px;"
></iframe>
```

## SEO Checklist Before Launch
- [ ] Update `sitemap.xml` with final domain
- [ ] Submit sitemap to Google Search Console
- [ ] Add Google Analytics / GA4 tag to all pages
- [ ] Add Google Business Profile verification meta tag
- [ ] Set up Vercel domain: avanzaaba.com
- [ ] Add favicon (icon-only logo version)

## Deployment (Vercel)
1. Push repo to GitHub: `avanza-aba-website`
2. Import repo in Vercel
3. Set custom domain: `avanzaaba.com`
4. Vercel auto-deploys on every push to main

## Brand Colors
| Token           | Hex       | Use                    |
|-----------------|-----------|------------------------|
| `--teal`        | `#5A9CB5` | Primary (figures)      |
| `--teal-dark`   | `#3A7A94` | Buttons, headings      |
| `--terra`       | `#B8622A` | Accent (AVANZA text)   |
| `--gold`        | `#C4882A` | Warmth (roots)         |
| `--sage`        | `#7A9055` | Nature (cactus)        |
| `--bg`          | `#F8F4EE` | Background (cream)     |
| `--text`        | `#2A1C14` | Body text (warm brown) |
