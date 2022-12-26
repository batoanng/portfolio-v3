import { z } from 'zod';

export const ZShortenUrl = z.object({
    code: z.string(),
    short_link: z.string(),
    full_short_link: z.string(),
    short_link2: z.string(),
    full_short_link2: z.string(),
    short_link3: z.string().optional(),
    full_short_link3: z.string().optional(),
    share_link: z.string(),
    full_share_link: z.string(),
    original_link: z.string()
});

export type ShortenUrl = z.infer<typeof ZShortenUrl>;

export const ZShortenUrlPayload = z.object({
    url: z.string()
});

export type ShortenUrlPayload = z.infer<typeof ZShortenUrlPayload>;

export const ZShortenUrlResponse = z.object({
    ok: z.boolean(),
    result: ZShortenUrl
});

export type ShortenUrlResponse = z.infer<typeof ZShortenUrlResponse>;
