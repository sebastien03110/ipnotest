import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['Fiscalité', 'Succession', 'Gestion patrimoniale', 'Immobilier']),
    date: z.string(),
    author: z.string(),
    source: z.string().optional(),
    featured: z.boolean().optional().default(false),
  }),
});

export const collections = {
  articles,
};