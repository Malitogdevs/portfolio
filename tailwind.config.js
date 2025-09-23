export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['OpenSans', 'sans-serif'], 
      },
      textColor: {
        skin: {
          base: withOpacity("--color-text-base"),
          muted: withOpacity("--color-text-muted"),
          inverted: withOpacity("--color-text-inverted"),
        },
      },
      backgroundColor: {
        skin: {
          fill: withOpacity("--color-fill"),
          "button-accent": withOpacity("--color-button-accent"),
          "button-accent-hover": withOpacity("--color-button-accent-hover"),
          "button-muted": withOpacity("--color-button-muted"),
        },
      },
      colors: {
        skin: {
          hue: withOpacity("--color"),
          muted: withOpacity("--muted"),
        },
      },
      ringColor: {
        skin: {
          fill: withOpacity("--color-fill"),
        },
      },
      gradientColorStops: {
        skin: {
          hue: withOpacity("--color-fill"),
        },
      },
      keyframes: {
        slideUp: {
          "0%": { opacity: 0, bottom: "100%" },
          "100%": { opacity: 1, bottom: "0%" },
        },
      },
      animation: {
        slideUp: "slideUp 2s ease forwards",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  
};