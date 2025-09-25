# Website Specification (WSD) - Nzasi Ventures

## Purpose
Corporate site for Nzasi Ventures Limited, developer of the AfyaNumeriq GRC platform.
Initial focus: ISO 7101:2023 for healthcare.

## Target Audience
- Investors
- Healthcare organizations
- Partners (Egis Management Systems Limited)

## Pages
- Home
### Home Page - Hero Section

**Acceptance Criteria**
- Displays company name/logo clearly.
- Tagline: “Governance, Risk & Compliance for Healthcare”.
- Call-to-action (CTA) button: “Explore Our Solution”.
- Background uses brand gradient (dark blue → azure).
- Fully responsive (looks good on desktop and mobile).
- Loads in <1.5s on standard broadband.

### Navigation Bar (Navbar)

**Purpose**
- Provide top-level navigation for the brochure site: About | Solution | Partnership | Resources | Contact

**Acceptance Criteria**
- A sticky header at the top of the page (remains visible on scroll).
- Uses brand background color `#1f3a60` (dark blue) and white text.
- Desktop: Links shown inline (About, Solution, Partnership, Resources, Contact).
- Mobile: Hamburger menu that toggles the links (links stacked vertically).
- Accessible: hamburger button uses `aria-expanded`, has an accessible label.
- Layout: Page content should be pushed down so header does not overlap content (e.g., `padding-top` to compensate for header height).
- Fully responsive across common breakpoints; no layout or overflow issues on mobile.


- About Us
- Our Solution (AfyaNumeriq + roadmap)
- Partnership
- Resources (placeholder blog/knowledge hub)
- Contact
- Footer (registration, copyright)

## Design
- Colors: Dark blue #1f3a60, Azure #3582b8, Light azure #edf3f6, Golden yellow #f7cf59
- Fonts: Hammersmith One (headings), Roboto (body), Poppins (accents)
- Style: Clean, professional, whitespace, rounded cards

## Non-Functional
- Mobile-first, responsive
- Fast (<1.5s load)
- SEO: “ISO 7101 GRC healthcare Kenya”
- Secure HTTPS
