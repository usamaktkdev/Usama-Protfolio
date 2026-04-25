---
name: Aetheric Developer Portfolio
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#38393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#bacbbe'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#859589'
  outline-variant: '#3b4a41'
  surface-tint: '#17e299'
  primary: '#51ffb4'
  on-primary: '#003823'
  primary-container: '#18e299'
  on-primary-container: '#005f3d'
  inverse-primary: '#006c47'
  secondary: '#acc7ff'
  on-secondary: '#002f67'
  secondary-container: '#0254b0'
  on-secondary-container: '#b7cdff'
  tertiary: '#e5e2e1'
  on-tertiary: '#313030'
  tertiary-container: '#c9c6c5'
  on-tertiary-container: '#535252'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#4dffb3'
  primary-fixed-dim: '#17e299'
  on-primary-fixed: '#002112'
  on-primary-fixed-variant: '#005234'
  secondary-fixed: '#d7e2ff'
  secondary-fixed-dim: '#acc7ff'
  on-secondary-fixed: '#001a40'
  on-secondary-fixed-variant: '#004492'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c9c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474646'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
typography:
  display-xl:
    fontFamily: Inter
    fontSize: 4rem
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 2.25rem
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: '1.3'
  body-base:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: '1.5'
  code-label:
    fontFamily: Geist Mono
    fontSize: 0.75rem
    fontWeight: '500'
    lineHeight: 1rem
    letterSpacing: 0.05em
  mono-tag:
    fontFamily: Geist Mono
    fontSize: 0.8125rem
    fontWeight: '400'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  container-max: 1200px
  gutter: 24px
---

## Brand & Style

The design system is engineered for the high-end developer portfolio, balancing technical precision with atmospheric depth. It evokes a sense of "deep space exploration"—quiet, focused, and professional. The personality is authoritative yet visionary, utilizing a dark-mode-first approach that reduces cognitive load while highlighting technical expertise through vibrant accent "pulses."

The design style is a hybrid of **Minimalism** and **Glassmorphism**. It relies on structured, mathematical layouts typical of technical documentation, softened by organic, blurred aurora effects. This creates a "glass-on-void" aesthetic where UI elements feel like floating instrumentation panels against a vast digital nebula.

## Colors

This design system utilizes a high-contrast dark palette to maximize readability and visual impact. The core background is a true "deep space" black to ensure secondary glows feel luminous rather than muddy.

- **Primary Accent:** Brand Green (#18E299) is used for call-to-actions, success states, and primary brand markers.
- **Secondary Accent:** Soft Blue (#3772cf) is reserved for interactive states, hyperlinks, and atmospheric background elements.
- **Neutrals:** Primary text uses an off-white to prevent retina fatigue, while muted text provides a clear hierarchy for secondary metadata.
- **Atmospherics:** Aurora effects are generated using radial gradients of the Primary and Secondary colors with 150px-300px blur radii at 10-15% opacity.

## Typography

The typography strategy leverages two distinct weights: the humanist precision of **Inter** for narrative content and the rigid, monospaced structure of **Geist Mono** for technical data.

- **Headings:** Set in Inter with tight letter-spacing to create a "locked-in" professional appearance.
- **Body:** Optimized for legibility with generous line-height to ensure technical documentation is easy to scan.
- **Technical Labels:** All tags, timestamps, and metadata must use Geist Mono in uppercase or sentence case to differentiate "data" from "narrative."

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** system for desktop, centering content within a 1200px container to maintain focus. A 12-column grid is utilized, with 24px gutters providing ample "air" between technical components.

Rhythm is maintained through a 4px baseline. Vertical sections are separated by `xl` (48px) spacing to ensure the "atmospheric" background orbs have space to breathe without cluttering the foreground UI.

## Elevation & Depth

In this design system, depth is communicated through **Tonal Layers** and **Low-Contrast Outlines** rather than traditional drop shadows.

1.  **Level 0 (Base):** Deep space background (#050505).
2.  **Level 1 (Cards/Panels):** Raised surface (#111111) with a 1px border (rgba(255,255,255,0.1)).
3.  **Level 2 (Overlays/Modals):** Raised surface (#1a1a1a) with a subtle 20% opacity background blur to interact with the aurora orbs.

Shadows, when used, are restricted to "Glow Shadows"—a soft, 20px blur of the primary Brand Green used only for active primary buttons to simulate a light source emitting from the element.

## Shapes

The design system employs a "Contained vs. Fluid" shape language. 

- **Structural Containers:** Cards and major sections utilize a 16px radius, providing a modern, friendly feel that softens the "brutalist" dark background.
- **Interactive Elements:** Buttons and tags utilize a full-pill (9999px) radius. This creates a distinct visual shorthand: "Rounded rectangles are for content; pills are for actions."
- **Borders:** Borders remain ultra-thin (1px) across all shapes to maintain a high-fidelity, sophisticated appearance.

## Components

### Buttons
- **Primary:** Full-pill shape, Brand Green background, black text. Subtle outer glow on hover.
- **Secondary:** Full-pill shape, 1px border (#rgba(255,255,255,0.1)), primary text color.
- **Ghost:** Full-pill shape, no border, secondary blue text.

### Cards
- 16px corner radius, #111111 background. 
- 1px border using `rgba(255,255,255,0.1)`.
- Internal padding should follow the `lg` (24px) spacing rule.

### Chips & Technical Tags
- Geist Mono typography.
- Small-pill shape (9999px).
- Low-opacity Brand Green background (10%) with 100% opacity Brand Green text.

### Input Fields
- Darker-than-surface background (#080808).
- 8px corner radius (slightly sharper than cards for precision).
- 1px border that transitions to Brand Green on focus.

### Aurora Orbs
- Background decorative elements.
- Soft Blue and Brand Green radial gradients.
- Placed at extreme z-index (-1) with a `blur(100px)` filter.