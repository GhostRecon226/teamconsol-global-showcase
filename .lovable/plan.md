
## Add Facebook Pixel to TeamConsol Website

**What**: Integrate the Facebook Pixel (ID: `860024863760944`) for PageView tracking and Lead event tracking on contact actions.

### Changes

#### 1. `index.html` — Add Pixel base code
- Add the Facebook Pixel `<script>` in `<head>` (before closing `</head>`) for `init` and `PageView` tracking.
- Add the `<noscript><img>` fallback inside `<body>` (after `<div id="root">`), per HTML5 rules that disallow `<img>` inside `<noscript>` in `<head>`.

#### 2. `src/vite-env.d.ts` — Add `fbq` type declaration
- Declare `fbq` on the `Window` interface so TypeScript doesn't complain.

#### 3. `src/pages/Index.tsx` — Add Lead event tracking
- Fire `fbq('track', 'Lead')` when users click the WhatsApp contact link, the "Send an Email" mailto link, or the phone number link — these are the contact conversion points since there's no form submission.

### Technical Details
- No new dependencies needed — the pixel loads via a script tag.
- The build error (429 rate limiting) is unrelated to this change and should resolve on retry.
