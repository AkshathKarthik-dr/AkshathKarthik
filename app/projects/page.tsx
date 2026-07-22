import { PageHero, Section, Card, Tag } from "@/components/UI";

export const metadata = { title: "Projects | Akshath Karthik" };

const PYTHON_PROJECTS = [
  { title: "Clinical Symptom Tracker", desc: "Python tool for logging and visualizing patient-reported symptoms." },
  { title: "Volunteer Hours Dashboard", desc: "A lightweight dashboard for tracking clinical volunteering and shadowing hours." },
];

const HEALTHCARE_APPS = [
  { title: "Medication Reminder Concept", desc: "A concept app for helping patients track medication schedules." },
];

const SCIENCE_FAIR = [
  { title: "Science Fair Project", desc: "Add title, hypothesis, methodology, and results here." },
];

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

export default function Projects() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Projects"
        description="Code, research prototypes, and science-fair work at the intersection of medicine and software."
      />

      <Section eyebrow="Software" title="Python Projects">
        <ProjectGrid items={PYTHON_PROJECTS} />
      </Section>

      <Section eyebrow="Applied" title="Healthcare Apps" className="bg-surface">
        <ProjectGrid items={HEALTHCARE_APPS} />
      </Section>

      <Section eyebrow="Competition" title="Science Fair">
        <ProjectGrid items={SCIENCE_FAIR} />
      </Section>

      <Section eyebrow="Skills" title="Coding" className="bg-surface">
        <div className="flex flex-wrap gap-2">
          {["Python", "HTML/CSS", "JavaScript", "SQL", "Data Analysis"].map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
      </Section>

      <Section eyebrow="What's Next" title="Future Research">
        <Card>
          <p className="text-[15px] leading-relaxed text-muted">
            Outline upcoming project ideas that combine coding, healthcare, and research.
          </p>
        </Card>
      </Section>
    </>
  );
}
