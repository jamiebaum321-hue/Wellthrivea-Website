@AGENTS.md

# Wellthrivea Urgent Care website

Next.js 16 (App Router) + Tailwind v4 + shadcn/ui + Watermelon UI registry
components. See README.md for the full site map and compliance rules.

## Hard content rules (NY health-department / NY Education Law § 6530)

- NEVER use the words "integrated provider", "integrated care", or similar
  "integrated" phrasing — the health department required its removal.
- NEVER publish a street address until the clinic announces one.
- NEVER add testimonials, reviews, guarantees, superiority claims ("best",
  "#1", "top", "leading"), wait-time promises, or unqualified price claims.
- NEVER imply emergency-department status; keep 911/emergency language intact.
- NEVER add tracking scripts (analytics, pixels, session replay, chat) without
  a documented HIPAA review + BAA; update the Digital Privacy Policy if added.
- Services/hours/providers/plans are "planned" until confirmed at opening.

## Conventions

- Brand tokens: `--color-brand-*` in `src/app/globals.css`; utilities like
  `text-brand-green`, `bg-brand-navy`, `brand-gradient`, `hero-surface`.
- Shared chrome: `src/components/site/` (header, footer, ribbon, page-head).
- Watermelon registry components live in `src/components/watermelon-ui/` and
  `src/components/base-variants/` — adapted in place (own-the-code model).
- Blog content is data in `src/lib/blog.ts`; article pages render from it.
- Forms submit via `src/lib/site-config.ts` (`FORM_ENDPOINT` empty = mailto
  fallback, nothing transmitted by the site).
