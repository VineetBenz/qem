module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        textShadow: {
          'text': '2px 2px 4px rgba(0,0,0,0.5)',
          'text-sm': '1px 1px 2px rgba(0,0,0,0.5)',
        },
      },
    },
    plugins: [
      function ({ addUtilities }) {
        const newUtilities = {
          '.shadow-text': {
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
          },
          '.shadow-text-sm': {
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
          },
        }
        addUtilities(newUtilities)
      }
    ],
  }