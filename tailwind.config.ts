import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "sea-green": {
          500: "var(--sea-green-500)",
          950: "var(--sea-green-950)",
        },
        linen: {
          50: "var(--linen-50)",
          500: "var(--linen-500)",
        },
        "bright-amber": "var(--bright-amber)",
        "cayenne-red": "var(--cayenne-red)",
        "lipstick-red": "var(--lipstick-red)",
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
