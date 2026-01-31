# Contact Page Changes Summary

## Overview
This document summarizes all changes made to the Contact page, specifically focusing on the "Preparing for your visit" carousel section and contact info styling adjustments.

---

## Files Modified

### 1. `nextjs-app/components/PreparingForVisit.tsx`
**Purpose:** Created new carousel component for "Preparing for your visit" section

**Key Features:**
- 4-slide carousel with 2 cards per slide
- Slide-in animations (left/right based on navigation direction)
- Desktop drag support (mouse events)
- Mobile swipe support (touch events)
- Arrow button for click navigation
- Dynamic image loading per slide

**Implementation Details:**
```
- useState for currentPage (0-3) and direction ('next'/'prev')
- useRef for tracking drag/swipe positions (startX, currentX, isDragging)
- Mouse handlers: onMouseDown, onMouseMove, onMouseUp, onMouseLeave
- Touch handlers: onTouchStart, onTouchMove, onTouchEnd
- 50px threshold for drag/swipe detection
- Loops through all 4 slides infinitely
```

**Content Structure:**
- **Slide 1**: "A smaller guest list" + "Shoe-free boutique"
- **Slide 2**: "Earlier you shop" + "Arriving on time"
- **Slide 3**: "If you need to cancel" + "Right undergarments"
- **Slide 4**: "Appointments adult-only" + "Food & beverage policy"

**Images:**
- Slide 1: `/contact/Contact-image.jpg`
- Slide 2: `/contact/bab-99web-6a226f86.jpg`
- Slide 3: `/contact/bab-108web-93b94283.jpg`
- Slide 4: `/contact/bab-54web-5eab03dd.jpg`

---

### 2. `nextjs-app/app/globals.css`

#### Contact Hero Parallax Image Positioning
```css
.contact-hero-parallax {
  background-position: 50% 0; /* Top of image aligned to top of hero */
  background-attachment: scroll; /* Position relative to hero section */
}
```

#### Contact Info Grid Styling
```css
.contact-info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two columns for email/phone */
  gap: 0.75rem 1rem;
  max-width: 280px;
  align-items: start;
}

/* Reordering: Location → Email/Phone side-by-side → Hours */
.contact-location-item {
  grid-column: 1 / -1;
  order: 1;
}

.contact-info-item:not(.contact-location-item):not(.contact-hours-item) {
  order: 2;
}

.contact-hours-item {
  grid-column: 1 / -1;
  order: 3;
}

/* Font sizes */
.contact-info-item h3 { font-size: 0.7rem; } /* Labels */
.contact-info-item a { font-size: 1rem; } /* Email, phone, address */
.contact-hours-list { font-size: 0.7rem; } /* Hours content */
.contact-hours-list p { font-size: 0.7rem; } /* Hours paragraphs */
```

#### Contact Form Column Alignment
```css
.contact-form-side {
  padding-top: 0;
  margin-top: -3rem; /* Pull column up */
}
```

#### Contact Welcome Heading
```css
.contact-welcome-heading {
  white-space: nowrap; /* Forces single line */
}
```

#### Preparing for Visit Carousel Styles
```css
/* Animation keyframes */
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Container - draggable area */
.prepare-container {
  display: grid;
  grid-template-columns: 50% 50%;
  min-height: 600px;
  touch-action: pan-y; /* Allow vertical scroll */
  user-select: none; /* Prevent text selection during drag */
  cursor: grab;
}

.prepare-container:active {
  cursor: grabbing;
}

/* Carousel content wrapper */
.prepare-content--carousel {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

/* Card styling */
.prepare-card {
  box-sizing: border-box;
  pointer-events: auto; /* Allow interaction with card content */
}

.prepare-card--slide-in {
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: both;
}

/* Divider with line and arrow */
.prepare-content--carousel .prepare-divider {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1.5rem 0 0;
  text-align: left;
}

.prepare-divider-line {
  flex: 1;
  height: 0;
  border-top: 1px solid #d2c7c5;
}

.prepare-divider-arrow {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #827270;
  cursor: pointer;
  padding: 0.25rem;
  flex-shrink: 0;
  transition: color 0.2s ease;
  pointer-events: auto; /* Ensure arrow is clickable */
  position: relative;
  z-index: 10;
}

.prepare-divider-arrow:hover {
  color: #7f7370;
}

/* Card titles */
.prepare-title {
  color: rgba(47, 50, 51, 1); /* Darker color for titles */
}

/* Links within text */
.prepare-text a {
  pointer-events: auto;
  position: relative;
  z-index: 10;
}

/* Mobile specific */
@media (max-width: 768px) {
  .prepare-cards-viewport {
    min-height: 260px;
  }
  
  .prepare-divider-arrow {
    padding: 0.5rem;
  }
}
```

---

### 3. `nextjs-app/app/contact/ContactPageContent.tsx`

#### JotForm iframe Fix
```tsx
// Fixed React warning about allowTransparency prop
// @ts-expect-error React expects lowercase allowtransparency for DOM passthrough
allowtransparency="true"
```

---

## Key Problem-Solving Steps

### Issue 1: Webpack Runtime Errors
**Problem:** `Cannot find module './47.js'`, `__webpack_modules__ is not a function`  
**Solution:** Deleted `.next` build cache and performed fresh build
```bash
rm -rf .next && npm run dev
```

### Issue 2: Carousel Not Sliding Initially
**Problem:** Click events registering but no visual slide animation  
**Solution:** 
1. Added debug console logs to confirm state changes
2. Replaced `translateX` approach with CSS `@keyframes` animations
3. Used `key={currentPage}` to force re-render and trigger animations
4. Added `direction` state to control slide direction

### Issue 3: Drag/Swipe Not Working
**Problem:** Touch and mouse events not being captured  
**Solution:**
1. Moved event handlers from `.prepare-content--carousel` to `.prepare-container`
2. Changed `touch-action: pan-y` for better touch detection
3. Added `cursor: grab/grabbing` for visual feedback
4. Implemented both mouse (desktop) and touch (mobile) event handlers
5. Added `pointer-events: auto` to interactive elements (arrow, links)
6. Set z-index on clickable elements to ensure they're accessible

---

## Testing Instructions

### Desktop Testing
1. Navigate to http://localhost:3002/contact
2. Scroll to "Preparing for your visit" section
3. Click and drag left/right on the carousel
4. Click the arrow button to advance
5. Check that links and buttons are still clickable

### Mobile Testing
1. Open http://localhost:3002/contact on mobile device or Chrome DevTools mobile view
2. Swipe left/right on the carousel section
3. Tap the arrow button to advance
4. Verify vertical scrolling still works

### Console Debug
Open browser console to see drag/swipe detection logs:
- "Mouse down detected" / "Touch start detected"
- "Dragged left to next" / "Swiped left to next"
- Current page number on each transition

---

## Browser Compatibility
- **Desktop**: Mouse drag works in all modern browsers
- **Mobile**: Touch events work on iOS Safari, Chrome Mobile, etc.
- **Fallback**: Arrow button always works if drag/swipe fails

---

## Performance Notes
- Each slide change triggers a component re-render via `key={currentPage}`
- Animations use CSS `@keyframes` (GPU-accelerated)
- Images use Next.js `<Image>` component with `priority` flag for first slide
- Minimal JavaScript - most interaction handled by native browser events
