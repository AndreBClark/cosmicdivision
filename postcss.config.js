module.exports = {
    plugins: [
        require('autoprefixer'),
        require('tailwindcss'),
        require('tailwindcss/nesting')('postcss-nesting'),
    ]
}