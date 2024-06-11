/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./App.{js,jsx,ts,tsx}",
        "./app/**/**/*.{js,jsx,ts,tsx}",
        "./components/**/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "gray-light": "#DAE7EE",
                "primary": "#0C2074",
                "secondary": "#008080",
                "secondary-light": "#86D2ED",
            }
        },
    },
    plugins: [],
}
