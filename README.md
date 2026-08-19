# Wellthrivea Urgent Care — Website

A modern, compliance-first website for **Wellthrivea Urgent Care**, coming soon
to Canarsie, Brooklyn, serving the greater five boroughs through community
outreach.

Built with **Next.js 16 (App Router) + Tailwind CSS v4 + shadcn/ui**, using
components from the [Watermelon UI](https://registry.watermelon.sh) shadcn
registry.

## Getting started

```bash
npm install
npm run dev     # local development at http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
```

## Site map

| Section | Routes |
| --- | --- |
| Core | `/` `/about` `/services` `/technology` `/locations` `/careers` `/insurance` `/faq` `/contact` |
| Blog | `/blog` plus 8 educational articles at `/blog/[slug]` |
| Legal | `/legal/digital-privacy-policy` `/legal/no-surprises-act` `/legal/notice-of-privacy-practices` `/legal/sms-terms` `/legal/non-discrimination` `/legal/patient-rights` `/legal/anonymous-hotline` `/legal/accessibility` `/legal/terms-of-use` |

## Compliance posture (NY urgent care)

This site was built against a New York urgent-care website compliance review.
Key decisions — please keep these intact when editing:

- **No "integrated provider" / "integrated care" language anywhere.** The
  NY health department required its removal from the prior site.
- **No street address is published.** The site says "coming soon to Canarsie,
  Brooklyn" and "serving the greater five boroughs through outreach" only.
- **No testimonials, no guarantees, no superiority claims** ("best", "#1",
  "top"), no wait-time promises, no price claims — per NY Education Law
  § 6530(27) and Board of Regents Part 29.1.
- **Emergency/911 language** appears in the top ribbon, footer, services,
  FAQ, and every blog article.
- All services/hours/staffing/plan participation are labeled **planned** and
  will be confirmed before opening; provider names publish only once verified.
- **Good Faith Estimate** notice is displayed site-wide above the footer;
  balance-billing protections are on `/legal/no-surprises-act`.
- **HIPAA NPP** (`/legal/notice-of-privacy-practices`) is separate from the
  website's Digital Privacy Policy — do not merge them.
- **No tracking technology.** This site ships with zero ad pixels, zero
  analytics, zero session recording. Fonts are self-hosted via `next/font`.
  Before adding ANY vendor script (analytics, chat, scheduling, CRM, forms),
  complete a HIPAA review per HHS OCR online-tracking guidance and obtain a
  BAA where required — then update `/legal/digital-privacy-policy`.

## Forms (email capture, careers)

Forms are wired through `src/lib/site-config.ts`:

- `FORM_ENDPOINT` is empty by default. In that state, submitting opens a
  pre-filled draft in the visitor's own email app — **nothing is transmitted
  by the website itself**.
- To enable direct submission, set `FORM_ENDPOINT` to a HIPAA-reviewed
  form-processing endpoint (with a BAA where required).
- Every form carries a honeypot field and explicit consent checkboxes, and
  instructs visitors not to include health information.

## Watermelon UI components

Installed from `registry.watermelon.sh` into `src/components/watermelon-ui/`
and `src/components/base-variants/` and adapted (shadcn own-the-code model):

| Component | Used for |
| --- | --- |
| `blog-2` | Blog card grid (`/blog`) |
| `filter-disclosure` | Blog topic filter |
| `continuous-pagination` | Blog pager |
| `accordion-5` | FAQ accordions (home + `/faq`) |
| `newsletter-3` | Email capture bands |
| `checkbox-16` | Consent checkboxes on forms |
| `floating-input` | Form inputs (contact, careers) |
| `carousel-navigator` | Facility tour carousel (home) |
| `split-button` | "Explore Wellthrivea" hero quick-nav |
| `inline-action` | Copy-email action (contact) |

## Brand

Palette sampled from the Wellthrivea logo: leaf green `#48a830`, medical blue
`#0072bc`, deep navy `#06304f`, orange accent `#f0a830`. Tokens live in
`src/app/globals.css` (`--color-brand-*`). Headings use Plus Jakarta Sans;
body text uses Inter (both self-hosted via `next/font`).

Photography in `public/img/` was generated with the OpenAI GPT Image 2 engine
(via Higgsfield) using the brand palette; images depicting people were
generated to reflect Canarsie's highly diverse community. `hero-building.jpg`
is a concept rendering, not a real building photograph.

## Items to confirm before launch

- `info@wellthrivea.com` is used as the contact mailbox site-wide — confirm
  the mailbox exists (source site obscures its email behind Cloudflare).
- Anonymous phone hotline number (page says "activating before opening").
- Final NPP contact details (clinic address/phone), participating plan list,
  self-pay pricing, hospital affiliations, provider roster.
- Have New York health-care counsel review all legal pages before launch.
