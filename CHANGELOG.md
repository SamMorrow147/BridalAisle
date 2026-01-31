# Bridal Aisle – Change Log

Record of edits made during this session.

---

## 1. Announcement bar: center text on desktop, keep phone on right

**Date:** 2025-01-25

**Goal:** Center the top announcement (“Our Anniversary Sale is Extended! Special savings on all Accessories and Mothers' Dresses!”) on desktop and keep the phone number on the right.

**Files changed:**

- `nextjs-app/app/layout.tsx`
- `nextjs-app/app/globals.css`

**Edits:**

### `nextjs-app/app/layout.tsx`

- Added a spacer div before the announcement text:
  - `<div className="announcement-spacer" aria-hidden="true" />`
- Kept the existing `<h3 className="announcement-text">` and `<a className="announcement-phone">` as-is.

### `nextjs-app/app/globals.css`

- **`.announcement-content`**
  - Removed `justify-content: space-between` so flex children control centering.
- **`.announcement-spacer`** (new)
  - `flex: 1` to balance the right side and center the text.
  - `display: none` in the `@media (max-width: 768px)` block so it doesn’t affect mobile.
- **`.announcement-phone`**
  - `flex: 1`, `display: flex`, `justify-content: flex-end` so the phone stays on the right on desktop.

**Result:** On desktop, the announcement is centered and the phone stays on the right. On mobile, layout is unchanged (stacked, centered, phone hidden).

---

## 2. Fixed the cropping of the image above Stress-free Appointments

**Date:** 2025-01-25

**What we did:** The photo above "Stress-free Appointments" was cutting off the person's head, especially on smaller screens. We fixed the cropping so the head stays in the frame.

**Files changed:** `HomePageContent.tsx`, `globals.css`

---

## 3. Appointments page: menu links scroll to each section, and “Preparing for your Appointment” is a click-to-expand section

**Date:** 2025-01-25

**What we did:** Fixed the appointment menu so when you click an item it scrolls down to that section. Made “Preparing for your Appointment” a click-to-open section so you can expand it to see the tips.

**Files changed:** `AppointmentsPageContent.tsx`, `globals.css`

---

## 4. Bridal page: fixed links to Barbie Anne, Marionat, and JL Johnson

**Date:** 2025-01-25

**What we did:** Fixed the Bridal page links that weren’t working: the Barbie Anne “View the Collection” link (now goes to their Modest collection), and the accessory brand links for Marionat and JL Johnson (now open their sites in a new tab).

**Files changed:** `BridalPageContent.tsx`

---

## 5. Bridal page: Accessories button links to the Accessory/Bridal Styling section on Appointments

**Date:** 2025-01-25

**What we did:** The "ACCESSORIES APPOINTMENTS" button in the "Complete your bridal look" section now goes straight to the Accessory/Bridal Styling Appointment section on the Appointments page instead of only the top of the page.

**Files changed:** `BridalPageContent.tsx`

---

## 6. Accessory/Bridal Styling slideshow: removed the first image (chandelier)

**Date:** 2025-01-25

**What we did:** Removed the first image (chandelier) from the Accessory/Bridal Styling Appointment slideshow on the Appointments page.

**Files changed:** `AppointmentsPageContent.tsx`

---

## 7. DB Formalwear and Pure Silk Fabrics logos now link to their sites

**Date:** 2025-01-25

**What we did:** The DB Formalwear and Pure Silk Fabrics logos on the Men’s Suits page and on the Homepage now link to their sites (DB Formalwear online catalog and Pure Silk Metro Suits). Links open in a new tab.

**Files changed:** `MensSuitsPageContent.tsx`, `HomePageContent.tsx`, `globals.css`

---

## 8. Men’s Suits page: Linda widget now appears at the bottom

**Date:** 2025-01-25

**What we did:** The same Linda (locations/booking) widget that appears at the bottom of the Bridal page was already in the layout at the bottom of the Men’s Suits page but wasn’t loading. We fixed it so the Linda widget loads correctly after the page is ready and shows at the bottom of the Men’s Suits page.

**Files changed:** `MensSuitsPageContent.tsx`

---

## 9. Men's Suits page: photo gallery added at the bottom

**Date:** 2025-01-25

**What we did:** Added a photo gallery (horizontal scrolling carousel, same style as the Homepage "Real Brides" section) at the bottom of the Men's Suits page. It sits in the tan section and is placed below the Linda widget. It shows suit, groom, and formalwear photos.

**Files changed:** `MensSuitsPageContent.tsx`, `globals.css`

---

## 10. Men's Suits page: removed the empty tan section above the Linda widget

**Date:** 2025-01-25

**What we did:** Removed the empty tan section (the Suits Slideshow with Metro suit color slides) that appeared above the Linda widget. The page now goes: Pure Silk Suits → Linda widget → Photo gallery (tan).

**Files changed:** `MensSuitsPageContent.tsx`

---

## 11. About page: removed Alex and Aspen from the Employees section

**Date:** 2025-01-25

**What we did:** Removed Alex and Aspen from the employee/stylist list on the About page as requested by the client.

**Files changed:** `TeamSection.tsx`

---

## 12. Contact page: hero parallax, zoomed-out layout, centered contact info, smaller photo, flower visible

**Date:** 2025-01-25

**What we did:** Added a full-width parallax hero at the top using `Contact-top-hero-paralax.jpg` with “Contact Us” over it (shows the top of the image, parallax on desktop, scroll on mobile). In the main section: “zoomed out” (narrower container, more padding, smaller arched photo with max-width 480px and height 520px), contact block (EMAIL, PHONE, OUR LOCATION, HOURS) centered and single-column, and the flower icon moved to `left: 24px` so it stays visible and isn’t cut off.

**Files changed:** `ContactPageContent.tsx`, `globals.css`

---

## 13. Contact page: smaller contact block, under image, centered in left column

**Date:** 2025-01-25

**What we did:** Made the contact info block (EMAIL, PHONE, OUR LOCATION, HOURS) smaller and kept it underneath the arched photo in the left column, centered in that column. Reduced label size (h3) to 0.5rem, links to 0.85rem, hours to 0.8rem; tightened gap, margin-top, and max-width (220px) for a more compact block.

**Files changed:** `globals.css`

---

## 14. Preparing for your visit: 4 swipeable cards, line+arrow, tap and swipe

**Date:** 2025-01-25

**What we did:** On the Contact page, the “Preparing for your visit to Bridal Aisle” block is now four cards that swipe to the right. Content for all four was taken from the original bridalaislemn.com/contact: (1) shoe-free boutique, (2) smaller guest list, (3) arriving on time, (4) earlier you shop / alterations. Below each card there is a horizontal line and an arrow; clicking the arrow goes to the next card (wraps from 4 to 1). On mobile, swiping left goes to the next card and swiping right to the previous.

**Files changed:** `PreparingForVisit.tsx`, `globals.css`

---

## 15. Contact hero: very top of image at very top of hero

**Date:** 2025-01-25

**What we did:** The hero background image is now positioned so the very top of the image meets the very top of the hero section. We use `background-position: 50% 0` and `background-attachment: scroll` (instead of `fixed`) so the position is relative to the hero element; with `fixed` it was viewport-relative, so the visible area could start lower when the hero sits below the header.

**Files changed:** `globals.css`

---
