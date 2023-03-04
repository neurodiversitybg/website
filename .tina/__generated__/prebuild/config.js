import { defineConfig as e } from "tinacms";
const t = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main", o = e({
  branch: t,
  clientId: "62658973-9624-43b3-bcbd-e8b5e084c18c",
  token: "8efdf537a4f95530ce255c6ee178acc5981aaf94",
  build: {
    outputFolder: "admin",
    publicFolder: "static"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static"
    }
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: !0,
            required: !0
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: !0
          },
          {
            label: "Tags",
            name: "tags",
            type: "string",
            list: !0
          },
          {
            label: "Categories",
            name: "categories",
            type: "string",
            list: !0
          },
          {
            label: "AuthorBox",
            name: "authorBox",
            type: "boolean"
          }
        ]
      },
      {
        name: "authors",
        label: "Authors",
        format: "md",
        path: "content/authors",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: !0,
            required: !0
          },
          {
            type: "rich-text",
            label: "Body of post",
            name: "body",
            isBody: !0
          }
        ]
      },
      {
        name: "about",
        label: "About",
        format: "md",
        path: "content/about",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: !0,
            required: !0
          }
        ]
      }
    ]
  }
});
export {
  o as default
};
