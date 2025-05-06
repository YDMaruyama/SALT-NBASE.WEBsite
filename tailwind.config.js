/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        natural: {
          50: '#f8f8f6',
          100: '#e8e6dc',
          200: '#d5d0bc',
          300: '#b8af93',
          400: '#9c916d',
          500: '#847a51',
          600: '#6b623f',
          700: '#524b31',
          800: '#3d3825',
          900: '#2b281c',
        },
        sage: {
          50: '#f4f7f4',
          100: '#e4ebe4',
          200: '#ccd8cc',
          300: '#a8bea8',
          400: '#7f9c7f',
          500: '#5f7d5f',
          600: '#4b644b',
          700: '#3c4f3c',
          800: '#2f3d2f',
          900: '#252d25',
        },
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', 'sans-serif'],
        serif: ['"Shippori Mincho"', '"Noto Serif JP"', 'serif'],
      },
      spacing: {
        '128': '32rem',
      },
      height: {
        'screen-90': '90vh',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};