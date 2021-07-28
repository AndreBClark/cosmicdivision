const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
    purge: ['./src/**/*.jsx'],
    theme: {
        fontFamily: {
            mono: [`Fira Code`, ...fontFamily.mono],
            sans: ['"Fira Sans"', '"Open Sans"', ...fontFamily.sans],
            heading: ['Orbitron'],
        },
        sea: {
            uno: {
                100: '#d6e9ff',
                200: '#88b4e7',
                300: '#5d8cc0',
                400: '#586f89',
                500: '#444c55',
            },
            duo: {
                100: '#34febb',
                200: '#32ae85',
                300: '#0aa370',
                400: '#42675a',
            },
            deep: {
                100: '#1d262f',
                200: '#303f4f',
                400: '#232d39',
            },
            lagoon: {
                100: '#ebf4ff',
                200: '#004a9e',
                300: '#34659d',
                400: '#7eb6f6',
            },
            kelp: {
                100: "#dafbf0",
                200: "#b5f7e1",
                300: "#91f3d2",
                400: "#6cefc3",
                500: "#47ebb4",
                600: "#39bc90",
                700: "#2b8d6c",
                800: "#1c5e48",
                900: "#0e2f24"
            },
            deepAlt: {
                100: "#d2d4d5",
                200: "#a5a8ac",
                300: "#777d82",
                400: "#4a5159",
                500: "#1d262f",
                600: "#171e26",
                700: "#11171c",
                800: "#0c0f13",
                900: "#060809"
            },
            lagoonAlt: {
                100: "#ccdbec",
                200: "#99b7d8",
                300: "#6692c5",
                400: "#336eb1",
                500: "#004a9e",
                600: "#003b7e",
                700: "#002c5f",
                800: "#001e3f",
                900: "#000f20"
            },
            foam: {
                100: "#f7fbff",
                200: "#eff6ff",
                300: "#e6f2ff",
                400: "#deedff",
                500: "#d6e9ff",
                600: "#abbacc",
                700: "#808c99",
                800: "#565d66",
                900: "#2b2f33"
            }
        },
        extend: {
            colors: theme=> ({
                primary: theme('sea.uno'),
                secondary: theme('sea.duo'),
                neutral: theme('sea.deep'),
                accent: theme('sea.lagoon')
            }),
            variables: theme => ({
                colors: theme('colors'),
            }),
            flexGrow: {
                1: '1',
            },
            flexShrink: {
                0: 0,
                DEFAULT: 1,
                2: 2,
            },
            fontSize: {
                '7xl': '5rem',
                '8xl': '6rem',
                '9xl': '7rem',
                '10xl': '8rem',
            },
            spacing: {
                72: '18rem',
                84: '21rem',
                96: '24rem',
                108: '27rem',
                120: '30rem',
            },
            height: {
                'screen-50': '50vh',
                'screen-75': '75vh',
                'screen-80': '80vh',
            },
            maxHeight: theme => theme('height'),
            minHeight: theme => theme('height'),
            zIndex: {
                '-1': '-1',
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.primary.100'),
                        h1: {
                            color: theme('colors.primary.100'),
                            fontFamily: theme('fontFamily.heading'),
                            fontWeight: 'black',
                        },
                        h2: {
                            color: theme('colors.primary.100'),
                            fontFamily: theme('fontFamily.heading'),
                            fontWeight: 'bold',
                        },
                        h3: {
                            color: theme('colors.primary.100'),
                            fontFamily: theme('fontFamily.heading'),
                            fontWeight: 'bold',
                        },
                        h4: {
                            color: theme('colors.primary.100'),
                            fontFamily: theme('fontFamily.heading'),
                            fontWeight: 'bold',
                        },
                        code: {
                            color: null,
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
                            textDecoration: 'underline',
                        },
                        strong: {
                            fontWeight: 'bold',
                            color: theme('colors.primary.100'),
                        },
                    },
                },
            }),
        },
    },
    plugins: [
        require('tailwindcss/nesting'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@mertasan/tailwindcss-variables')
    ],
}