/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,tsx,ts}', './public/**/*.{html,js,tsx,ts}'],
  theme: {
    extend: {
      colors: {
        border: 'var(--border)',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
      },

      keyframes: {
        ripple: {
          '100%': {
            opacity: 0,
            transform: 'scale(2.5)',
          },
        },
      },
      animation: {
        ripple: 'ripple 0.4s linear',
      },
    },
  },
  plugins: [],
}
