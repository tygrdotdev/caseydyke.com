import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

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
		extend: {
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
			fontFamily: {
				sans: ["--font-sans", ...fontFamily.sans],
				serif: ["--font-serif", ...fontFamily.serif],
			},
			colors: {
				'accent': {
					'50': '#eefff3',
					'100': '#d8ffe6',
					'200': '#b4fece',
					'300': '#7afba8',
					'400': '#39ef7a',
					'500': '#0fd858',
					'600': '#06b345',
					'700': '#098c39',
					'800': '#0d7032',
					'900': '#0d5a2b',
					'950': '#003315',
				},
			}
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config