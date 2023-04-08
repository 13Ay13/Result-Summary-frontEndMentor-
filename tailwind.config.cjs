/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				accent: '#c8c7ff',
			},
			screens: {
				md: '700px',
			},
			gridTemplateColumns: {
				// 2: 'repeat(2, minmax(30rem, 65%))',
			},
		},
	},
	plugins: [require('@tailwindcss/container-queries')],
}
