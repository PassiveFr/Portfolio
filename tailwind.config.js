/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html'],
    darkMode: 'class', // Enable dark mode using a class
    theme: {
        extend: {
            colors: {
                primary: '#4F46E5', // Indigo
                secondary: '#EC4899', // Pink
                background: '#F3F4F6', // Light Gray
                darkBackground: '#1F2937', // Dark Gray
                darkPrimary: '#6366F1', // Lighter Indigo for dark mode
                darkSecondary: '#F472B6', // Lighter Pink for dark mode
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}