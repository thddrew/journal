import type { PostsGlob } from "@/types/posts";

export const getSortedPosts = (allPosts: PostsGlob) =>
  allPosts.sort(
    (a, b) =>
      new Date(b.frontmatter.pubDate).getTime() -
      new Date(a.frontmatter.pubDate).getTime()
  );
