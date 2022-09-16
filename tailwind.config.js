/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			lg: { max: "992px" },
			md: { max: "768px" },
			sm: { max: "480px" },
		},
		container: {
			padding: "20px",
			center: true,
		},
		extend: {
			colors: {
				orange: "#FF7143",
				lightOrange: "rgba(255, 113, 67, 0.27);",
				shadowOrange: "rgba(255, 112, 59, 0.317827)",
				darkOrange: "#9F3919",
				purple: "#5454D4",
				blue: "#1D293F",
				dark: "#19191B",
				almostWhite: "#F8F8F8",
				grey: "#696871",
				anotherDark: "#1D293F",
			},
		},
	},
	plugins: [require("daisyui")],
}
