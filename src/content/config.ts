import { defineCollection, z } from 'astro:content';

export const collections = {
	experience: defineCollection({
		schema: z.object({
			role: z.string(),
			lapse: z.string(),
			company: z.string(),
			order: z.number(),
		}),
	}),
};
