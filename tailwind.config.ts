import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1f2e4d',
          50: '#eef1f7',
          100: '#d5dcea',
          200: '#aab9d5',
          300: '#7f96c0',
          400: '#5473ab',
          500: '#1f2e4d',
          600: '#1a2641',
          700: '#151e35',
          800: '#101629',
          900: '#0a0f1c',
        },
        orange: {
          DEFAULT: '#f5981a',
          50: '#fef9ec',
          100: '#fdefc9',
          200: '#fbdc8e',
          300: '#f9c853',
          400: '#f7b21f',
          500: '#f5981a',
          600: '#d97b0c',
          700: '#b5600c',
          800: '#934b10',
          900: '#783e11',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-up-delay': 'fadeUp 0.8s ease-out 0.2s forwards',
        'fade-up-delay-2': 'fadeUp 0.8s ease-out 0.4s forwards',
        'fade-up-delay-3': 'fadeUp 0.8s ease-out 0.6s forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('/hero-bg.jpg')",
      },
    },
  },
  plugins: [],
}

export default config
