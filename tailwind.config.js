/** @type {import('tailwindcss').Config} */

const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          "primary": "#1965B6",
          "primary-focus": "#7dd3fc",
          "neutral": "#2A609A",
          "neutral-focus": "white",
          
        },
      },
    ],
},
  theme: {
    extend: {
      
    },
  },
  darkMode: "class",
  plugins: [require("daisyui"),nextui()],
  
}