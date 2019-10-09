module.exports = {
    siteMetadata: {
        // edit below
        title: `Cosmic Division`,
        author: `Andre Clark`,
        description: `A starter personal blog with styled components, dark mode, and Netlify CMS.`,
        siteUrl: `https://gatsby-starter-blog-demo.netlify.com/`,
        social: {
            twitter: ``,
            github: `AndreBClark`,
        },
    },
    plugins: [
        `gatsby-plugin-netlify-cms`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-feed`,
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

                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`,
                ],
            },
        },
        // {
        //     resolve: `gatsby-plugin-google-analytics`,
        //     options: {
        //         // edit below
        //         // trackingId: `ADD YOUR TRACKING ID HERE`,
        //     },
        // },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Cosmic Division Jamstack Blog`,
                short_name: `CosmicDiv`,
                start_url: `/`,
                background_color: `#121212`,
                theme_color: `#26ffba`,
                display: `standalone`,
                // edit below
                icon: `static/logo.svg`,
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