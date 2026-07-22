import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  tag: string;
  excerpt: string;
  draft: boolean;
};

export type BlogPostWithContent = BlogPost & { html: string };

function readSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllPosts(): BlogPost[] {
  const posts = readSlugs().map((slug) => {
    const raw = fs.readFileSync(path.join(BLOG_DIR, `${slug}.md`), "utf8");
    const { data } = matter(raw);
    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? "",
      tag: data.tag ?? "General",
      excerpt: data.excerpt ?? "",
      draft: Boolean(data.draft),
    };
  });

  return posts
    .filter((p) => !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPostWithContent | null {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const html = marked.parse(content, { async: false }) as string;

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    tag: data.tag ?? "General",
    excerpt: data.excerpt ?? "",
    draft: Boolean(data.draft),
    html,
  };
}

export function getAllSlugs(): string[] {
  return readSlugs();
}
