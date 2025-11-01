import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4169E1',
          dark: '#2952CC',
          light: '#5B7FE8',
        },
        dark: {
          DEFAULT: '#000000',
          card: '#1F2937',
          hover: '#374151',
        }
      },
    },
  },
  plugins: [],
};
export default config;
