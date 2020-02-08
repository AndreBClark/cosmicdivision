const tint = require('polished/lib/color/tint');
const shade = require('polished/lib/color/shade');
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
                    900: `${shade(.7, "#121212")}`,
                    800: `${shade(.5, "#121212")}`,
                    700: `${shade(.4, "#121212")}`,
                    600: `${shade(.3, "#121212")}`,
                    500: '#121212',
                    400: `${tint(0.1, "#121212")}`,
                    300: `${tint(0.2, "#121212")}`,
                    200: `${tint(0.3, "#121212")}`,
                    100: `${tint(0.4, "#121212")}`
                }
            }
        }
    },
    variants: {},
    plugins: []
}