import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    },
    extend: {
        borderColor: {
          primary:"#FEFBFB",
          secondary:"#AD1A1A"
        },
        textColor: {
          primary:"#FEFBFB",
          secondary:"#AD1A1A"
        },
        backgroundColor: {
          primary:"#FEFBFB",
          secondary:"#AD1A1A"
        },
        screens: {
          xxs: "200px",
          xs: "400px"
        }

      },
    },
    plugins: [],
} 

export default config