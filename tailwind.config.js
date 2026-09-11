/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F7F3EC',
          50: '#FDFBF8',
          100: '#F7F3EC',
          200: '#EFE7D9',
        },
        charcoal: {
          DEFAULT: '#1B1815',
          light: '#2A2620',
          soft: '#3D3730',
        },
        brass: {
          DEFAULT: '#B48A4E',
          light: '#D2AD73',
          dark: '#8C6A38',
        },
        taupe: {
          DEFAULT: '#D9CFBF',
          light: '#E9E2D6',
          dark: '#A99C87',
        },
        sage: {
          DEFAULT: '#5C6B57',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Manrope"', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.35em',
      },
      boxShadow: {
        soft: '0 20px 60px -20px rgba(27, 24, 21, 0.25)',
        card: '0 10px 40px -12px rgba(27, 24, 21, 0.18)',
        subtle: '0 2px 20px rgba(27, 24, 21, 0.06)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
