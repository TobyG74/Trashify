/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        screens: {
            sm: "340px",
            md: "540px",
            lg: "768px",
            xl: "1180px",
        },
        extend: {
            colors: {
                primary: "#22c55e",
            },
        },
        container: {
            center: true,
            padding: {
                default: "12px",
                sm: "16px",
                md: "32px",
            },
        },
        fontFamily: {
            poppins: ["Poppins", "sans-serif"],
            bebas: ["Bebas Neue", "sans-serif"],
        },
        keyframes: {
            move: {
                "50%": { transform: "translateY(-1rem)" },
            },
            scaleup: {
                "0%": { transform: "scale(1)" },
                "50%": { transform: "scale(1.4)" },
                "100%": { transform: "scale(1)" },
            },
            ping: {
                "75%, 100%": { transform: "scale(2)", opacity: 0 },
            },
        },
        animation: {
            movingY: "move 3s ease-in-out infinite",
            scaling: "scaleup 10s linear infinite",
            pinging: "ping 3s cubic-bezier(0, 0.2, 1, 2) infinite",
        },
    },
    plugins: [],
};
