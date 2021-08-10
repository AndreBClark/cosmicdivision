const tailwind = require('./tailwind.config.js');

const { palette } = tailwind.theme;

module.exports = {
    siteMetadata: {
        title: `Cosmic Division`,
        author: `Andre Clark`,
        authorBio: {
            author: `Andre Clark`,
            location: `Spokane, Washington`,
        },
        description: `A personal blog with tailwindcss`,
        siteUrl: `https://cosmicdivision.dev`,
        social: {
            github: `AndreBClark`,
        },
    }, 
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/blog`,
                name: `blog`,
            },
        },
        {
            resolve: `gatsby-source-sanity`,
            options: {
                projectId: `vij17ctr`,
                dataset: `production`,
                // a token with read permissions is required
                // if you have a private dataset
                // token: process.env.SANITY_TOKEN,
                // If the Sanity GraphQL API was deployed using `--tag <name>`,
                // use `graphqlTag` to specify the tag name. Defaults to `default`.
                graphqlTag: 'default',
            },
        },
          // ...
        `gatsby-plugin-preact`,
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`,
        'gatsby-plugin-postcss',
        `gatsby-plugin-emotion`,
        `gatsby-plugin-netlify`,
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                defaults: {
                formats: [`auto`, 'avif', 'webp',`png`],
                    placeholder: `blurred`,
                    quality: 75,
                    breakpoints: [300, 750, 1080, 1366, 1920],
                    backgroundColor: 'transparent',
                    tracedSVGOptions: {
                        blackOnWhite: false,
                        backgroundColor: 'transparent'
                    },
                    blurredOptions: {
                        backgroundColor: 'transparent'
                    },
                },
            },
        },
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: "gatsby-plugin-transition-link",
            options: {
                layout: require.resolve(`./src/components/Base.jsx`)
            }
        },
        {
            resolve: "gatsby-plugin-react-svg",
                options: {
                    rule: {
                        include: /\.svg$/
                    },
                },
        },
        // {
        //     resolve: "gatsby-plugin-google-tagmanager",
        //     options: {
        //         id: "GTM-KMKSS6R",
        //         includeInDevelopment: false,
        //         defaultDataLayer: { platform: "gatsby" },
        //     }
        // },
        {
            resolve: 'gatsby-plugin-module-resolver',
            options: {
                root: './src', // <- will be used as a root dir
                aliases: {
                    hooks: './hooks',
                    components: './components',
                    images: './images',
                    pages: './pages',
                    lib: './lib',
                    styles: './styles',
                    utils: './utils',
                    static: {
                        root: './public', // <- will used as this alias' root dir
                        alias: './static' // <- will become ./public/static
                    }
                }
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Cosmic Division Jamstack Blog`,
                short_name: `CosmicDiv`,
                start_url: `/`,
                background_color: palette.deep[100],
                theme_color: palette.duo[100],
                display: `standalone`,
                icon: `src/images/icons/logo.svg`,
            },
        },
    ],
}