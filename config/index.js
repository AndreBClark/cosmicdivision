module.exports = {
    pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

    siteTitle: "Cosmic Division", // Navigation and Site Title
    siteTitleAlt: "Cosmic Division - Jamstack Blog", // Alternative Site title for SEO
    siteTitleManifest: "MinimalBlog",
    siteUrl: "https://cosmicdivision.dev", // Domain of your site. No trailing slash!
    siteLanguage: "en", // Language Tag on <html> element
    siteHeadline: "Writing and publishing content", // Headline for schema.org JSONLD
    siteBanner: "../src/images/orbital-bw.jpg", // Your image for og:image tag. You can find it in the /static folder
    favicon: "src/favicon.png", // Your image for favicons. You can find it in the /src folder
    siteDescription: "", // Your site description
    author: "Andre Clark", // Author for schemaORGJSONLD
    siteLogo: "../src/images/logo.svg", // Image for schemaORGJSONLD

    // siteFBAppID: '123456789', // Facebook App ID - Optional
    ogSiteName: "CosmicDivison", // Facebook Site Name - Optional
    ogLanguage: "en_US", // Facebook Language

    // Manifest and Progress color
    // See: https://developers.google.com/web/fundamentals/web-app-manifest/
    themeColor: "#26ffba",
    backgroundColor: "#121212",
}