/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	`./src/*.{html,js}`,
	`./src-cpr/*.{html,js}`
	],
	theme: {
    extend: {},
  },
  plugins: [
	require('daisyui'),
  ],
  daisyui: {
	themes: [
		{
			ddsnet: {
				"primary": "#134E4A", // teal-900
				"secondary": "#1E40AF", // blue-800
				"accent": "#EF4444", // red-500
				"neutral": "#020617", // slate-950
				"base-100": "#020617",
			}
		},
		"light",
		"dark",
		"cupcake",
		"bumblebee",
		"emerald",
		"corporate",
		"synthwave",
		"retro",
		"cyberpunk",
		"valentine",
		"halloween",
		"garden",
		"forest",
		"aqua",
		"lofi",
		"pastel",
		"fantasy",
		"wireframe",
		"black",
		"luxury",
		"dracula",
		"cmyk",
		"autumn",
		"business",
		"acid",
		"lemonade",
		"night",
		"coffee",
		"winter",
		"dim",
		"nord",
		"sunset",
		],
  },
}

