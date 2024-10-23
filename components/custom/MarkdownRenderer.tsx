// components/MarkdownRenderer.tsx
import React from 'react';
import { marked } from 'marked';

interface MarkdownRendererProps {
    content: string;
}

export default function MarkdownRenderer({ content }:MarkdownRendererProps){
    // Convert Markdown to HTML
    const getMarkdownHtml = (markdown: string) => {
        return marked(markdown);
    };

    return (
        <div dangerouslySetInnerHTML={{ __html: getMarkdownHtml(content) }} />
    );
};