/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'blue': '#220E5B',
      'white': '#ffffff',
    },
    screens: {
			sm: { max: "700px" },
			md: "700px",
			lg: "1024px",
			xl: "1280px",
		},
  },
  plugins: [],
}
