const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Path to all template files where Tailwind classes will be used.
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  // Enables dark mode based on a 'dark' class on the <html> element.
  darkMode: "class",

  theme: {
    // Extend the default Tailwind theme instead of overwriting it.
    extend: {
      // Define the custom font families as requested.
      fontFamily: {
        // "Croissant One" is for titles, with default serifs as fallbacks.
        serif: ['"Croissant One"', ...defaultTheme.fontFamily.serif],
        // "Niconne" is for body text, with default sans-serifs as fallbacks.
        sans: ['"Niconne"', ...defaultTheme.fontFamily.sans],
      },

      // Define the custom color palette as requested.
      colors: {
        "brand-beige": "#e4d5b7",
        "brand-tan": "#d9b99b",
        // A dark, warm brown for text to ensure readability on beige backgrounds.
        "brand-dark": "#4b3c2a",
        // A soft off-white for card backgrounds and light text in dark mode.
        "brand-light": "#fdfbf7",
      },

      // Keep existing animations for UI enhancements.
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
    },
  },

  // Include Tailwind plugins for advanced styling.
  plugins: [
    require("@tailwindcss/typography"), // For styling markdown content from the CMS.
    require("@tailwindcss/forms"), // For styling form elements like in the contact page.
  ],
};
