module.exports = {
    siteMetadata: {
        // edit below
        title: `Cosmic Division`,
        author: `Andre Clark`,
        description: `A personal blog with styled components, TinaCMS`,
        siteUrl: `https://cosmicdivision.dev`,
        social: {
            github: `AndreBClark`,
        },
    },
    plugins: [{
            resolve: `gatsby-plugin-sass`,
            options: {
                postCssPlugins: [
                    require("tailwindcss"),
                    require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
                ],
            }
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
        },
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
                    `gatsby-remark-responsive-iframe`,
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
    ],
}