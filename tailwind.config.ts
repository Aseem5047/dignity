import type { Config } from "tailwindcss";

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
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
		extend: {
			animation: {
				"slide-in-right": "slideInRight 1s ease-in-out",
				"slide-in-left": "slideInLeft 1s ease-in-out",
			},
			keyframes: {
				slideInRight: {
					"0%": { transform: "translateX(100px)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" },
				},
				slideInLeft: {
					"0%": { transform: "translateX(-100px)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" },
				},
			},
			colors: {
				primary: "#009B6F",
				secondary: "#F90083",
				dark: {
					1: "#1C1F2E",
					2: "#161925",
					3: "#252A41",
					4: "#1E2757",
				},
				"black-1": "#242424",
				"white-1": "#f3f3f3",
				"gray-1": "#9e9e9e",
				"red-1": "#d2232a",
				"border-1": "#696969",
				"background-1": "#f9f9f9",
			},
			screens: {
				xs: "450px",
				"3xl": "1656px",
			},
			fontFamily: {
				family:
					"Poppins, Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif",
			},
			backgroundImage: {
				hero: "url('/assets/hero.png')",
			},
			lineHeight: {
				"extra-loose": "2.5",
				"12": "3rem",
				"16": "4rem",
				"20": "5rem",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
