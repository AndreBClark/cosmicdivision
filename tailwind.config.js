const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
    theme: {
        extend: {
            spacing: {
                '72': '18rem',
                '84': '21rem',
                '96': '24rem',
                '108': '27rem',
                '120': '30rem'
            },
            colors: {
                primary: '#26ffba',
                gray: {
                    50: colors.gray[50],
            fontFamily: {
                'mono': `Fira Mono`,
                'sans': [
                    '"Fira Sans"',
                    '"Open Sans"',
                    ...defaultTheme.fontFamily.sans
                ],
                'heading': 'Orbitron',
            },
            fontSize: {
                "7xl": "5rem",
                "8xl": "6rem",
                "9xl": "7rem",
                "10xl": "8rem"
            },
        }
    },
    variants: {},
    plugins: []
}