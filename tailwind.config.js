/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			keyframes: {
				slideOut: {
					'0%': {},
					'100%': { transform: 'translateX(-223px)' },
				},
				slideIn: {
					'0%': { transform: 'translateX(-223px)' },
					'100%': {},
				},
			},
			animation: {
				slideOut: 'slideOut .5s ease-in-out forwards',
				slideIn: 'slideIn .5s ease-in-out forwards',
			},
		},
	},
	plugins: [],
}
