const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
        './src/**/*.jsx',
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});
const cssnano = require('cssnano')('cssnano-advanced-preset');

module.exports = () => ({
    plugins: [
        require('precss'),
        require('tailwindcss'),
        ...process.env.NODE_ENV === 'production' ? [purgecss, cssnano] : []
    ]
})