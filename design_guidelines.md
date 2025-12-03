# CC&C Solutions Corporate Consulting Website - Design Guidelines

## Design Approach

**Reference-Based Approach** drawing from premium B2B consulting sites (McKinsey, BCG, Stripe Business) combined with modern SaaS aesthetics. Focus on sophisticated restraint, strategic white space, and credibility-building visual hierarchy.

**Core Principles:**
- Premium dark aesthetic with strategic light contrast
- Trust-building through professional imagery and typography
- Information architecture that guides toward conversion
- Subtle, purposeful animations that enhance rather than distract

---

## Typography System

**Primary Font:** Inter (Google Fonts)
**Secondary Font:** Playfair Display (for distinguished headlines)

**Hierarchy:**
- Hero Headline: Playfair Display, 64px (mobile: 36px), font-weight 700
- Section Headlines: Inter, 48px (mobile: 32px), font-weight 700
- Subsection Titles: Inter, 32px (mobile: 24px), font-weight 600
- Body Large: Inter, 20px, font-weight 400, line-height 1.6
- Body Standard: Inter, 16px, font-weight 400, line-height 1.7
- Captions/Labels: Inter, 14px, font-weight 500, letter-spacing 0.05em, uppercase

---

## Layout System

**Spacing Primitives:** Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24, 32
- Micro spacing: 2, 4 (button padding, tight gaps)
- Component spacing: 6, 8, 12 (card padding, element gaps)
- Section spacing: 16, 20, 24, 32 (vertical rhythm)

**Container Strategy:**
- Full-width: w-full with max-w-7xl inner container, px-6 lg:px-8
- Content sections: max-w-6xl mx-auto
- Text content: max-w-4xl for optimal readability
- Narrow content: max-w-2xl for focused forms/CTAs

**Grid System:**
- 12-column grid for desktop
- Use 2-3 columns for feature cards
- Single column stack on mobile with generous vertical spacing

---

## Page Structure & Sections

### Navigation
Sticky header with backdrop blur effect, height: 80px
- Logo left, navigation center, CTA button right
- Navigation items: Services, Process, Case Studies, About, Contact
- Dark background (bg-gray-900/90) with subtle bottom border
- CTA button uses brand color #2177cd with blur background

### Hero Section
Full viewport height (90vh), dark gradient overlay on background image
- **Image Description:** Premium corporate imagery - modern office setting, diverse consulting team in action, or abstract professional photography with depth and sophistication
- Positioning: Background image with dark gradient overlay (gradient from transparent to near-black bottom)
- Content: Centered, max-w-4xl
  - Overline text: "Strategic Consulting Excellence" (14px, uppercase, brand color)
  - Main headline: Large serif headline emphasizing transformation/results
  - Subheadline: 20px, max-w-2xl, describing value proposition
  - Dual CTAs: Primary "Get Started" (brand color, blur background) + Secondary "View Case Studies" (outline with blur)
- Scroll indicator at bottom center

### Services Overview
Section padding: py-32 (mobile: py-20)
- Section header: Centered, "Our Services"
- 3-column grid (mobile: stack)
- Cards with:
  - Icon (simple line icons, brand color accent)
  - Service title (32px)
  - Description paragraph (16px)
  - Hover state: Subtle lift (translateY -4px) with shadow increase

### Interactive 6-Step Process Infographic
Section padding: py-32, background: slightly lighter dark (bg-gray-800)
- Section header: "Our Proven Process"
- **Circular/Orbital Layout:**
  - Central hub circle (200px diameter) with company icon/logo
  - 6 nodes arranged in perfect circle around hub (radius: 300px desktop, 200px mobile)
  - Each node: 120px circle with step number and title
  - Connecting orbital lines from hub to each node (1px, brand color with opacity)
  - Click-to-expand: Clicking node reveals detailed content panel below infographic with smooth height transition
- **Mobile:** Vertical stacked circles with connecting vertical line, tap-to-expand accordion
- Active state: Node scales up 1.1x, glowing effect with brand color
- Content panel: max-w-3xl, appears with fade-in, includes detailed description and key points

### Case Studies/Results
Section padding: py-32
- Grid: 2 columns (mobile: 1)
- Case study cards with:
  - **Image Description:** Real project imagery or abstract representations - office environments, data visualizations, team collaborating, professional settings
  - Overlay gradient on hover
  - Client name, industry tag (small, brand color)
  - Result headline with numbers/metrics (48px, bold)
  - Brief description
  - "Read Case Study" link with arrow icon

### Expertise/Why Choose Us
Section padding: py-32, background: bg-gray-900
- Split layout: 60/40 (content/stats)
- Left: Headline + 3-4 paragraphs of expertise narrative
- Right: Key statistics in vertical stack
  - Each stat: Large number (64px, brand color) + label below
  - Subtle dividers between stats

### Team or Testimonials
Section padding: py-32
- 3-column grid for team members OR testimonial cards
- **Team:** Headshots (grayscale, color on hover), name, title, expertise area
- **Testimonials:** Client photo, quote, name/company, logo
- Cards with subtle border, hover: border changes to brand color

### Contact/Final CTA
Section padding: py-32, background: gradient from dark to brand color (subtle)
- Centered content, max-w-4xl
- Headline: "Ready to Transform Your Business?"
- Description paragraph
- Contact form (2-column: Name/Email, Company/Phone, full-width Message)
- Input styling: Dark with light border, focus: brand color border
- Submit button: Large, brand color, blur background
- Alternative: Office location, phone, email in sidebar column

### Footer
Padding: py-16
- 4-column layout: Company info, Services links, Resources, Contact
- Social icons (brand color on hover)
- Bottom bar: Copyright, Privacy/Terms links
- Subtle top border

---

## Section Background Pattern

**Alternating Background Shades** to create visual separation between adjacent sections across the entire website.

**Available Background Classes:**
- `bg-background` - Lightest dark shade (HSL: 220, 13%, 9%)
- `section-dark` - Medium dark with gradient (9% to 7% lightness)
- `section-darker` - Darkest with gradient (7% to 5% lightness)

**Usage Rules:**
1. **Never use the same background class on adjacent sections** - This eliminates visual separation
2. **Alternate between classes** following this pattern:
   - After hero (typically image/video): Start with `bg-background` or `section-dark`
   - Next section: Use contrasting shade (`section-dark` → `section-darker` or vice versa)
   - Continue alternating throughout the page
3. **ContactForm and Footer** use `bg-background` - Treat these as contrast resets

**Example Page Pattern:**
```jsx
<HeroSection /> {/* Video/image background */}
<section className="py-20 bg-background"> {/* Lightest */}
<section className="py-20 section-dark"> {/* Medium */}
<section className="py-20 section-darker"> {/* Darkest */}
<section className="py-20 bg-background"> {/* Reset to lightest */}
<section className="py-20 section-dark"> {/* Back to medium */}
<ContactForm /> {/* bg-background */}
<Footer />
```

**Quick Check:**
Before adding a new section, check the section immediately above it:
- If previous section uses `section-dark` → Use `section-darker` or `bg-background`
- If previous section uses `section-darker` → Use `section-dark` or `bg-background`
- If previous section uses `bg-background` → Use `section-dark` or `section-darker`

**Why This Matters:**
Clear visual separation between sections improves:
- Readability and content hierarchy
- User navigation and scanning
- Professional premium aesthetic
- Visual rhythm and flow

---

## Component Library

**Buttons:**
- Primary: bg-[#2177cd], white text, px-8 py-4, rounded-lg, blur background when over images
- Secondary: border-[#2177cd], brand color text, px-8 py-4, rounded-lg
- Hover: All buttons scale 1.02, shadow increase

**Cards:**
- Dark background (bg-gray-800), border: 1px gray-700
- Padding: p-8
- Rounded: rounded-xl
- Shadow: subtle on all, elevated on hover

**Form Inputs:**
- Dark background, light border (gray-600)
- Padding: px-4 py-3
- Rounded: rounded-lg
- Focus: brand color border, subtle glow

**Icons:**
Use Heroicons via CDN - outline style for consistency

---

## Animations

**Page Load:**
- Elements fade in with stagger (0.1s delay between)
- Subtle translateY from 20px to 0

**Scroll Animations:**
- Sections fade in when 20% visible
- Infographic nodes pulse subtly when in view

**Interactions:**
- Buttons: 0.2s ease transform and shadow
- Cards: 0.3s ease all properties
- Infographic expansion: 0.4s ease height and opacity

**Navigation:**
- Smooth scroll behavior for anchor links

---

## Images Section

**Hero Background:**
Premium corporate consulting imagery - modern glass office, diverse professional team in strategic discussion, or abstract architectural photography. Should convey sophistication, scale, and expertise. Dark gradient overlay essential.

**Case Study Cards:**
2-3 project-related images showing professional environments, data dashboards, or collaborative sessions. Maintain consistent aspect ratio (16:9).

**Placement Strategy:**
- Hero: Full-width background with overlay
- Case Studies: Card thumbnails with hover overlay effect
- Consider adding subtle background pattern/texture in sections for depth