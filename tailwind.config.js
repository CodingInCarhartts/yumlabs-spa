/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yum: {
          900: '#0a0a0a', // Arch Linux almost black
          800: '#171717',
          700: '#262626',
          accent: '#10b981', // Rust/CLI Emerald
          secondary: '#8b5cf6', // Python/Supabase Purple
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}