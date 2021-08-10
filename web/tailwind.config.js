const { fontFamily } = require('tailwindcss/defaultTheme');
const sea = require('./colorThemes/sea.js');

module.exports = {
    purge: {
        content: ['./web/src/**/*.jsx'],
        css: ['./web/src/**/*.css']
    },
    theme: {
        fontFamily: {
            mono: [`Fira Code`, ...fontFamily.mono],
            sans: ['"Fira Sans"', '"Open Sans"', ...fontFamily.sans],
            heading: ['Orbitron'],
        },
        palette: sea,
        extend: {
            colors: theme => ({
                primary: theme('palette.uno'),
                secondary: theme('palette.duo'),
                neutral: theme('palette.deep'),
                accent: theme('palette.lagoon')
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
                            color: null,
                            backgroundColor: null,
                        },
                        a: {
                            color: theme('colors.secondary.100'),
                            textDecoration: 'underline',
                            hover: {
                                backgroundColor: theme('colors.secondary.100'),
                                color: theme('colors.primary.100'),
                            },
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
    variants: {
        'scrollbar': ['rounded']
    },
    plugins: [
        require('tailwind-scrollbar'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        // require('@mertasan/tailwindcss-variables')
    ],
}