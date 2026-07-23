import { PageHero, Section, Card, StatCard, Tag } from "@/components/UI";
import content from "@/content/site-content.json";

export const metadata = { title: "Academics | Akshath Karthik" };

const {
  gpa,
  classRank,
  classOf,
  track,
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
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatCard value={gpa} label="GPA" />
          <StatCard value={classRank} label="Class Rank" />
          <StatCard value={classOf} label="Class of" />
          <StatCard value={track} label="Healthcare Track" />
        </div>
      </Section>

      <Section eyebrow="Program" title="Coursework" className="bg-surface">
        <div className="flex flex-wrap gap-2">
          {coursework.map((c) => (
            <Tag key={c}>{c}</Tag>
          ))}
        </div>
      </Section>

      <Section eyebrow="Advanced" title="AP Classes">
        <div className="grid gap-4 sm:grid-cols-2">
          {apClasses.map((ap) => (
            <Card key={ap.name}>
              <h3 className="text-base font-semibold text-foreground">{ap.name}</h3>
              <p className="mt-2 text-sm text-muted">{ap.note}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Specialization" title="Healthcare Academy" className="bg-surface">
        <Card>
          <p className="text-[15px] leading-relaxed text-muted">{healthcareAcademyDescription}</p>
        </Card>
      </Section>

      <Section eyebrow="Credentials" title="Certifications">
        <div className="grid gap-4 sm:grid-cols-3">
          {certifications.map((c) => (
            <Card key={c}>
              <p className="text-sm font-medium text-foreground">{c}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Recognition" title="Awards" className="bg-surface">
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
