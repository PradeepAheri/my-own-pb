---
name: PRΛDEEP — ENGINEERING BEYOND LIMITS
colors:
  surface: '#10131b'
  surface-dim: '#10131b'
  surface-bright: '#363941'
  surface-container-lowest: '#0b0e15'
  surface-container-low: '#181b23'
  surface-container: '#1d2027'
  surface-container-high: '#272a32'
  surface-container-highest: '#32353d'
  on-surface: '#e0e2ed'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#e0e2ed'
  inverse-on-surface: '#2d3038'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#d0bcff'
  on-tertiary: '#3c0091'
  tertiary-container: '#a078ff'
  on-tertiary-container: '#340080'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#e9ddff'
  tertiary-fixed-dim: '#d0bcff'
  on-tertiary-fixed: '#23005c'
  on-tertiary-fixed-variant: '#5516be'
  background: '#10131b'
  on-background: '#e0e2ed'
  surface-variant: '#32353d'
typography:
  display-hero:
    fontFamily: Space Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 80px
    letterSpacing: -0.04em
  display-hero-mobile:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 46px
    letterSpacing: -0.03em
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.03em
  headline-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 30px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.01em
  code-metric:
    fontFamily: JetBrains Mono
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
    letterSpacing: -0.02em
  code-inline:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.12em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.75rem
  space-xl: 3rem
  space-2xl: 5rem
---

## Brand & Style

This design system expresses a luxury, high-tech, futuristic developer aesthetic tailored for executive tech leaders, elite Silicon Valley recruiters, venture partners, and cutting-edge collaborators. The visual ethos merges the restraint of high-craft engineering software (Linear, Vercel) with the dramatic presence of aerospace telemetry and luxury hardware interfaces.

### Core Character & Mood
- **Atmospheric Precision:** Uncompromising technical mastery conveyed through dark spatial depth, crystalline optics, and structural clarity.
- **Controlled Luminescence:** Restrained use of photonic glows, laser-precise gradient borders, and directional backlights that mimic cleanroom optical sensors.
- **Architectonic Negative Space:** Vast fields of near-absolute void that focus extreme attention onto core work, system architecture diagrams, and high-impact metrics.

### Visual Foundations
- **Subtle Frosted Glassmorphism:** Layered acrylic panels utilizing ultra-low opacity tints coupled with high-radius background diffusion (`backdrop-filter: blur(16px)` to `blur(24px)`).
- **Hairline Construction:** 1px microscopic grid lines and borders that ground the interface into an engineered matrix.
- **Restrained Motion Dynamics:** Friction-weighted ease-out transitions (`cubic-bezier(0.16, 1, 0.3, 1)`) for micro-interactions, hover highlights, and interactive canvas components.

## Colors

The color architecture is built strictly on an absolute deep-space spectrum punctuated by disciplined spectral emitters.

### Color Tokens & Intent
- **Void Canvas (`#080B12`):** Pure foundational substrate; non-reflective and deep.
- **Substrate Surface (`#101522`):** Primary card and panel surface layer, providing structural contrast against the canvas.
- **Elevated Surface (`#161D2E`):** Secondary container tier for active modals, popovers, and interactive modules.
- **Subtle Slate Hairlines (`#1E2638`):** 1px structural framing, dividers, and matrix boundaries.
- **Electric Blue Primary (`#3B82F6` / `#60A5FA`):** The primary signal carrier; drives high-priority interactions, interactive terminal cursors, and primary project tags.
- **Neon Cyan Emitter (`#06B6D4`):** Secondary accent for live system status indicators, production throughput stats, and telemetry nodes.
- **Spectral Violet Emitter (`#8B5CF6`):** Tertiary highlight reserved for algorithmic complexity markers, machine learning tags, and luxury gradient endpoints.

### Application Rules
- **Color Discipline:** Saturated accent colors must never occupy large surface fills. They are strictly reserved for text accents, 1px gradient stroke sweeps, micro-indicators (dots), and blurred radial backlights (blobs with 10%–20% opacity).
- **Text Contrast Tiering:**
  - High-Emphasis: `#F8FAFC` (95% opacity) for titles and primary metrics.
  - Medium-Emphasis: `#94A3B8` (70% opacity) for body text and descriptive context.
  - Low-Emphasis: `#64748B` (50% opacity) for metadata, timestamps, and line numbers.

## Typography

The typographic hierarchy establishes clear structural tension between raw computational precision and refined editorial authority.

### Typographic Roles
- **Editorial Brand & Headlines (`Space Grotesk`):** Features tight negative letter spacing, assertive geometric cuts, and balanced proportions that deliver an avant-garde technology feel.
- **Narrative & Exposition (`Inter`):** Neutral, hyper-legible body typography optimized for technical deep dives, architectural breakdowns, and project rationale.
- **Data, Metric & Telemetry (`JetBrains Mono`):** Dedicated to benchmarks, latency figures, technical specifications, terminal logs, and system timestamps.

### Usage Directives
- Pair `label-caps` in uppercase format with small colored status pips (e.g., `[LIVE: 99.999% SLA]`).
- For numeric achievements and architectural benchmarks, render numbers using `code-metric` accompanied by an uppercase `label-caps` title underneath.
- Never use `Space Grotesk` for long-form paragraphs; reserve it exclusively for titles, section headings, and large callouts.

## Layout & Spacing

The structural layout uses an engineered 12-column responsive fluid grid bounded inside a disciplined `1320px` maximum viewport container.

### Layout Mechanics
- **Desktop (≥ 1024px):** 12-column grid, `margin: 3rem`, `gutter: 1.5rem`.
- **Tablet (768px - 1023px):** 8-column grid, `margin: 2rem`, `gutter: 1.25rem`.
- **Mobile (< 768px):** 4-column grid, `margin-mobile: 1.25rem`, `gutter-mobile: 1rem`.

### Spatial Rhythm
- Apply `space-2xl` strictly between distinct portfolio macro-sections (e.g., System Architecture, Flagship Work, Open Source Contributions).
- Leverage generous negative space around central statements to emphasize focus and high-craft execution.
- Maintain consistent internal component padding using `space-md` on compact items and `space-lg` across primary cards.

## Elevation & Depth

Visual hierarchy does not use traditional drop shadows. Instead, it relies on photonic transparency, hairline borders, and subtle gradient illuminations.

### Depth Architecture
1. **Canvas Layer (`#080B12`):** Base canvas containing subtle ambient radial light cones:
   - Primary Ambient Glow: `radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.08), transparent 70%)`
   - Accent Flare: `radial-gradient(circle at 100% 50%, rgba(139, 92, 246, 0.04), transparent 50%)`
2. **Surface Layer (`#101522` / 75% opacity):** Backed by `backdrop-filter: blur(20px)` and enclosed by a crisp `1px solid #1E2638` border.
3. **Elevated Interactive Layer:** Triggered on hover or focus:
   - Border transforms to a continuous hairline gradient: `linear-gradient(135deg, rgba(96, 165, 250, 0.4), rgba(6, 182, 212, 0.2), rgba(30, 38, 56, 1))`.
   - Subtle outer ambient glow: `0 0 24px -4px rgba(59, 130, 246, 0.12)`.

## Shapes

The design uses a restrained `0.25rem` (4px) to `0.5rem` (8px) geometric profile (`roundedness: 1`), reinforcing an industrial, engineered feel.

### Geometry Standards
- **Buttons, Badges, & Chips:** `4px` (`space-xs`) corner radius for a clean, sharp look.
- **Cards, Code Terminals, & Modal Windows:** `8px` (`0.5rem`) corner radius.
- **Pills / Status Pips:** Full pill geometry (`rounded-full`) is strictly reserved for microscopic operational status indicators (`w-2 h-2`).

## Components

### Buttons
- **Primary Action:** Solid electric blue background (`#3B82F6`) transitioning to `#60A5FA` on hover, crisp dark text (`#080B12`), font `Inter` 14px weight 600, padding `10px 20px`, corner radius `4px`. Micro-glow on hover: `0 0 16px rgba(59, 130, 246, 0.4)`.
- **Secondary / Ghost Action:** Frosted surface (`rgba(16, 21, 34, 0.8)`), 1px slate border (`#1E2638`), text `#F8FAFC`, subtle hover border shift to `#3B82F6`.
- **Terminal Action:** Monospaced (`JetBrains Mono`), transparent background, 1px dashed `#1E2638` border, displays micro code syntax glyphs (`$ ./run.sh`).

### Project & Engineering Cards
- **Construction:** Background `#101522` at 85% opacity, `backdrop-filter: blur(16px)`, enclosed by `1px solid #1E2638`, corner radius `8px`, internal padding `space-lg`.
- **Interaction:** On cursor hover, the border seamlessly transitions to a gradient sweep (`#3B82F6` to `#06B6D4`), surface reveals a subtle top radial highlight, and internal links reveal an arrow micro-animation (`translate-x-1`).

### Chips & Technical Stack Tags
- Background `rgba(30, 38, 56, 0.4)`, border `1px solid rgba(30, 38, 56, 0.8)`, text `#94A3B8`, font `JetBrains Mono` 11px uppercase, padding `4px 10px`, radius `4px`.
- Active / Specialized tags feature a 1px colored accent border matching the domain (Cyan for Infrastructure, Violet for AI/ML, Blue for Distributed Systems).

### Metric Callout Display
- Dedicated presentation container for performance benchmarks (e.g., "0.4ms Latency", "100k QPS").
- Number set in `code-metric` with a dual-color vertical gradient (`#F8FAFC` to `#94A3B8`), accompanied by an uppercase description in `label-caps` (`#64748B`).

### Interactive Code / Telemetry Blocks
- Framed in a dark terminal container with a top header row containing three macOS-style monochromatic status dots (`#1E2638`), file path or architecture branch label in `JetBrains Mono` 12px, followed by line-numbered syntax blocks.

### Input Fields & Terminal Prompts
- Background `rgba(8, 11, 18, 0.9)`, border `1px solid #1E2638`, active focus state transitions to `1px solid #3B82F6` accompanied by an inner glow `0 0 10px rgba(59, 130, 246, 0.15)`. Text in `JetBrains Mono` 14px.