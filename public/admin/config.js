// This file exports the CMS configuration as a JavaScript object.

export default {
  backend: {
    name: 'test-repo',
  },
  media_library: {
    name: 'cloudinary',
    config: {
      cloud_name: 'dw4fmucml',
      api_key: '685338551245488',
    },
  },
  media_folder: "src/assets/images/uploads",
  public_folder: "/assets/images/uploads",
  collections: [
    {
      name: "home",
      label: "Home Page",
      files: [
        {
          label: "Home Page Content",
          name: "home",
          file: "src/content/home/home.md",
          fields: [
            { label: "Title", name: "title", widget: "string" },
            { label: "Hero Title", name: "hero_title", widget: "string" },
            { label: "Hero Subtitle", name: "hero_subtitle", widget: "text" },
          ],
        },
      ],
    },
    {
      name: "portfolio",
      label: "Portfolio",
      folder: "src/content/portfolio",
      create: true,
      slug: "{{slug}}",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        { label: "Date", name: "date", widget: "datetime" },
        { label: "Cover Image", name: "cover_image", widget: "image" },
        {
          label: "Gallery",
          name: "gallery",
          widget: "list",
          fields: [
            { label: "Image", name: "image", widget: "image" },
            { label: "Alt Text", name: "alt", widget: "string" },
          ],
        },
        { label: "Description", name: "description", widget: "markdown" },
      ],
    },
    {
      name: "blog",
      label: "Blog Posts",
      folder: "src/content/blog",
      create: true,
      slug: "{{slug}}",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        { label: "Date", name: "date", widget: "datetime" },
        { label: "Excerpt", name: "excerpt", widget: "text" },
        { label: "Featured Image", name: "featured_image", widget: "image" },
        { label: "Body", name: "body", widget: "markdown" },
      ],
    },
  ],
};