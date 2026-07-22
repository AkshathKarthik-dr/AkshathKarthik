import { PageHero, Section, Card, StatCard, Tag } from "@/components/UI";

export const metadata = { title: "Academics | Akshath Karthik" };

const COURSEWORK = [
  "Biology",
  "Chemistry",
  "Precalculus / Calculus",
  "English Language Arts",
  "World History",
  "Healthcare Academy Core",
];

const AP_CLASSES = ["AP Biology", "AP Chemistry", "AP Calculus", "AP Psychology"];

const CERTIFICATIONS = [
  "Python Programming Certification",
  "CPR / First Aid (planned)",
  "HIPAA Basics (planned)",
];

// To add an award, copy one line below and edit the text and year.
const AWARDS = [
  { title: "Add your first award here", year: "2026" },
  { title: "Add another award here", year: "2026" },
];

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
          <StatCard value="Add GPA" label="GPA" />
          <StatCard value="Add Rank" label="Class Rank" />
          <StatCard value="2029" label="Class of" />
          <StatCard value="Academy" label="Healthcare Track" />
        </div>
      </Section>

      <Section eyebrow="Program" title="Coursework" className="bg-surface">
        <div className="flex flex-wrap gap-2">
          {COURSEWORK.map((c) => (
            <Tag key={c}>{c}</Tag>
          ))}
        </div>
      </Section>

      <Section eyebrow="Advanced" title="AP Classes">
        <div className="grid gap-4 sm:grid-cols-2">
          {AP_CLASSES.map((ap) => (
            <Card key={ap}>
              <h3 className="text-base font-semibold text-foreground">{ap}</h3>
              <p className="mt-2 text-sm text-muted">Add grade, year, and notes here.</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Specialization" title="Healthcare Academy" className="bg-surface">
        <Card>
          <p className="text-[15px] leading-relaxed text-muted">
            Describe the Healthcare Academy program &mdash; its structure, clinical
            components, and what it has taught you so far about medicine as a career.
          </p>
        </Card>
      </Section>

      <Section eyebrow="Credentials" title="Certifications">
        <div className="grid gap-4 sm:grid-cols-3">
          {CERTIFICATIONS.map((c) => (
            <Card key={c}>
              <p className="text-sm font-medium text-foreground">{c}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Recognition" title="Awards" className="bg-surface">
        <div className="grid gap-4 sm:grid-cols-2">
          {AWARDS.map((a) => (
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
