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
		},
	},
	plugins: [require('@tailwindcss/container-queries')],
}
