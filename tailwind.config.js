import { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import { setupInspiraUI } from "@inspira-ui/plugins";

export default {
  darkMode: "class",
  safelist: ["dark"],
  prefix: "",
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        primary: ['Geist', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          light: '#63b3ed', // Light shade
          DEFAULT: '#8642e1', // Base primary color
          dark: '#02080e', // Dark shade
        },
        secondary: {
          DEFAULT: "#cb42e1",
          foreground: "hsl(var(--secondary-foreground))",
          dark: '#0c0f14', // Dark shade
        },
        text:{
          primary: "hsl(var(--text-primary))",
          secondary: "#8a87a1",
        },
        border: {
          dark: "#191521",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
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
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },

  plugins: [animate, setupInspiraUI],
} satisfies Config;
