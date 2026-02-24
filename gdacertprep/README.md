# GDACertPrep.com — Complete Website Package

## Overview
A complete, production-ready website for **gdacertprep.com** — a Google Data Analytics Certificate prep resource with SEO blog content, a 25-question practice quiz, a $29 study guide sales page, email capture, and Google Ads integration points.

---

## Directory Structure

```
gdacertprep/
├── index.html              ← Homepage
├── privacy.html            ← Privacy policy
├── terms.html              ← Terms of use
├── contact.html            ← Contact form
├── sitemap.xml             ← XML sitemap (submit to Google Search Console)
├── robots.txt              ← Robots directives
├── css/
│   └── style.css           ← All styles (design system)
├── js/
│   ├── main.js             ← Nav, FAQ, email forms, modals, animations
│   └── quiz.js             ← Quiz engine (25 questions + scoring + email)
├── quiz/
│   └── index.html          ← 25-question practice quiz
├── study-guide/
│   └── index.html          ← Study guide sales + checkout page
└── blog/
    ├── index.html           ← Blog listing page
    ├── google-data-analytics-certificate-complete-guide.html
    ├── is-google-data-analytics-certificate-worth-it.html
    ├── google-data-analytics-vs-degree.html
    ├── google-data-analytics-certificate-salary.html
    ├── how-long-does-google-data-analytics-certificate-take.html
    ├── google-data-analytics-certificate-cost.html
    ├── google-data-analytics-certificate-sql-guide.html
    ├── google-data-analytics-spreadsheet-skills.html
    ├── data-visualization-guide.html
    ├── data-cleaning-guide.html
    ├── gda-study-plan.html
    ├── capstone-project-tips.html
    ├── jobs-with-google-data-analytics-certificate.html
    ├── data-analytics-portfolio-after-certificate.html
    ├── resume-with-google-data-analytics-certificate.html
    ├── google-data-analytics-vs-ibm-data-analytics.html
    ├── best-data-analytics-certificates-2025.html
    ├── self-taught-vs-certified-data-analyst.html
    ├── google-data-analytics-while-working-full-time.html
    ├── what-to-do-after-google-data-analytics-certificate.html
    ├── linkedin-profile-for-data-analysts.html
    └── hardest-parts-google-data-analytics-certificate.html
```

---

## Deployment (Mac / VS Code)

1. **Open in VS Code**: File → Open Folder → select `gdacertprep/`
2. **Preview locally**: Install the "Live Server" extension → right-click `index.html` → Open with Live Server
3. **Deploy**: Upload all files to your hosting provider (Netlify, Cloudflare Pages, or any static host) maintaining the directory structure exactly as-is.

---

## Integrations to Complete

### 1. Email Capture (Newsletter)
In `js/main.js`, find the comment:
```js
// --- REPLACE THIS WITH YOUR EMAIL SERVICE ---
```
Replace with your Mailchimp, ConvertKit, or ActiveCampaign API call. The form collects `email` from `.email-capture-form` forms across the site.

### 2. Quiz Results Email
In `js/quiz.js`, find:
```js
// ---- REPLACE WITH YOUR EMAIL SERVICE INTEGRATION ----
```
The `payload` object contains: `name`, `email`, `score`, `pct`, `weakTopics[]`, and `answers[]`. Send this to your backend or email service to trigger a personalized results email.

### 3. Stripe Payment (Study Guide)
In `js/main.js`, find:
```js
// --- REPLACE WITH STRIPE OR PAYPAL INTEGRATION ---
```
Replace with your Stripe `redirectToCheckout` call. The form collects name and email. Your Stripe product ID goes in `lineItems`.

### 4. Google AdSense
In every HTML file, there are ad slot divs like:
```html
<div class="ad-slot ad-slot-leaderboard">Advertisement</div>
```
To activate, replace these with:
```html
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
     data-ad-slot="XXXXXXXXXX"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
```
Also uncomment the AdSense `<script>` tag in each page's `<head>` and replace the publisher ID.

### 5. Google Analytics
Add your GA4 tracking snippet before `</head>` in every HTML file:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 6. Google Search Console
After deploying, go to search.google.com/search-console, add your property, and submit:
`https://gdacertprep.com/sitemap.xml`

---

## The Study Guide PDF
The study guide sales page is ready. You need to create the actual PDF:
- 120+ pages covering all 8 GDA Certificate courses
- Include the chapter content outlined on the sales page
- Host the PDF on a secure download link (S3 bucket, Gumroad, or your server)
- When Stripe payment completes, redirect to a thank-you page with the download link

---

## Color Scheme
- Navy: `#0b1f3a` (primary background/headers)
- Teal: `#00c2a8` (primary accent/CTAs)
- Gold: `#f5c542` (conversion CTAs)
- All variables in `css/style.css` under `:root`

---

## Questions?
The site is built with plain HTML/CSS/JavaScript — no frameworks, no build step, no dependencies. Everything works immediately when opened in a browser.
