import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "surface-container-lowest": "#0c0f0f",
        "secondary-container": "#0254b0",
        "on-surface": "#e2e2e2",
        "on-secondary-fixed-variant": "#004492",
        "primary-fixed-dim": "#17e299",
        "tertiary-fixed-dim": "#c9c6c5",
        "on-primary-fixed": "#002112",
        "outline": "#859589",
        "on-secondary-fixed": "#001a40",
        "on-secondary-container": "#b7cdff",
        "on-tertiary-fixed-variant": "#474646",
        "tertiary-fixed": "#e5e2e1",
        "tertiary-container": "#c9c6c5",
        "surface-container-low": "#1a1c1c",
        "tertiary": "#e5e2e1",
        "secondary-fixed": "#d7e2ff",
        "on-primary-fixed-variant": "#005234",
        "on-error-container": "#ffdad6",
        "background": "#121414",
        "surface-bright": "#38393a",
        "error-container": "#93000a",
        "on-tertiary-container": "#535252",
        "on-tertiary-fixed": "#1c1b1b",
        "on-error": "#690005",
        "inverse-surface": "#e2e2e2",
        "surface-container-highest": "#333535",
        "surface-container-high": "#282a2b",
        "on-surface-variant": "#bacbbe",
        "surface": "#121414",
        "on-primary-container": "#005f3d",
        "primary": "#51ffb4",
        "inverse-on-surface": "#2f3131",
        "on-secondary": "#002f67",
        "inverse-primary": "#006c47",
        "outline-variant": "#3b4a41",
        "surface-variant": "#333535",
        "on-primary": "#003823",
        "surface-dim": "#121414",
        "on-tertiary": "#313030",
        "on-background": "#e2e2e2",
        "primary-fixed": "#4dffb3",
        "secondary-fixed-dim": "#acc7ff",
        "surface-container": "#1e2020",
        "primary-container": "#18e299",
        "error": "#ffb4ab",
        "secondary": "#acc7ff",
        "surface-tint": "#17e299"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "xl": "48px",
        "md": "16px",
        "unit": "4px",
        "sm": "8px",
        "lg": "24px",
        "gutter": "24px",
        "container-max": "1200px",
        "xs": "4px"
      },
      fontFamily: {
        "mono-tag": ["var(--font-geist-mono)", "monospace"],
        "headline-lg": ["var(--font-inter)", "sans-serif"],
        "body-base": ["var(--font-inter)", "sans-serif"],
        "code-label": ["var(--font-geist-mono)", "monospace"],
        "display-xl": ["var(--font-inter)", "sans-serif"],
        "body-sm": ["var(--font-inter)", "sans-serif"],
        "headline-md": ["var(--font-inter)", "sans-serif"]
      },
      fontSize: {
        "mono-tag": ["0.8125rem", { lineHeight: "1.2", fontWeight: "400" }],
        "headline-lg": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" }],
        "body-base": ["1rem", { lineHeight: "1.6", fontWeight: "400" }],
        "code-label": ["0.75rem", { lineHeight: "1rem", letterSpacing: "0.05em", fontWeight: "500" }],
        "display-xl": ["4rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5", fontWeight: "400" }],
        "headline-md": ["1.5rem", { lineHeight: "1.3", fontWeight: "600" }]
      }
    }
  },
  plugins: [],
};

export default config;
