module.exports = {
    plugins: [
        require('autoprefixer'),
        require('tailwindcss'),
        require('tailwindcss/nesting')('postcss-nesting'),
        require('cssnano')({
            preset: 'default',
            discardComments: {
                removeAll: true,
            },
            autoprefixer: true,
            reduceIdents: true,
            mergeIdents: true,
            discardUnused: true,
            
        })
    ]
}