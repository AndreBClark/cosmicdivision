module.exports = {
    siteMetadata: {
        // edit below
        title: `Cosmic Division`,
        author: `Andre Clark`,
        description: `A personal blog with styled components, TinaCMS`,
        siteUrl: `https://cosmicdivision.dev`,
        social: {
            twitter: ``,
            github: `AndreBClark`,
        },
    },
    plugins: [{
            resolve: "gatsby-plugin-tinacms",
            options: {
                plugins: ["gatsby-tinacms-git", "gatsby-tinacms-remark"],
                sidebar: {
                    hidden: process.env.NODE_ENV === "production",
                },
            },
        },
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {
                displayName: true,
            },
        },
        `gatsby-plugin-preact`,
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`,
        `gatsby-background-image`,

        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/blog`,
                name: `blog`,
            },
        },
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
        }
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [{
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                        },
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`,
                        },
                    },
                    {
                        resolve: `gatsby-remark-vscode`,
                        options: {
                            colorTheme: "Firefox Quantum Dark",
                            injectStyles: true,
                            extensions: [{
                                identifier: "beastdestroyer.firefox-quantum-themes",
                                version: "1.1.6",
                            }, ],
                        },
                    },
                    {
                        resolve: "gatsby-plugin-react-svg",
                        options: {
                            rule: {
                                include: /\.svg$/
                            },
                        },
                    },
                    `gatsby-remark-smartypants`,
                ],
            },
        },
        {
            resolve: "gatsby-plugin-google-tagmanager",
            options: {
                id: "GTM-KMKSS6R",
                includeInDevelopment: false,
                defaultDataLayer: { platform: "gatsby" },
            }
        },

        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Cosmic Division Jamstack Blog`,
                short_name: `CosmicDiv`,
                start_url: `/`,
                background_color: `#121212`,
                theme_color: `#26ffba`,
                display: `standalone`,
                icon: `src/images/logo.svg`,
            },
        },
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `config/typography`,
            },
        },
    ],
}