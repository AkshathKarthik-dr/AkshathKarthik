import { PageHero, Section, Card, Tag } from "@/components/UI";

export const metadata = { title: "Research | Akshath Karthik" };

const INTERESTS = ["Neuroscience", "Cardiology", "Medical AI", "Diagnostic Imaging", "Genomics"];

export default function Research() {
  return (
    <>
      <PageHero
        eyebrow="Research"
        title="Research"
        description="Interests, mentorship, and the reading and projects shaping a path toward physician-scientist work."
      />

      <Section eyebrow="Focus Areas" title="Research Interests">
        <div className="flex flex-wrap gap-2">
          {INTERESTS.map((i) => (
            <Tag key={i}>{i}</Tag>
          ))}
        </div>
      </Section>

      <Section eyebrow="Mentorship" title="Faculty Interests" className="bg-surface">
        <Card>
          <p className="text-[15px] leading-relaxed text-muted">
            List faculty members, labs, or professors whose research aligns with your
            interests, along with a short note on why their work is compelling to you.
          </p>
        </Card>
      </Section>

      <Section eyebrow="Reading" title="Current Reading">
        <Card>
          <p className="text-[15px] leading-relaxed text-muted">
            Add papers, textbooks, and articles you are currently reading, with brief
            takeaways for each.
          </p>
        </Card>
      </Section>

      <Section eyebrow="Roadmap" title="Future Projects" className="bg-surface">
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <h3 className="text-base font-semibold text-foreground">Planned Project 1</h3>
            <p className="mt-2 text-sm text-muted">Add a short description and target timeline.</p>
          </Card>
          <Card>
            <h3 className="text-base font-semibold text-foreground">Planned Project 2</h3>
            <p className="mt-2 text-sm text-muted">Add a short description and target timeline.</p>
          </Card>
        </div>
      </Section>

      <Section eyebrow="Coming Later" title="Publications">
        <div className="rounded-xl border border-dashed border-border p-6 text-sm text-muted">
          Publications will be listed here once available.
        </div>
      </Section>

      <Section eyebrow="Coming Later" title="Posters" className="bg-surface">
        <div className="rounded-xl border border-dashed border-border p-6 text-sm text-muted">
          Conference and science-fair posters will be listed here once available.
        </div>
      </Section>
    </>
  );
}
