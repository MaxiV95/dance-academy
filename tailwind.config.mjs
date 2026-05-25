/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				dark: "#1a1a1a",
				red_d: "#b30000",
				gold_d: "#d4af37",
				silver_d: "#c0c0c0",

				light: "#f5f5f5",
				red_l: "#c8102e",
				gold_l: "#f9c74f",
				silver_l: "#b0b0b0",
			},
		},
	},
	plugins: [],
};
