import { PageHero, Section, Card, Tag } from "@/components/UI";

export const metadata = { title: "Blog | Akshath Karthik" };

const POSTS = [
  {
    title: "Artificial Intelligence in Healthcare",
    excerpt: "How machine learning is beginning to reshape diagnosis, treatment planning, and patient care.",
    tag: "Technology",
  },
  {
    title: "The Future of Cardiology",
    excerpt: "Emerging tools and techniques that are changing how cardiovascular disease is detected and treated.",
    tag: "Medicine",
  },
  {
    title: "Understanding Alzheimer's Disease",
    excerpt: "A look at the biology of Alzheimer's disease and the current state of research toward treatment.",
    tag: "Research",
  },
  {
    title: "How Medical Imaging Works",
    excerpt: "An overview of X-ray, CT, MRI, and ultrasound &mdash; and how each reveals the body in a different way.",
    tag: "Medicine",
  },
  {
    title: "Life as a Healthcare Academy Student",
    excerpt: "Reflections on coursework, clinical exposure, and what the program is really like day to day.",
    tag: "Personal",
  },
];

export default function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Blog"
        description="Monthly articles on medicine, research, and the healthcare journey."
      />

      <Section eyebrow="Articles" title="Monthly Articles">
        <div className="grid gap-5 sm:grid-cols-2">
          {POSTS.map((p) => (
            <Card key={p.title}>
              <Tag>{p.tag}</Tag>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{p.title}</h3>
              <p
                className="mt-2 text-sm leading-relaxed text-muted"
                dangerouslySetInnerHTML={{ __html: p.excerpt }}
              />
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.1em] text-muted">
                Coming soon
              </p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
