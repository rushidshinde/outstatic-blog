import { OstDocument } from "outstatic";

export type Post = {
    tags: { value: string; label: string }[]
    metaTitle: string
    metaDescription: string
    category: string
    canonicalUrl: string
} & OstDocument;


