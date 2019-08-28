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
    return obj && obj.__esModule ? obj : { default: obj }
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
    title: "Fira-console",
    baseFontSize: "21px",
    baseLineHeight: 1.38,
    scaleRatio: 1.5,
    googleFonts: [{
            name: "Fira Sans",
            styles: ["700"],
        },
        {
            name: "Fira Mono",
            styles: ["400", "700"],
        },
    ],
    headerFontFamily: ["Fira Sans", "sans-serif"],
    bodyFontFamily: ["Fira Mono", "georgia", "sans-serif"],
    bodyColor: `white`,
    headerWeight: 700,
    headerColor: "#26ffba",
    bodyWeight: 400,
    boldWeight: 700,
    overrideStyles: function overrideStyles(_ref, options) {
        var adjustFontSizeTo = _ref.adjustFontSizeTo,
            scale = _ref.scale,
            rhythm = _ref.rhythm

        var styles = _defineProperty({
                a: {
                    color: "#26ffba",
                    textDecoration: "none",
                },
                "a:hover": {
                    textDecoration: "initial",
                    color: "#26ffba",
                    filter: "brightness(2)",
                    opacity: ""
                },
                blockquote: _extends({}, scale(1 / 5), {
                    color: (0, _grayPercentage2.default)(30),
                    paddingLeft: rhythm(3 / 4),
                    marginLeft: 0,
                    marginRight: 0,
                    borderLeft: rhythm(1 / 4) + " solid " + (0, _grayPercentage2.default)(13),
                }),
                "h3,h4,h5,h6": {
                    marginBottom: rhythm(1 / 2),
                },
                table: _extends({}, scale(-1 / 5)),
            },
            _typographyBreakpointConstants.TABLET_MEDIA_QUERY, {
                blockquote: {
                    marginLeft: rhythm(-3 / 4),
                    marginRight: 0,
                    paddingLeft: rhythm(1 / 2),
                },
            }
        )

        return styles
    },
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
    typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale