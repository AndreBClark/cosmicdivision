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

var _typographyBreakpointConstants = require("typography-breakpoint-constants")

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    }
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
        })
    } else {
        obj[key] = value
    }
    return obj
}

const typography = new Typography({
        title: "CosmicDivision",
        baseLineHeight: 1.6,
        headerFontFamily: [theme.fontFamily.heading],
        bodyFontFamily: theme.fontFamily.sans,
        bodyColor: `white`,
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
    })
    // Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
    typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale