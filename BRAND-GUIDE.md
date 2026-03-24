# North Shore Projects — Brand System

## Brand Architecture
- Parent brand: North Shore Projects (NSP)
- Sub-brands: North Shore Tiling, North Shore Painting, North Shore Removals, North Shore Removals
- Model: Endorsed brand — every sub-brand uses the identical NSP mark, only swapping the service name and accent colour

## Logo / Brand Mark
- Shape: Rounded square (border-radius: 0.5rem)
- Background: #1A1A2E
- Text: "NSP" in white, font-weight: 800, centered
- Sizes: Full (2.25rem/36px), Medium (1.5rem/24px), Favicon (32x32px)
- Minimum display size: 32px
- Clear space: Minimum padding around mark = half the mark's height on all sides
- The mark NEVER changes colour, shape, or text — it is identical across all sub-brands
- Parent brand lockup: [NSP mark] + "North Shore Projects" (font-weight: 700, font-size: 1.1rem)
- Sub-brand lockup: [NSP mark] + "North Shore [Service]" (same styling)

## Colour System

### Primary Palette (shared across ALL brands)
| Name | Hex | CSS Variable | Usage |
|------|-----|-------------|-------|
| NSP Black | #1A1A2E | --nsp-black | Primary text, dark backgrounds, headers |
| NSP Gold | #C19A6B | --nsp-gold | Primary accent, CTAs, highlights, hover states |
| NSP White | #FAFAFA | --nsp-white | Page backgrounds, card backgrounds |
| Pure White | #FFFFFF | --white | Card surfaces, input backgrounds |
| NSP Gray | #6B7280 | --nsp-gray | Body text, secondary text, muted elements |
| Border | #E5E5E5 | --border | Card borders, dividers, input borders |
| Border Hover | #CCCCCC | --border-hover | Hover state for borders |
| Card BG | #F8F8F8 | --card | Card backgrounds, subtle fills |
| Success | #10B981 | --success | Success states, confirmations |
| Error | #EF4444 | --error | Error states, validation |

### Service Accent Colours
Each sub-brand gets ONE unique accent colour. This replaces --nsp-gold for service-specific pages.

| Service | Hex | CSS Variable | Personality |
|---------|-----|-------------|-------------|
| Tiling | #2D5A3D | --accent-tiling | Forest green — earthy, premium, craftsmanship |
| Painting | #4A6FA5 | --accent-painting | Slate blue — creative, clean, professional |
| Cleaning | #5BA88C | --accent-cleaning | Fresh teal — clean, fresh, eco-friendly |
| Removals | #D4763A | --accent-removals | Warm orange — energy, movement, action |

### Accent Usage Rules
- The accent colour replaces gold for: primary buttons, section highlights, active states, progress indicators
- The accent colour does NOT replace: dark backgrounds, text colours, borders, card styles
- The primary palette (black, white, gray) remains identical across all services
- Maximum accent coverage: ~15% of any page — it's always secondary to the primary palette

## Typography

### Font Stack
- Primary: `'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif`
- Load from Google Fonts: weights 400, 500, 600, 700

### Type Scale
| Element | Size | Weight | Line Height | Letter Spacing | Usage |
|---------|------|--------|-------------|----------------|-------|
| H1 | 36px (2.25rem) | 700 | 1.2 | -0.02em | Page titles, hero headings |
| H2 | 28px (1.75rem) | 700 | 1.3 | -0.01em | Section headings |
| H3 | 22px (1.375rem) | 600 | 1.4 | 0 | Sub-section headings, card titles |
| Body | 16px (1rem) | 400 | 1.6 | 0 | Paragraphs, descriptions |
| Small | 14px (0.875rem) | 400 | 1.5 | 0 | Labels, helper text, meta info |
| Caption | 12px (0.75rem) | 500 | 1.4 | 0.05em | Uppercase labels, badges, tags |

### Text Colours
- Headings: #1A1A2E (--nsp-black)
- Body text: #6B7280 (--nsp-gray)
- Muted/secondary: #999999
- On dark backgrounds: #FFFFFF (headings), rgba(255,255,255,0.7) (body)
- Links: inherit colour, underline on hover
- Gold accent text: #C19A6B (use sparingly for highlights)

## Spacing System
Base unit: 4px

| Token | Value | Usage |
|-------|-------|-------|
| xs | 4px (0.25rem) | Tight gaps, icon padding |
| sm | 8px (0.5rem) | Card internal gaps, small margins |
| md | 16px (1rem) | Standard padding, component gaps |
| lg | 24px (1.5rem) | Section internal spacing |
| xl | 32px (2rem) | Between components |
| 2xl | 48px (3rem) | Between sections |
| 3xl | 64px (4rem) | Major section padding |
| 4xl | 96px (6rem) | Hero/section top-bottom padding |

## Border Radius
| Token | Value | Usage |
|-------|-------|-------|
| --radius-sm | 0.5rem (8px) | Buttons, badges, small cards, logo mark |
| --radius | 1rem (16px) | Cards, modals, larger components |
| --radius-lg | 1.5rem (24px) | Feature cards, hero cards |
| --radius-xl | 2rem (32px) | Large feature sections |
| --radius-full | 9999px | Pills, circular buttons, tags |

## Shadows
| Level | Value | Usage |
|-------|-------|-------|
| None | none | Default state for cards |
| Subtle | 0 4px 30px rgba(0,0,0,0.05) | Navbar, floating elements |
| Card hover | 0 8px 30px rgba(201,169,98,0.15) | Card hover state (gold tint) |
| Elevated | 0 20px 60px rgba(0,0,0,0.15) | Modals, dropdowns, overlays |

## UI Components

### Buttons
```css
/* Base */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem 1.75rem;
    font-size: 0.9rem;
    font-weight: 600;
    border-radius: 9999px; /* pill shape */
    transition: all 150ms ease;
    white-space: nowrap;
    border: none;
    cursor: pointer;
}

/* Primary (Gold) */
.btn-primary {
    background: linear-gradient(135deg, #C19A6B, #B8954A);
    color: #1A1A2E;
}

/* Secondary (Dark) */
.btn-secondary {
    background: #1A1A2E;
    color: #FFFFFF;
}

/* Outline */
.btn-outline {
    background: transparent;
    border: 1px solid #E5E5E5;
    color: #1A1A2E;
}

/* Service accent button — swap gradient colours */
.btn-accent {
    background: linear-gradient(135deg, var(--service-accent), var(--service-accent-dark));
    color: #FFFFFF;
}
```

### Cards
```css
.card {
    background: #FFFFFF;
    border: 1px solid #E5E5E5;
    border-radius: 1rem;
    padding: 2rem;
    transition: all 300ms ease;
}

.card:hover {
    border-color: #C19A6B;
    box-shadow: 0 8px 30px rgba(201,169,98,0.15);
    transform: translateY(-4px);
}
```

### Form Inputs
```css
.form-input {
    width: 100%;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    border: 1px solid #E5E5E5;
    border-radius: 0.5rem;
    background: #FFFFFF;
    transition: border-color 150ms ease;
}

.form-input:focus {
    outline: none;
    border-color: #C19A6B;
    box-shadow: 0 0 0 3px rgba(193,154,107,0.1);
}
```

### Badges / Pills
```css
.badge {
    display: inline-flex;
    align-items: center;
    padding: 0.25rem 0.75rem;
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-radius: 9999px;
    background: rgba(193,154,107,0.1);
    color: #C19A6B;
}
```

## Navbar
- Position: fixed, floating (top: 1rem, centered)
- Background: rgba(255,255,255,0.8) with backdrop-filter: blur(20px)
- Border: 1px solid #E5E5E5
- Border-radius: 9999px (pill shape)
- Max-width: 900px
- On scroll: background opacity increases to 0.95, shadow deepens
- Contains: Logo lockup (left), nav links (center), CTA button (right)
- Mobile: hamburger menu with dark overlay (#1A1A1A at 95% opacity)

## Transitions
| Token | Value | Usage |
|-------|-------|-------|
| --transition-fast | 150ms ease | Hovers, button clicks, colour changes |
| --transition-base | 300ms ease | Card animations, menu transitions |
| --transition-smooth | 500ms cubic-bezier(0.22,1,0.36,1) | Page transitions, large reveals |

## Brand Rules
1. The NSP mark is ALWAYS #1A1A2E background with white text — never recoloured
2. Service accent colours are secondary — never more than ~15% of page surface
3. Typography is always Montserrat — never swap fonts between services
4. The primary palette (black, gold, white, gray) is identical across all services
5. Cards, buttons, inputs, and layout patterns are identical across services — only the accent colour changes
6. Minimum logo display size: 32px
7. Clear space around logo: minimum half the mark height on all sides

## File Structure Convention
- Shared styles: `css/styles.css` (contains all CSS variables and components)
- Service pages override `--gold` with their accent colour via a class on `<body>` or `<html>`
- Example: `<body class="service-tiling">` → CSS: `.service-tiling { --gold: #2D5A3D; --gold-dark: #1F4A2D; }`
