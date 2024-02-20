import { z, defineCollection } from "astro:content";

const technologyCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    url: z.string().optional(),
  }),
});

export const collections = {
  technology: technologyCollection,
};
