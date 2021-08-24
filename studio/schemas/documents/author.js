export default {
  name: "author",
  type: "document",
  title: "Author",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description:
        "Some frontends will require a slug to be set to be able to show the person",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "image",
      type: "mainImage",
      title: "Image",
    },
    {
      name: "role",
      type: "string",
      title: "Role"
    },
    {
      name: "bio",
      type: "bioPortableText",
      title: "Biography",
    },
    {
      name: "socials",
      type: "socials",
      title: "Socials",
    },
    {
      name: "location",
      type: "string",
      title: "Location",
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "slug.current",
      media: "image",
    },
  },
};
