import React from 'react';
import Link from "next/link";

export interface BlogCardProps {
    title: string;
    description: string;
    coverImage: string;
    publishedAt: string;
    tags: string[];
    href: string;
}

export default function BlogCard({title, description, coverImage, publishedAt, href, tags,}:BlogCardProps): JSX.Element {
    return (
        <Link href={href} className="group flex flex-col p-4 gap-4">
            <div className="w-full aspect-video overflow-hidden">
                <div className="w-full aspect-video group-hover:scale-110 transition-all duration-300 ease-linear bg-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${coverImage})`}}></div>
            </div>
            <div className="">
                <p className="text-sm">{publishedAt}</p>
            </div>
            <div className="">
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                    {title}
                </h3>
                <p className="leading-7 [&:not(:first-child)]:mt-4 line-clamp-3">
                    {description}
                </p>
            </div>
            <div className="flex flex-wrap justify-start items-center gap-4">
                {tags.map(tag => (
                    <p key={tag} className="inline-block ">{tag}</p>
                ))}
            </div>
        </Link>
    );
}