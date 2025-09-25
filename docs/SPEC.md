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

### Homepage Sections

**Purpose**
Provide visitors with a clear overview of Nzasi Ventures, the AfyaNumeriq GRC platform, and ways to engage (partnerships, resources, contact).

---

#### About Section

**Acceptance Criteria**

- Heading: "About Us"
- Subheading or short text describing Nzasi Ventures as a Kenyan company developing AfyaNumeriq GRC platform.
- Mission statement ("Empowering healthcare organizations through governance, risk, and compliance solutions").
- Three supporting bullet points or values. Integrity, Collaboration, and Innovation.
- Layout: Centered content, max width (readable line length).
- Background: Light (white or pale grey).
- Responsive across desktop and mobile.

---

#### Solution Section

**Acceptance Criteria**

- Heading: "Our Solution"
- Subheading: Introduces AfyaNumeriq GRC platform.
- Brief text explaining focus on ISO 7101:2023 compliance for healthcare organizations.
- Mention scalability: support for ISO 15189, 27001, 42001, 13485, 17025 in future phases.
- Visual: placeholder image or simple icon to illustrate digital platform.
- CTA button: "Learn More" linking to future resources page.
- Background: light blue gradient to distinguish from About section.
- Fully responsive.

---

#### Partnership Section

**Acceptance Criteria**

- Heading: "Partnership"
- Text: Invite potential investors/partners to collaborate in scaling AfyaNumeriq.
- Bullet list or icons showing partnership opportunities (e.g., Funding, Technology Collaboration, Pilot Programs).
- CTA button: "Get in Touch" → links to contact section.
- Background: white.
- Responsive design.

---

#### Resources Section

**Acceptance Criteria**

- Heading: "Resources"
- Intro text: mention collaboration with Egis Management Systems Limited.
- Space for future training resources, guides, and case studies.
- External link to [egis.africa](https://www.egis.africa).
- Background: light grey.
- Fully responsive.

---

#### Contact Section

**Acceptance Criteria**

- Heading: "Contact Us"
- Subheading: Encouraging message (e.g., "We’d love to hear from you").
- Contact details: Email + Phone (placeholders for now).
- Simple contact form with Name, Email, Message fields (form not functional at MVP stage).
- CTA button: "Send Message".
- Background: light blue.
- Fully responsive.

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
