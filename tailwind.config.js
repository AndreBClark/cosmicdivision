const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
    purge: [
        './src/**/*.jsx',
    ],
    theme: {
        flexShrink: {
            '0': 0,
            DEFAULT: 1,
            '2': 2,
        },
        fontFamily: {
            'mono': [
                `Fira Code`,
                ...fontFamily.mono
            ],
            'sans': [
                '"Fira Sans"',
                '"Open Sans"',
                ...fontFamily.sans
            ],
            'heading': [
                'Orbitron',
            ]
        },
        extend: {
            spacing: {
                '72': '18rem',
                '84': '21rem',
                '96': '24rem',
                '108': '27rem',
                '120': '30rem',
            },
            height: {
                'screen-50': '50vh',
                'screen-75': '75vh',
                'screen-80': '80vh'
            },
            maxHeight: theme => theme('height'),
            minHeight: theme => theme('height'),
            zIndex: {
                '-1': '-1'
            },
            colors: {
                sea: {
                    uno: {
                        100: "#d6e9ff",
                        200: "#88b4e7",
                        300: "#5d8cc0",
                        400: "#586f89",
                        500: "#444c55",
                    },
                    duo: {
                        DEFAULT: "#52FFC5",
                        100: "#34febb",
                        200: "#32ae85",
                        300: "#42675a",
                    },
                    deep: {
                        500: "#344455",
                        600: "#303f4f",
                        700: "#232d39",
                        DEFAULT: "#1d262f"
                    },
                },
                old: {
                    primary: '#26ffba',
                    gray: {
                        50: colors.gray[50],
                        100: colors.gray[100],
                        200: colors.gray[200],
                        400: "#4D4D4D",
                        500: "#343434",
                        DEFAULT: "#282828",
                        700: "#1D1D1D",
                        800: "#121212"
                    },
                    overlay: {
                        low: "rgba(255,255,255,.05)",
                        middle: "rgba(255,255,255,.1)",
                        high: "rgba(255,255,255,.2)",
                    },
                },
            },
            flexGrow: {
                '1': '1'
            },
            fontSize: {
                "7xl": "5rem",
                "8xl": "6rem",
                "9xl": "7rem",
                "10xl": "8rem"
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.gray[200]'),
                        h1: {
                            color: theme('colors.gray[200]'),
                            fontFamily: theme('fontFamily.heading'),
                            fontWeight: 'bolder',
                        },
                        h2: {
                            color: theme('colors.gray[200]'),
                            fontFamily: theme('fontFamily.heading'),
                            fontWeight: 'bold'
                        },
                        h3: {
                            color: theme('colors.gray[200]'),
                            fontFamily: theme('fontFamily.heading'),
                            fontWeight: 'bold'
                        },
                        code: {
                            color: '',
                        },
                        'code::before': {
                            content: 'initial',
                        },
                        'code::after': {
                            content: 'initial',
                        },
                        pre: {
                            color: '',
                            backgroundColor: '',
                        },
                        a: {
                            color: theme('colors.primary'),
                            textDecoration: 'underline'
                        },
                        strong: {
                            color: theme('colors.primary'),
                            fontWeight: 'bold'
                        }

                    },
                }
            }),
        }
    },
    variants: {},
    plugins: [
        require('@tailwindcss/typography')
    ]
}