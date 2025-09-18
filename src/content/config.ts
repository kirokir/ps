import { defineCollection, z } from "astro:content";

// 1. Define the 'blog' collection schema
const blogCollection = defineCollection({
  type: "content",
  schema: z
    .object({
      title: z.string(),
      date: z.date(),
      excerpt: z.string(),
      featured_image: z.string(),
      // Allow any other fields without validation
    })
    .passthrough(),
});

// 2. Define the 'portfolio' collection schema
const portfolioCollection = defineCollection({
  type: "content",
  schema: z
    .object({
      title: z.string(),
      date: z.date(),
      cover_image: z.string(),
      gallery: z
        .array(
          z.object({
            image: z.string(),
            alt: z.string(),
          })
        )
        .optional(),
      description: z.string().optional(),
    })
    .passthrough(),
});

// 3. Define the 'home' collection schema for the single home.md file
const homeCollection = defineCollection({
  type: "content",
  schema: z
    .object({
      title: z.string(),
      hero_title: z.string(),
      hero_subtitle: z.string(),
    })
    .passthrough(),
});

// 4. Export a `collections` object to register ONLY the collections we use
export const collections = {
  blog: blogCollection,
  portfolio: portfolioCollection,
  home: homeCollection,
};
