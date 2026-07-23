import { PageHero, Section, Card, Tag } from "@/components/UI";
import rawContent from "@/content/site-content.json";
import type { SiteContent } from "@/content/types";

const content = rawContent as SiteContent;

export const metadata = { title: "Research | Akshath Karthik" };

const {
  pageDescription,
  comingSoonNote,
  interests,
  facultyInterests,
  currentReading,
  pythonProjects,
  webProjects,
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

function ProjectSubsection({
  label,
  items,
}: {
  label: string;
  items: { title: string; desc: string }[];
}) {
  if (items.length === 0) return null;
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-muted">{label}</h3>
      <div className="mt-4">
        <ProjectGrid items={items} />
      </div>
    </div>
  );
}

export default function Research() {
  const hasAnyProjects =
    webProjects.length + pythonProjects.length + healthcareApps.length + scienceFair.length > 0;

  return (
    <>
      <PageHero eyebrow="Research" title="Research & Projects" description={pageDescription} />

      {comingSoonNote && (
        <Section eyebrow="Status" title="Where things stand">
          <Card>
            <p className="text-[15px] leading-relaxed text-muted">{comingSoonNote}</p>
          </Card>
        </Section>
      )}

      <Section eyebrow="Focus Areas" title="Research Interests" className="bg-surface">
        <div className="flex flex-wrap gap-2">
          {interests.map((i) => (
            <Tag key={i}>{i}</Tag>
          ))}
        </div>
      </Section>

      <Section eyebrow="Mentorship" title="Faculty Interests">
        <Card>
          <p className="text-[15px] leading-relaxed text-muted">{facultyInterests}</p>
        </Card>
      </Section>

      <Section eyebrow="Reading" title="Current Reading" className="bg-surface">
        <Card>
          <p className="text-[15px] leading-relaxed text-muted">{currentReading}</p>
        </Card>
      </Section>

      <Section id="projects" eyebrow="Applied Work" title="Projects">
        {hasAnyProjects ? (
          <div className="space-y-10">
            <ProjectSubsection label="Web Development" items={webProjects} />
            <ProjectSubsection label="Python Projects" items={pythonProjects} />
            <ProjectSubsection label="Healthcare Apps" items={healthcareApps} />
            <ProjectSubsection label="Science Fair" items={scienceFair} />
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-border p-6 text-sm text-muted">
            Projects will be added here as they're completed.
          </div>
        )}
      </Section>

      <Section eyebrow="Skills" title="Coding" className="bg-surface">
        <div className="flex flex-wrap gap-2">
          {codingSkills.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
      </Section>

      {futureProjects.length > 0 && (
        <Section eyebrow="Roadmap" title="Future Projects">
          <div className="grid gap-4 sm:grid-cols-2">
            {futureProjects.map((p) => (
              <Card key={p.title}>
                <h3 className="text-base font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-muted">{p.desc}</p>
              </Card>
            ))}
          </div>
        </Section>
      )}

      <Section eyebrow="Coming Later" title="Publications" className="bg-surface">
        <div className="rounded-xl border border-dashed border-border p-6 text-sm text-muted">
          Publications will be listed here once available.
        </div>
      </Section>

      <Section eyebrow="Coming Later" title="Posters">
        <div className="rounded-xl border border-dashed border-border p-6 text-sm text-muted">
          Conference and science-fair posters will be listed here once available.
        </div>
      </Section>
    </>
  );
}
