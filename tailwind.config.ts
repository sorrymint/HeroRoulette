import type { Config } from "tailwindcss"


/*!*TODO I want to use these colors I don't see them on the site!*/
/*:root {*/
/*    --primary-color: #ffe400;*/
/*    --secondary-color: #ffed88;*/
/*    --heading-color: #ffffff;*/
/*    --card-color: #782b2e;*/
/*    --background-color: #0088cc;*/
/*    --text-color: #ffed88;*/
/*}*/

export default {
    content: ["./src/**/*.{html,js,svelte,ts}", "*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                primary: "#ffe400",
                secondary: "#ffed88",
                background: "#782b2e",
                foreground: "#ffed88",
                card: "#0088cc",
                "card-foreground": "#ffffff",
                heading: "#ffffff", // white - for headings
            },
        },
    },
    plugins: [],
} satisfies Config
