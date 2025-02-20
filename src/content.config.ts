import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: '**.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.string(),
      draft: z.boolean(),
      cover: image().optional(),
      height: z.number().optional(),
      width: z.number().optional(),
    }),
});

export const collections = {
  blog: blogCollection,
};
