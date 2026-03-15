

## Problem

The "Logistics Company" and "Professtional" text with globe logos are embedded directly in the `hero-bg.jpg` image file. They are not HTML/code elements, so they cannot be removed by editing the page source.

## Options

1. **Replace the hero image** — You provide a clean version of the same shipping/logistics photo without the watermark text, and I swap it in.

2. **Crop the image via CSS** — The text appears in the white area above the actual photo. I can crop the image using CSS `object-position` to cut off the top portion containing the logos/text, showing only the sunset shipping scene.

3. **Use a different stock image** — Replace the current image with a different logistics/shipping image that has no watermarks.

## Recommended Approach

**Option 2 (CSS crop)** is the quickest fix. The logos sit in a white strip at the top of the image. By adjusting `object-position` to shift the visible area downward, the text will be cropped out and only the clean shipping scene will show.

### Changes

**`src/pages/Index.tsx`** — Hero image element:
- Add `object-position: center 60%` (or similar) to the hero `<img>` tag to crop out the top white area with the logo text
- This keeps the beautiful sunset port scene fully visible

