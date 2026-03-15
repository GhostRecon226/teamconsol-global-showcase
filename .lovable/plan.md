

## Problem

At your current viewport (709px), the navigation links (About, Services, Why Us, Contact) are hidden because they only show at 768px+ (`hidden md:flex`), and there is no mobile hamburger menu.

## Plan

**File: `src/pages/Index.tsx`**

1. Import `Menu` from `lucide-react` and `useState` from React
2. Import `Sheet`, `SheetContent`, `SheetTrigger` from the existing Sheet component
3. Add a hamburger menu button visible only on mobile (`md:hidden`) in the header
4. Inside the Sheet, render all nav links vertically; close the sheet on link click
5. Keep the existing desktop nav unchanged

This gives full navigation access on all screen sizes.

