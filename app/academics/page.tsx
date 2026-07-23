import { PageHero, Section, Card, StatCard, Tag } from "@/components/UI";
import rawContent from "@/content/site-content.json";
import type { SiteContent } from "@/content/types";

const content = rawContent as SiteContent;

export const metadata = { title: "Academics | Akshath Karthik" };

const {
  classOf,
  track,
  honors,
  coursework,
  apClasses,
  healthcareAcademyDescription,
  certifications,
  awards,
} = content.academics;

export default function Academics() {
  return (
    <>
      <PageHero
        eyebrow="Academics"
        title="Academic Record"
        description="Coursework, performance, and credentials from the Healthcare Academy program."
      />

      <Section eyebrow="Standing" title="At a Glance">
        <div className="grid grid-cols-2 gap-4 sm:max-w-sm">
          <StatCard value={classOf} label="Class of" />
          <StatCard value={track} label="Healthcare Track" />
        </div>
      </Section>

      {honors.length > 0 && (
        <Section eyebrow="Recognition" title="Honors" className="bg-surface">
          <div className="grid gap-4 sm:grid-cols-2">
            {honors.map((h) => (
              <Card key={h.title}>
                <p className="text-sm font-semibold text-foreground">{h.title}</p>
                {h.note && <p className="mt-1 text-sm text-muted">{h.note}</p>}
                {h.title.toLowerCase().includes("psat") && (
                  <a
                    href="https://www.collegeboard.org/psat-nmsqt"
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring mt-3 inline-flex items-center gap-1 text-xs font-semibold text-accent hover:underline"
                  >
                    About the PSAT/NMSQT &rarr;
                  </a>
                )}
              </Card>
            ))}
          </div>
        </Section>
      )}

      <Section eyebrow="Program" title="Coursework">
        <div className="flex flex-wrap gap-2">
          {coursework.map((c) => (
            <Tag key={c}>{c}</Tag>
          ))}
        </div>
      </Section>

      <Section eyebrow="Advanced" title="AP Classes" className="bg-surface">
        <div className="grid gap-4 sm:grid-cols-2">
          {apClasses.map((ap) => (
            <Card key={ap.name}>
              <h3 className="text-base font-semibold text-foreground">{ap.name}</h3>
              <p className="mt-2 text-sm text-muted">{ap.note}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Specialization" title="Healthcare Academy">
        <Card>
          <p className="text-[15px] leading-relaxed text-muted">{healthcareAcademyDescription}</p>
        </Card>
      </Section>

      <Section eyebrow="Credentials" title="Certifications" className="bg-surface">
        <div className="grid gap-4 sm:grid-cols-3">
          {certifications.map((c) => (
            <Card key={c}>
              <p className="text-sm font-medium text-foreground">{c}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Recognition" title="Awards">
        <div className="grid gap-4 sm:grid-cols-2">
          {awards.map((a) => (
            <Card key={a.title} className="flex items-center justify-between gap-4">
              <p className="text-sm font-medium text-foreground">{a.title}</p>
              <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.08em] text-muted">
                {a.year}
              </span>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
