import { defineCollection, defineConfig } from "@content-collections/core";
import { z } from "zod";
var personalNotes = defineCollection({
  name: "personalNotes",
  directory: "src/content/notes",
  include: "**/*.md",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    readTime: z.string().optional(),
    order: z.number()
  }),
  transform: (document) => {
    return {
      ...document,
      slug: document._meta.fileName.replace(/\.md$/, "")
    };
  }
});
var content_collections_default = defineConfig({
  collections: [personalNotes]
});
export {
  content_collections_default as default
};
