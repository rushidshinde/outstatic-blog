import React from 'react';
import {getDocumentSlugs, load} from "outstatic/server";
import MarkdownRenderer from "@/components/custom/MarkdownRenderer";
import {Post} from "@/lib/types";
import {notFound} from "next/navigation";
import {absoluteUrl, canonicalUrL} from "@/lib/utils";
import {Metadata} from "next";
import {CalendarDays} from "lucide-react";
import DateFormatter from "@/components/custom/DateFormatter";

interface Params {
    params: {
        slug: string;
    }
}



export default async function SingleBlog(params: Params) {
    const post = await getData(params);
    if (!post) return null;
    return (
        <div>
            <section className="relative w-full bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${post.coverImage})`}}>
                <div className="absolute w-full h-full inset-0 bg-black/50"></div>
                <div className="container">
                    <div className="relative z-10 text-white w-full bg-cover bg-center bg-no-repeat min-h-[60vh] py-20 flex flex-col justify-center items-start 2xl:prose-2xl xl:prose-xl lg:prose-lg prose xs:prose-sm">
                        <h1 className="mb-4 text-white">{post.title}</h1>
                        <div className="flex justify-start items-center flex-wrap gap-5">
                            <div className="flex flex-wrap justify-start items-center gap-2">
                                <div className="w-10 aspect-square bg-cover bg-center bg-no-repeat rounded-full" style={{backgroundImage: `url(${post.author?.picture})`}}></div>
                                <p>{post.author?.name}</p>
                            </div>
                            <div className="flex flex-wrap justify-start items-center gap-2">
                                <CalendarDays /> <DateFormatter dateString={post.publishedAt}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-10">
                <div className="container">
                    <div className="w-full 2xl:prose-2xl xl:prose-xl lg:prose-lg prose xs:prose-sm min-w-full">
                        <MarkdownRenderer content={post.content}/>
                    </div>
                </div>
            </section>

        </div>
    );
}

export async function generateMetadata(params: Params): Promise<Metadata> {
    const post = await getData(params);

    if (!post) {
        return {};
    }
    return {
        title: post.metaTitle,
        description: post.metaDescription,
        openGraph: {
            title: post.metaTitle,
            description: post.metaDescription,
            type: "article",
            url: absoluteUrl(`/blog/${post.slug}`),
            images: [
                {
                    url: `/${post?.coverImage}`,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: post.metaTitle,
            description: post.metaDescription,
            images: [
                {
                    url: `/${post?.coverImage}`,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        alternates: {
            canonical: `${canonicalUrL(post.canonicalUrl, `/blog/${post.slug}`)}`
        },

    };
}

export async function generateStaticParams() {
    const posts = getDocumentSlugs("posts");
    return posts.map((slug) => ({ slug }));
}

async function getData({params}:Params) {
    const db = await load();
    const post =  await db
        .find<Post>(
            {
                collection: "posts",
                slug: params.slug,
                status: 'published',
            },
            [
                "title",
                "publishedAt",
                "slug",
                "author",
                "content",
                "coverImage",
                "tags",
                "metaTitle",
                "metaDescription",
                "category",
                "canonicalUrl"
            ]
        )
        .first();

    if(!post){
        notFound()
    }
    return post
}