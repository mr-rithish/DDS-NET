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
			"neutral": "#FFFFFF", // white
			"base-100": "#020617", // slate-950
			"info": "#d946ef",
			"success": "#00ff00",
			"warning": "#eab308",
			"error": "#ff0000",
			"--rounded-box": ".375rem", // border radius rounded-box utility class, used in card and other large boxes
       		"--rounded-btn": "0.3rem", // border radius rounded-btn utility class, used in buttons and similar element
        	"--rounded-badge": ".125rem", // border radius rounded-badge utility class, used in badges and similar
    		"--animation-btn": "0.25s", // duration of animation when you click on button
        	"--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
        	"--btn-focus-scale": "0.95", // scale transform of button when you focus on it
        	"--border-btn": "1px", // border width of buttons
        	"--tab-border": "1px", // border width of tabs
        	"--tab-radius": "0.125rem", // border radius of tabs
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

