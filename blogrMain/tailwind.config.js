/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      hover: "hsl(355, 100%, 74%)",
      "primary-red-nav": "hsl(356, 100%, 66%)",
      "head-blue": "hsl(208, 49%, 24%)",
      "primary-white-text": "hsl(0, 0%, 100%)",
      "footer-text-color": "hsl(240, 2%, 79%)",
      "bdy-text": " hsl(207, 13%, 34%)",
      "bdy-blue": "hsl(240, 10%, 16%)",
      "section-blue": "hsl(237, 23%, 32%)",
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '150px',
    },
    screens: {
      sm: "200px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
