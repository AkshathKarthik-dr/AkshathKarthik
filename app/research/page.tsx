import { PageHero, Section, Card, Tag } from "@/components/UI";
import content from "@/content/site-content.json";

export const metadata = { title: "Research | Akshath Karthik" };

const {
  pageDescription,
  interests,
  facultyInterests,
  currentReading,
  pythonProjects,
  healthcareApps,
  scienceFair,
  codingSkills,
  futureProjects,
} = content.research;

function ProjectGrid({ items }: { items: { title: string; desc: string }[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {items.map((p) => (
        <Card key={p.title}>
          <h3 className="text-base font-semibold text-foreground">{p.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
        </Card>
      ))}
    </div>
  );
}

export default function Research() {
  return (
    <>
      <PageHero eyebrow="Research" title="Research & Projects" description={pageDescription} />

      <Section eyebrow="Focus Areas" title="Research Interests">
        <div className="flex flex-wrap gap-2">
          {interests.map((i) => (
            <Tag key={i}>{i}</Tag>
          ))}
        </div>
      </Section>

      <Section eyebrow="Mentorship" title="Faculty Interests" className="bg-surface">
        <Card>
          <p className="text-[15px] leading-relaxed text-muted">{facultyInterests}</p>
        </Card>
      </Section>

      <Section eyebrow="Reading" title="Current Reading">
        <Card>
          <p className="text-[15px] leading-relaxed text-muted">{currentReading}</p>
        </Card>
      </Section>

      <Section id="projects" eyebrow="Applied Work" title="Projects" className="bg-surface">
        <div className="space-y-10">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-muted">
              Python Projects
            </h3>
            <div className="mt-4">
              <ProjectGrid items={pythonProjects} />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-muted">
              Healthcare Apps
            </h3>
            <div className="mt-4">
              <ProjectGrid items={healthcareApps} />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-muted">
              Science Fair
            </h3>
            <div className="mt-4">
              <ProjectGrid items={scienceFair} />
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Skills" title="Coding">
        <div className="flex flex-wrap gap-2">
          {codingSkills.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
      </Section>

      <Section eyebrow="Roadmap" title="Future Projects" className="bg-surface">
        <div className="grid gap-4 sm:grid-cols-2">
          {futureProjects.map((p) => (
            <Card key={p.title}>
              <h3 className="text-base font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm text-muted">{p.desc}</p>
            </Card>
          ))}
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
