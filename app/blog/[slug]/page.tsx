import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero, Tag } from "@/components/UI";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Blog | Akshath Karthik" };
  const title = `${post.title} | Akshath Karthik`;
  return {
    title,
    description: post.excerpt,
    openGraph: {
      title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary",
      title,
      description: post.excerpt,
    },
  };
}

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post || post.draft) notFound();

  return (
    <>
      <PageHero eyebrow="Blog" title={post.title} />
      <article className="mx-auto max-w-3xl px-5 py-14">
        <div className="flex items-center gap-3">
          <Tag>{post.tag}</Tag>
          {post.date && (
            <span className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
              {formatDate(post.date)}
            </span>
          )}
        </div>

        <div
          className="prose-content mt-8 text-[15px] leading-relaxed text-foreground"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        <div className="mt-12 border-t border-border pt-6">
          <Link href="/blog" className="focus-ring text-sm font-semibold text-accent hover:underline">
            &larr; Back to all posts
          </Link>
        </div>
      </article>
    </>
  );
}
