/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./cypress/**/*.{js,ts,jsx,tsx,mdx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			'gray-light': '#F6F6F6', // background
			white: '#FFF', // foreground
			'gray-dark': '#585858', // text
			black: '#111111', // headings
			blue: '#017bff', // primary
			green: '#2CC582', // money
			red: '#FF4757', // error
		},
		extend: {},
	},
	plugins: [],
};
