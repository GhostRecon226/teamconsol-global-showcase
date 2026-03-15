

## Hero Section Redesign

Inspired by the reference image, the hero will shift from a dark overlay style to a clean, modern split layout.

### Changes to `src/pages/Index.tsx` — Hero section only

**New layout:**
- **White/light background** hero area (no dark overlay)
- **Two-column layout** on desktop:
  - **Left**: Large headline — "Logistics That Move Your Business" with "Logistics" in the primary (accent) color, rest in dark foreground
  - **Right**: Subtext — "From first mile to last, we power every step of your supply chain" + a "Get a quote →" link in primary color
- **Below the text**: Full-width hero image (`hero-bg.jpg`) displayed as a large image (not as a background with overlay)
- **Rating badge**: A small floating badge in the bottom-right corner of the image showing "★ 4.8 (1200 Reviews)"

**Desktop**: Two columns for text, full-width image below
**Mobile**: Stacked — headline, then subtext + CTA, then image

No other sections change. The header and footer remain as-is.

