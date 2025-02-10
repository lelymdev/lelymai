import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xxl: "1850px",
        xl: "1600px",
        lg: "1380px",
        mdbvp: "1280px",
        md: "1100px",
        mds: "800px",
        sml: "650px",
        sm: "480px"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage:{
        'header': "linear-gradient(180deg, rgba(204, 221, 255, 0.1) 0%, rgba(204, 221, 255, 0.05) 100%), linear-gradient(101.82deg, rgba(204, 221, 255, 0.1) 5.09%, rgba(204, 221, 255, 0) 16.53%)",
        'back': "linear-gradient(180deg, rgba(204, 221, 255, 0.1) 0%, rgba(204, 221, 255, 0.05) 100%)",
        'onchain': "linear-gradient(to_right,#CCDDF 0%,rgba(204,221,255,0.5) 100%)"
      }
    },
  },
  plugins: [],
} satisfies Config;
