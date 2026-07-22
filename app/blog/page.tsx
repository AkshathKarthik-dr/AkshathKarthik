import Link from "next/link";
import { PageHero, Section, Card, Tag } from "@/components/UI";
import { getAllPosts } from "@/lib/blog";

export const metadata = { title: "Blog | Akshath Karthik" };

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function Blog() {
  const posts = getAllPosts();

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Blog"
        description="Articles on medicine, research, and the healthcare journey."
      />

      <Section eyebrow="Articles" title="All Posts">
        {posts.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border p-6 text-sm text-muted">
            No posts yet &mdash; the first article is coming soon.
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2">
            {posts.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="focus-ring block">
                <Card className="h-full">
                  <Tag>{p.tag}</Tag>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{p.title}</h3>
                  {p.excerpt && (
                    <p className="mt-2 text-sm leading-relaxed text-muted">{p.excerpt}</p>
                  )}
                  {p.date && (
                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.1em] text-muted">
                      {formatDate(p.date)}
                    </p>
                  )}
                </Card>
              </Link>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
