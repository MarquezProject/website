const plugin = require("tailwindcss/plugin")
const _ = require("lodash");

const gradient = plugin(function({ addUtilities, e, theme, variants }) {
    const gradients = theme("gradients", {})
    const gradientVariants = variants("gradients", [])

    const utilities = _.map(gradients, ([start, end], name) => ({
        [`.bg-gradient-${e(name)}`]: {
            backgroundImage: `linear-gradient(to right, ${start}, ${end})`,
        },
    }))

    addUtilities(utilities, gradientVariants)
})


module.exports = {
    purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
    theme: {
        gradients: theme => ({
            primary: [theme("colors.primary"), theme("colors.secondary")],
        }),
        colors: {
            bg: "#191f26",
            bgalt: "#000",
            "color-default": "#f3f3f3",
            "color-1": "#ffffff",
            "color-2": "#454f5b",
            "color-3": "#71ddbf",
            "color-4": "#3e3e3e",
            primary: "#fff",
            secondary: "#f3f3f3",
            link: "#71ddbf",
            medium: "#cfd8dc",
            white: "#fff",
            black: "#000",
            transparent: "rgba(0,0,0,0)",
            error: "#f25522",
            success: "#fbb03b"
        },
        extend: {
            fontSize: {
                '7xl': '5rem'
            },
            spacing: {
                '1px': '1px',
                '2px': '2px'
            }
        },
    },
    variants: {},
    plugins: [require(`tailwind-theme-switcher`), gradient],
}


