import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: ${{ secrets.TINA_PUBLIC_CLIENT_ID }}, // Get this from tina.io
  token: ${{ secrets.TINA_TOKEN }}, // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        format: 'md',
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            label: 'Tags',
            name: 'tags',
            type: 'string',
            list: true,
          },
          {
            label: 'Categories',
            name: 'categories',
            type: 'string',
            list: true,
          },
          {
            label: 'AuthorBox',
            name: 'authorBox',
            type: 'boolean',
          }
        ],
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
            isTitle: true,
            required: true,
          },
          {
            type: 'rich-text',
            label: 'Body of post',
            name: 'body',
            isBody: true,
          },
        ]
      },
      {
        name: "about",
        label: "About",
        format: "md",
        path: "content/about",
        fields:[
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          }
        ]
      }
    ],
  },
});
