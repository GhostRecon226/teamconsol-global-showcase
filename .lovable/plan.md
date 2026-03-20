

## Make Logo Larger and Clickable

### Changes in `src/pages/Index.tsx`

1. **Header logo (line 29)**: Increase from `h-10` to `h-14`, wrap in `<a>` with smooth scroll-to-top on click.

2. **Footer logo (line 314)**: Increase from `h-12` to `h-16`, wrap in `<a>` with smooth scroll-to-top on click.

Both logos get `cursor-pointer` styling via the anchor wrapper.

