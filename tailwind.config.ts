import type { Config } from "tailwindcss"
import typography from "@tailwindcss/typography"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: {
            primary: "#141414",
            secondary: "#232324",
            tertiary: "#202021",
            modal: "#303030",
            accent: "#0047BB",
            success: "#2E7D32",
            error: "#D32F2F",
          },
          text: {
            primary: "#E1E3E6",
            secondary: "#B0B1B6",
            tertiary: "#76787A",
            accent: "#0047BB",
            success: "#2E7D32",
            error: "#D32F2F",
          },
          icons: {
            primary: "#E1E3E6",
            secondary: "#B0B1B6",
            tertiary: "#76787A",
            accent: "#0047BB",
            success: "#2E7D32",
            error: "#D32F2F",
          },
          border: {
            primary: "#363738",
            accent: "#0047BB",
            success: "#2E7D32",
            error: "#D32F2F",
          },
        },
        state: {
          accentDisabled: "#424242",
          blueHover: "#003182",
          blueFocused: "#4C7ECF",
          transparentBlueHover: "rgba(0,71,187,0.10)",
          transparentBlueFocused: "rgba(0,71,187,0.50)",
          errorHover: "#C62828",
          errorFocused: "#E06D6D",
          transparentErrorHover: "rgba(211,47,47,0.10)",
          transparentErrorFocused: "rgba(211,47,47,0.50)",
          successHover: "#1B5E20",
          successFocused: "#6CA46F",
          transparentSuccessHover: "rgba(46,125,50,0.10)",
          transparentSuccessFocused: "rgba(46,125,50,0.50)",
          transparentContrastHover: "rgba(255,255,255,0.04)",
          transparentContrastFocused: "rgba(255,255,255,0.12)",
        },
        brand: {
          blue: "#0047BB",
          darkBlue: "#001A72",
          orange: "#FA4616",
          white: "FFFFFF",
          black: "#101820",
        },
      },
      fontSize: {
        "custom-headline": ["3rem", { lineHeight: "3.5rem", fontWeight: 700 }],
        title3: ["1rem", { lineHeight: "1.5rem", fontWeight: 500 }],
        h1: ["6rem", { lineHeight: "7rem", fontWeight: 300 }],
        h2: ["3.75rem", { lineHeight: "4.5rem", fontWeight: 300 }],
        h3: ["3rem", { lineHeight: "3.5rem", fontWeight: 400 }],
        h4: ["2.125rem", { lineHeight: "2.25rem", fontWeight: 400 }],
        h5: ["1.5rem", { lineHeight: "2rem", fontWeight: 400 }],
        h6: ["1.25rem", { lineHeight: "1.5rem", fontWeight: 600 }],
        subtitle1: ["1rem", { lineHeight: "1.5rem", fontWeight: 400 }],
        subtitle2: ["0.875rem", { lineHeight: "1.5rem", fontWeight: 500 }],
        body1: ["1rem", { lineHeight: "1.5rem", fontWeight: 400 }],
        body2: ["0.875rem", { lineHeight: "1.25rem", fontWeight: 400 }],
        button: ["0.875rem", { lineHeight: "1.25rem", fontWeight: 600 }],
        caption: ["0.75rem", { lineHeight: "1rem", fontWeight: 400 }],
        overline: ["0.75rem", { lineHeight: "2rem", fontWeight: 400 }],
      },
    },
  },
  plugins: [typography],
}
export default config
