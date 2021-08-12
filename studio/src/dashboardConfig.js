export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "document-list",
      title: "Posts",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              sites: [
                {
                  buildHookId: "611246262df5c735a4e95373",
                  title: "Blog Website",
                  name: "cosmicdivision",
                  apiId: "a982740a-b81c-48b1-bc72-cf2353550b30",
                },
              ],
            },
          },
          {
            title: 'gatsby',
            name: 'gatsby',
            options: {
              sites: [
                {
                  siteUrl: 'https://cosmicdivision-7783471328.gtsb.io/',
                }
              ]
            }
          }
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/AndreBClark/cosmicdivision",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://cosmicdivision.dev",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users" },
  ],
};
