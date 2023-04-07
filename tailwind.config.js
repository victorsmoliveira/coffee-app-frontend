/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false,
    theme: {
        extend: {
            backgroundColor: {
                'dark-brown': '#4F3621',
                'light-brown': '#935722'
            },
            gradientColorStops: {
                'dark-brown': '#4F3621',
                'light-brown': '#935722'
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};