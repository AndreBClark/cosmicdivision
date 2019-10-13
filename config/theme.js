import { lighten } from "polished"

const colors = {
    primary: "#26ffba", // Color for buttons or links
    primaryLight: lighten(0.1, "#26ffba"),
    bg: "#121212", // Background color
    grey: {
        ultraLight: "#4D4D4D",
        light: "#343434",
        default: "#282828",
        dark: "#1D1D1D",
    },
    overlay: {
        low: "rgba(255,255,255,.05)",
        middle: "rgba(255,255,255,.1)",
        high: "rgba(255,255,255,.2)",
    },
    white: "white",
}

const transitions = {
    normal: "0.5s",
}

const fontSize = {
    small: "0.9rem",
}

const fontFamily = {
    mono: `'Fira Mono'`,
    serif: `'Bitter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', serif`,
    sans: `'Fira Sans', 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
    heading: `'Orbitron'`,
    headingCase: `capitalize`,
    headingWeight: `600`,
    logoCase: 'uppercase'
}

const breakpoints = {
    tablet: "1200px",
    phone: "600px",
}

const theme = {
    colors,
    transitions,
    fontSize,
    breakpoints,
    fontFamily,
    radius: `6px`,
    spacer: '0.5rem',
    maxWidth: `1280px`,
    baseFontSize: "calc(16px + (24 - 14) * ((100vw - 300px) / (1600 - 300)))",
}

export default theme