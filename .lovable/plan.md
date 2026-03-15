

## Hero Heading Layout Fix

The heading currently wraps across 3 lines. The reference shows it should be 2 lines: "Logistics That Move" on line 1, "Your Business" on line 2.

### Changes

**`src/pages/Index.tsx`** — Hero `<h1>` element:
- Increase the font size on larger screens (e.g., `lg:text-7xl`) so the text fits on 2 lines
- Optionally add a `<br />` after "Move" to force the line break at the right place regardless of viewport width

