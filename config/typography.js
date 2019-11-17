import Typography from "typography"
import theme from "./theme"
var _extends =
    Object.assign ||
    function(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i]
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key]
                }
            }
        }
        return target
    }

var _grayPercentage = require("gray-percentage")

var _grayPercentage2 = _interopRequireDefault(_grayPercentage)

// var _typographyBreakpointConstants = require("typography-breakpoint-constants")

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    }
}

const typography = new Typography({
        title: "CosmicDivision",
        baseLineHeight: 1.6,
        headerFontFamily: [theme.fontFamily.heading],
        bodyFontFamily: theme.fontFamily.sans.split(','),
        bodyColor: theme.colors.white,
        headerWeight: 500,
        headerTextTransform: theme.fontFamily.headingCase,
        headerColor: theme.colors.primary,
        headerLineHeight: 1.3,
        bodyWeight: 300,
        boldWeight: 700,
        includeNormalize: false,
        googleFonts: [{
                name: "Orbitron",
                styles: ["700"],
            },
            {
                name: "Fira sans",
                styles: ["400", "700"],
            },
        ],
        overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
            html: {
                fontSize: theme.baseFontSize
            },
            a: {
                color: theme.colors.primary,
                textDecoration: "none",
            },
            "a:hover": {
                textDecoration: "initial",
                color: theme.colors.primary,
                cursor: "pointer",
            },
            blockquote: _extends({}, scale(1 / 5), {
                color: (0, _grayPercentage2.default)(30),
                paddingLeft: rhythm(3 / 4),
                marginLeft: 0,
                marginRight: 0,
                borderLeft: rhythm(1 / 4) + " solid " + (0, _grayPercentage2.default)(13),
            }),
            h1: {
                TextTransform: theme.fontFamily.headingCase,
            },
            "h2,h3,h4,h5,h6": {
                TextTransform: theme.fontFamily.headingCase,
            },
            "h1,h2,h3,h4,h5,h6,button": {
                letterSpacing: theme.tracking
            },
            e: _extends({}, scale(-1 / 5)),
        }),
    })
    // Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
    typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale