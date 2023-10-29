import type { MarkdownInstance } from "astro";

export type Post = {
  layout: string;
  title: string;
  link: string;
  author: string;
  description: string;
  image: {
    url: string;
    alt: string;
  };
  pubDate: string;
  tags: string[];
};

export type PostsGlob = MarkdownInstance<Post>[];
