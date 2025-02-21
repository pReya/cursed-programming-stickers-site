import { z, defineCollection } from "astro:content";
import { glob } from 'astro/loaders';

const technologyCollection = defineCollection({
  loader: glob({ pattern: '*.{yml,yaml}', base: "./src/content/technology" }),
  schema: z.object({
    name: z.string(),
    url: z.string().optional(),
  }),
});

export const collections = {
  technology: technologyCollection,
};
