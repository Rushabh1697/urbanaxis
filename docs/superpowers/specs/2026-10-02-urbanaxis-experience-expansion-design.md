# Design Spec: Urban Axis Experience Expansion

**Date:** 2026-10-02
**Status:** Approved

## Overview
This architectural expansion introduces three major features to elevate the "Quiet Intent" aesthetic of the Urban Axis Studio website: a global Day/Night theme toggle, a highly tactile `/elements` horizontal gallery, and an immersive Spatial Typography masking experience on the `/narrative` page.

## 1. Global Lighting Shift (Dawn/Dusk Theme)
*   **Architecture:** We are refactoring `tailwind.config.js` and `index.css` to use CSS variables for core tokens (`--surface`, `--on-surface`, `--secondary`, etc.).
*   **Interaction:** A 2-second global GSAP tween on the `:root` variables will create a cinematic crossfade between the dark moody "Dusk" and textured off-white "Dawn".
*   **State Persistence:** The user's theme preference will be persisted in `localStorage`. On initialization, the app will read this value to set the correct variables.

## 2. `/elements` Route (Tactile Gallery)
*   **Architecture:** A new route showcasing macro architectural materials (concrete, brass, etc.) instead of a traditional project grid.
*   **Interaction (Desktop):** GSAP ScrollTrigger pinning. Vertical scrolling pins the wrapper and translates the images horizontally.
*   **Interaction (Mobile):** Graceful degradation. GSAP pinning is completely disabled on mobile breakpoints to avoid hijacking touch scroll, falling back to a native CSS horizontal snap-scroll (or vertical stack).
*   **Performance:** High-res macro imagery will be progressively loaded. Heavily blurred placeholders will load initially, with the high-res assets swapped in via Intersection Observer just before they enter the viewport.

## 3. `/narrative` Takeover (Spatial Typography)
*   **Architecture:** The `/narrative` page becomes an immersive, single-page manifesto.
*   **Interaction:** SVG text masking with GSAP ScrollTrigger. The typography masks background video/imagery. Scrolling scales the text up infinitely until the camera passes through the letterforms, allowing the imagery to fill the screen.
*   **Accessibility (a11y):** The visual SVG mask will be hidden from screen readers using `aria-hidden="true"`. A visually hidden `<h1>` element containing the identical text will be provided exclusively for the accessibility tree.

## Technical Constraints & Dependencies
*   GSAP Core and ScrollTrigger for animations.
*   Framer Motion specifically reserved for page routing transitions (blur/fade).
*   Lenis must remain active for smooth scrolling, which requires coordination with ScrollTrigger (`ScrollTrigger.refresh()`).
*   Strict adherence to the "30 Web Design Choices to Avoid" (no cliché bento grids or harsh shadows).
