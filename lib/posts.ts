import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  contentHtml: string;
  date: string;
  readingTime: string;
  author: string;
}

const postsDirectory = path.join(process.cwd(), "content/posts");

function getPostFiles(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".md"));
}

async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html, { sanitize: false }).process(markdown);
  return result.toString();
}

export async function getPostBySlug(
  slug: string
): Promise<BlogPost | undefined> {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) return undefined;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const contentHtml = await markdownToHtml(content);

  return {
    slug,
    title: data.title,
    excerpt: data.excerpt,
    content: content.trim(),
    contentHtml,
    date: data.date,
    readingTime: data.readingTime,
    author: data.author,
  };
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const files = getPostFiles();

  const posts = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.md$/, "");
      return getPostBySlug(slug);
    })
  );

  return posts
    .filter((post): post is BlogPost => post !== undefined)
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}
