import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        heading: ["Manrope", "sans-serif"],
      },
      fontSize: {
        "display-lg": ["3.5rem", { lineHeight: "4rem", fontWeight: "700" }],
        "display-md": ["2.5rem", { lineHeight: "3rem", fontWeight: "700" }],
        "display-sm": ["2rem", { lineHeight: "2.5rem", fontWeight: "700" }],
        "heading-lg": ["1.75rem", { lineHeight: "2.25rem", fontWeight: "600" }],
        "heading-md": ["1.5rem", { lineHeight: "2rem", fontWeight: "600" }],
        "heading-sm": ["1.25rem", { lineHeight: "1.75rem", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.75rem", fontWeight: "400" }],
        "body-md": ["1rem", { lineHeight: "1.5rem", fontWeight: "400" }],
        "body-sm": ["0.875rem", { lineHeight: "1.25rem", fontWeight: "400" }],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#1A365D",
          dark: "#0F1F3D",
          foreground: "#FFFFFF",
          darkForeground: "#F5F7FA",
        },
        secondary: {
          DEFAULT: "#8B5A2B",
          dark: "#6B441B",
          foreground: "#FFFFFF",
          darkForeground: "#F5F7FA",
        },
        neutral: {
          DEFAULT: "#F5F7FA",
          dark: "#1A1A1A",
          foreground: "#1A365D",
          darkForeground: "#8B5A2B",
        },
        accent: {
          DEFAULT: "#D4A017",
          dark: "#B38914",
          foreground: "#1A365D",
          darkForeground: "#F5F7FA",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config; 