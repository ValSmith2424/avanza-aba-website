# AVANZA ABA WEBSITE
## Master Development Document — All Remaining Steps
**Last Updated:** April 14, 2026  
**Tech Stack:** HTML + CSS + JavaScript  
**Repo:** avanza-aba-website (separate from platform repo)  
**Live URL:** https://avanzatherapyaz.com (Vercel)  
**Related Platform URL:** https://avanza-platform-dev.web.app

---

## STATUS

The website is **built and deployed** at avanzatherapyaz.com.  
A full update prompt is ready to run in VSCode.  

**Waiting on Valerie:**
- Final logo/color choice confirmed ✅ → **Logo 1** (warm earth tones, psi symbol, glowing star)
- Photo placement confirmation (pending)

---

## COMPLETED ✅

- Full 23-file custom website built and deployed
- Home, About, Services, Contact pages live
- Avanza ABA branding applied
- Deployed to Vercel from GitHub repo

---

## REMAINING STEPS ⏳

---

### ⏳ Step 1 — Full Content + Color Update Pass

**Run this in VSCode once Valerie confirms color/photo decisions.**

```
You are updating the Avanza ABA website at avanzatherapyaz.com.
Repo: avanza-aba-website (HTML/CSS/JS on GitHub/Vercel stack)

Apply the following updates across all pages:

BRANDING:
- Logo: Use Logo 1 (warm earth tones, adult + child figures, psi symbol, glowing star, 
  mountain scene, root system, "Avanza ABA — Center of Excellence for Autism")
- Primary color: #0F766E (teal)
- Secondary/accent: #F97316 (warm orange)
- Background: #FAFAF8 (warm cream)
- Font: DM Serif Display for headings, DM Sans for body
- Tagline: "Rooted in community, grounded in excellence"

PHOTOS:
[Insert Valerie's confirmed photo placement instructions here]

CONTENT — Home page hero:
- Heading: "Advancing Every Child's Potential"
- Subheading: "Evidence-based ABA therapy rooted in compassion, 
  delivered by passionate BCBAs and RBTs who believe every child deserves to thrive."
- CTA button: "Request a Free Consultation" → links to inquiry form
- Secondary CTA: "Learn About Our Approach" → links to Services page

CONTENT — About page:
- Practice name: Avanza ABA — ABA Center of Excellence for Autism LLC
- BCBA owner: Valerie Smith BCBA LBA MA
- Location: Arizona
- Mission statement: focused on evidence-based care, family partnership, community roots
- Credentials and certifications section
- Mercy Care contracted provider (approved) — include this as a trust signal

CONTENT — Services page:
- Comprehensive ABA Therapy
- Focused ABA Intervention
- Family Guidance & Parent Training (97156)
- BCBA Supervision & Oversight
- Assessment Services (AFLS, ABLLS-R, EFL, FBA)
- Telehealth Services available

FOOTER:
- Practice name + tagline
- Phone and email (confirm with Valerie)
- Address (confirm with Valerie)
- Link to Privacy Policy / HIPAA Notice
- Link to parent portal login: [platform URL]
- Social links if applicable

Make all changes mobile responsive. Validate all links. Do not break existing page structure.
```

---

### ⏳ Step 2 — Inquiry Form (Replaces JotForm)

```
Add an inquiry form to the website that collects initial family information and 
triggers a portal invite from Valerie. This replaces the current JotForm workflow.

The inquiry form is NOT a full intake — it is a lightweight first contact form.

Add to: Contact page and Home page CTA

Form fields:
- Parent/Guardian First Name (required)
- Parent/Guardian Last Name (required)
- Email Address (required)
- Phone Number (required)
- Child's Date of Birth (required)
- Child's Diagnosis (text field, required)
- Primary Insurance / Payor (required)
- Child's Age (auto-calculated or separate field)
- How did you hear about us? (dropdown: Google, Referral, Social Media, DDD/ALTCS, Other)
- Message / Additional Notes (optional textarea)
- Submit button: "Request a Consultation"

On submit:
- Show success message: "Thank you! Valerie will be in touch within 1 business day."
- Send form data to Valerie's email (mrs.val.smith@gmail.com) via EmailJS or Formspree
- This data will be manually used by Valerie to send a portal invite
- When Gmail integration (platform Step 44) is complete, this will auto-trigger portal invite

Form design:
- Matches site branding (#0F766E teal, #FAFAF8 cream background)
- Mobile responsive
- All required fields validated before submission
- No PHI stored on website — form data emailed only, not stored

Add form to:
- /contact page (full form)
- /index home page (abbreviated version with "Full details on contact page" link)
```

---

### ⏳ Step 3 — FAQ Page

```
Create a new FAQ page at /faq

Page heading: "Frequently Asked Questions"
Subheading: "Everything families want to know about getting started with ABA therapy"

Build as an accordion component — question expands to show answer on click.

FAQ categories and questions:

GETTING STARTED:
Q: What is ABA therapy?
A: Applied Behavior Analysis (ABA) is an evidence-based treatment for autism that focuses on developing 
   meaningful skills and reducing challenging behaviors. It is recognized as the gold standard of care for 
   autism spectrum disorder by leading medical organizations.

Q: How do I know if my child qualifies for ABA services?
A: ABA services are typically covered for children with an autism spectrum disorder (ASD) diagnosis. 
   Most insurance plans and Medicaid/AHCCCS require a formal ASD diagnosis from a licensed psychologist 
   or developmental pediatrician. Contact us and we can help determine your child's eligibility.

Q: What is the first step to get started?
A: Fill out our inquiry form and Valerie will reach out within 1 business day to discuss your child's 
   needs, verify your insurance, and schedule a welcome call.

INSURANCE & COVERAGE:
Q: What insurance do you accept?
A: We accept Mercy Care (approved provider), AHCCCS/Arizona Medicaid, and most major commercial insurers. 
   Contact us to verify your specific plan.

Q: Does insurance cover ABA therapy?
A: Yes — most insurance plans and all Arizona Medicaid/AHCCCS plans are required to cover ABA therapy 
   for children with an ASD diagnosis. We handle the authorization process for you.

Q: What is DDD / ALTCS and do you work with those programs?
A: DDD (Division of Developmental Disabilities) and ALTCS (Arizona Long Term Care System) are Arizona 
   programs that fund services for individuals with developmental disabilities. We work with both programs.

Q: How long does insurance authorization take?
A: Typically 5–14 business days after we submit the assessment and treatment plan. We track your 
   authorization status and notify you as soon as we hear back.

SERVICES & THERAPY:
Q: Where do you provide services?
A: We provide ABA therapy in the home, school, and community settings based on your child's needs 
   and treatment goals.

Q: How many hours per week does my child need?
A: The number of hours is determined by your child's individual assessment and treatment goals, 
   as well as what is authorized by your insurance. Focused programs typically range from 10–25 hours 
   per week, while comprehensive programs may be 25–40 hours per week.

Q: What assessments do you use?
A: We use a comprehensive battery including AFLS (Assessment of Functional Living Skills), 
   ABLLS-R, EFL (Essentials for Living), and Functional Behavior Assessments (FBA) as clinically indicated.

Q: Do you offer telehealth services?
A: Yes — we offer telehealth for family guidance sessions and BCBA supervision. Direct therapy 
   is typically provided in person for best outcomes.

FAMILY & PORTAL:
Q: What is the parent portal?
A: Our secure parent portal gives you real-time visibility into your child's progress, session notes, 
   authorization status, and upcoming appointments. You'll receive updates at every stage of your journey.

Q: Will I be involved in my child's therapy?
A: Absolutely. Family involvement is a core part of ABA. We provide regular parent training and 
   guidance sessions (CPT 97156) so you can support your child's goals at home.

Design: Accordion with teal expand indicator. Mobile responsive. Link to FAQ from nav and footer.
```

---

### ⏳ Step 4 — Insurance Page

```
Create a new Insurance page at /insurance

Page heading: "Insurance & Coverage"
Subheading: "We make the insurance process simple. We handle authorizations so you can focus on your child."

Sections:

1. ACCEPTED INSURANCE
- Mercy Care (approved provider ✅)
- AHCCCS / Arizona Medicaid
- Most major commercial insurance plans
- DDD (Division of Developmental Disabilities)
- ALTCS (Arizona Long Term Care System)
- Out-of-pocket options available — contact us

2. HOW THE PROCESS WORKS (visual step timeline)
Step 1 — Contact Us: Fill out our inquiry form with your child's diagnosis and insurance information.
Step 2 — Verification: We verify your benefits and check authorization requirements.
Step 3 — Assessment: Your child receives a comprehensive assessment by our BCBA.
Step 4 — Authorization: We submit the treatment plan to your insurance for authorization.
Step 5 — Start Services: Once authorized, we schedule your child's sessions and get started.

3. WHAT ABA THERAPY COVERS
- ABA is covered as a medically necessary treatment for autism spectrum disorder
- Coverage includes: assessment, direct therapy, family guidance, BCBA supervision
- Arizona state law requires ABA coverage for ASD diagnoses
- Federal parity laws ensure ABA is covered on equal terms with medical/surgical benefits

4. AUTHORIZATION TIMELINE
Typical timeline infographic:
- Assessment completion: 1–2 weeks
- Treatment plan development: 1 week
- Insurance submission: within 3 business days of plan completion
- Authorization decision: 5–14 business days
- Service start: within 1 week of authorization

5. CTA: "Check Your Coverage"
- Button links to inquiry form
- Text: "Not sure if you're covered? Fill out our form and we'll check your benefits for free."

Design: Clean, professional. Use teal + orange accent colors. Mobile responsive. 
Link from nav and FAQ page.
```

---

### ⏳ Step 5 — HIPAA Notice / Privacy Policy Page

```
Create a HIPAA Notice of Privacy Practices page at /hipaa

This is a legal requirement for healthcare providers and will also be displayed 
in the parent portal intake form consent section.

Page heading: "Notice of Privacy Practices"
Subheading: "Avanza ABA — ABA Center of Excellence for Autism LLC"
Effective Date: [current date]

Sections:

1. OUR COMMITMENT TO YOUR PRIVACY
We are committed to protecting the privacy of your health information. 
This notice describes how we may use and share your protected health information (PHI) 
and your rights regarding this information.

2. HOW WE USE YOUR HEALTH INFORMATION
- Treatment: We use your information to provide and coordinate your child's ABA therapy services.
- Payment: We may use your information to bill insurance and collect payment for services.
- Healthcare Operations: We may use your information for quality improvement, staff training, 
  and practice management activities.

3. YOUR RIGHTS
- Right to access your records
- Right to request corrections
- Right to restrict certain uses
- Right to receive a list of disclosures
- Right to a paper copy of this notice
- Right to file a complaint

4. HOW TO FILE A COMPLAINT
Contact us at: [Valerie's email]
Or file with the U.S. Department of Health and Human Services: www.hhs.gov/ocr/privacy

5. CONTACT INFORMATION
Practice Name: Avanza ABA — ABA Center of Excellence for Autism LLC  
BCBA Owner: Valerie Smith BCBA LBA MA  
Email: [confirm with Valerie]  
Phone: [confirm with Valerie]

Note: This is a good-faith general HIPAA notice. Valerie should have her healthcare attorney 
review for full compliance. This is not legal advice.

Design: Clean, professional, readable. Link from footer. Mobile responsive.
```

---

### ⏳ Step 6 — Careers Page

```
Create a Careers page at /careers

Page heading: "Join the Avanza ABA Team"
Subheading: "We're looking for passionate BCBAs and RBTs who believe in the power of ABA 
to change lives. Come build something meaningful with us."

Culture section:
- Valerie's leadership philosophy
- Team values: evidence-based, family-centered, compassionate, growth-focused
- What makes Avanza ABA different

Open Positions section (build as dynamic cards that can be updated):

Card format per position:
- Job title
- Employment type (Full-time / Part-time / Contract)
- Location (In-home, community, school-based / Arizona)
- Brief description
- Requirements
- Apply button → links to application form or email

Starting positions to include:
1. Registered Behavior Technician (RBT)
   - Requirements: Active RBT certification, background check, valid AZ driver's license
   - Must be available minimum 10 hours/week
   - Will receive mentorship and supervision from BCBA
   
2. Board Certified Behavior Analyst (BCBA)
   - Requirements: Active BCBA certification, Arizona LBA license preferred
   - Caseload management, supervision of RBTs
   - Telehealth and in-person availability

Application process section:
Step 1 — Submit your application below
Step 2 — Phone screen with Valerie (15-30 min)
Step 3 — Interview + skills assessment
Step 4 — Background check + credential verification
Step 5 — Onboarding (digital — through our staff portal)

Application form (basic):
- Full name
- Email + phone
- Position applying for (dropdown)
- RBT or BCBA certification number
- Upload resume (link to email if file upload not supported)
- Why do you want to work at Avanza ABA? (textarea)
- Submit button → emails to Valerie

Design: Warm, inviting, mission-driven. Teal + cream palette. Mobile responsive.
Link from footer and nav.
```

---

### ⏳ Step 7 — Website SEO Pass

```
Run this after all pages are complete and content is finalized.

Apply SEO optimization across all pages:

META TAGS (per page):
- <title> — unique, keyword-rich, under 60 chars
- <meta name="description"> — unique, compelling, under 160 chars
- <meta name="keywords"> — relevant ABA/autism terms
- <meta property="og:title"> — for social sharing
- <meta property="og:description"> — for social sharing
- <meta property="og:image"> — use Logo 1 or hero image

HOME PAGE:
Title: "ABA Therapy Arizona | Avanza ABA — Center of Excellence for Autism"
Description: "Evidence-based ABA therapy for children with autism in Arizona. 
BCBA-led services in home, school, and community settings. Mercy Care accepted."

ABOUT PAGE:
Title: "About Avanza ABA | Valerie Smith BCBA LBA — Arizona ABA Therapy"
Description: "Meet Valerie Smith BCBA LBA MA, founder of Avanza ABA. 
Passionate about evidence-based autism treatment in Arizona."

SERVICES PAGE:
Title: "ABA Services | Comprehensive & Focused ABA Therapy | Avanza ABA"
Description: "ABA therapy services including assessment, direct therapy, family guidance, 
and BCBA supervision. AHCCCS and Mercy Care accepted in Arizona."

SCHEMA MARKUP:
Add JSON-LD schema to home page:
{
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Avanza ABA — ABA Center of Excellence for Autism LLC",
  "description": "Evidence-based ABA therapy for children with autism in Arizona",
  "url": "https://avanzatherapyaz.com",
  "telephone": "[Valerie's phone]",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Arizona",
    "addressRegion": "AZ",
    "addressCountry": "US"
  },
  "medicalSpecialty": "Applied Behavior Analysis"
}

PERFORMANCE:
- Compress all images (use WebP format)
- Add alt text to all images
- Ensure all pages load under 3 seconds on mobile
- Add sitemap.xml
- Add robots.txt
- Submit sitemap to Google Search Console

INTERNAL LINKS:
- Every page links to inquiry form
- FAQ links to Insurance page and vice versa
- About links to Services
- All pages link to parent portal login
```

---

### ⏳ Step 8 — Google Analytics + Search Console Setup

```
Run after website is fully live and SEO pass is complete.

1. CREATE GOOGLE ANALYTICS 4 PROPERTY:
- Go to analytics.google.com
- Create new GA4 property for avanzatherapyaz.com
- Copy the Measurement ID (format: G-XXXXXXXXXX)
- Add GA4 tracking script to <head> of all pages:

<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>

Key events to track:
- inquiry_form_submit (when inquiry form is submitted)
- page_view (automatic)
- scroll_depth (add manual tracking for 50% and 90% scroll)

2. GOOGLE SEARCH CONSOLE:
- Go to search.google.com/search-console
- Add property: avanzatherapyaz.com
- Verify via HTML tag or DNS record
- Submit sitemap.xml
- Monitor for indexing issues

3. GOOGLE BUSINESS PROFILE (if not already set up):
- Go to business.google.com
- Create listing for Avanza ABA
- Category: Applied Behavior Analysis Therapist
- Add photos, hours, phone, website
- This drives local search visibility significantly

Note: All setup done by Billy or delegated to Valerie with instructions.
```

---

## WEBSITE FILE STRUCTURE

```
avanza-aba-website/
├── index.html          (Home)
├── about.html          (About)
├── services.html       (Services)
├── contact.html        (Contact + Inquiry Form)
├── faq.html            (⏳ New)
├── insurance.html      (⏳ New)
├── hipaa.html          (⏳ New)
├── careers.html        (⏳ New)
├── css/
│   ├── styles.css
│   └── mobile.css
├── js/
│   └── main.js
├── assets/
│   ├── logo.png        (Logo 1 — confirmed)
│   └── images/
└── sitemap.xml         (⏳ Add in SEO pass)
```

---

## VALERIE'S DECISIONS NEEDED

| Item | Status |
|------|--------|
| Logo choice | ✅ Logo 1 confirmed (recommendation) — confirm Wednesday |
| Photo placement | ⏳ Pending Valerie confirmation |
| Practice phone number | ⏳ Needed for footer, contact, HIPAA page |
| Practice address | ⏳ Needed for footer, contact, schema markup |
| Insurance accepted full list | ⏳ Confirm beyond Mercy Care |
| Open positions to list on Careers | ⏳ Confirm roles and requirements |
| Email for careers applications | ⏳ Confirm (mrs.val.smith@gmail.com or separate) |

---

## INQUIRY FORM → PLATFORM FLOW

```
Website Inquiry Form (no login required)
        ↓
Form data emailed to Valerie
        ↓
Valerie reviews in platform Admin → Clients
        ↓
Valerie sends Portal Invite (platform Step 44 automates this)
        ↓
Parent creates account + completes full intake (platform Step 43)
        ↓
Valerie reviews intake in Admin → Intake
        ↓
Services begin
```

---

## INTEGRATION WITH PLATFORM (Future)

When platform Step 44 (Gmail integration) is complete:
- Website inquiry form will trigger `sendNewInquiryAlert` Cloud Function
- Valerie gets immediate email notification with parent details
- Platform admin can send portal invite directly from client record
- Full end-to-end automated intake flow

Until then:
- Form data emails to Valerie manually
- Valerie sends portal invite from platform manually

---

*Last updated: April 14, 2026 | Stacked Alchemist LLC | stackedalchemist.dev*
