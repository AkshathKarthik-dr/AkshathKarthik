import { PageHero, Section, Card, Tag } from "@/components/UI";

export const metadata = { title: "Research | Akshath Karthik" };

const INTERESTS = ["Neuroscience", "Cardiology", "Medical AI", "Diagnostic Imaging", "Genomics"];

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

export default function Research() {
  return (
    <>
      <PageHero
        eyebrow="Research"
        title="Research & Projects"
        description="Interests, mentorship, and the technical projects that support a path toward physician-scientist work."
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

      <Section id="projects" eyebrow="Applied Work" title="Projects" className="bg-surface">
        <div className="space-y-10">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-muted">
              Python Projects
            </h3>
            <div className="mt-4">
              <ProjectGrid items={PYTHON_PROJECTS} />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-muted">
              Healthcare Apps
            </h3>
            <div className="mt-4">
              <ProjectGrid items={HEALTHCARE_APPS} />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-muted">
              Science Fair
            </h3>
            <div className="mt-4">
              <ProjectGrid items={SCIENCE_FAIR} />
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Skills" title="Coding">
        <div className="flex flex-wrap gap-2">
          {["Python", "HTML/CSS", "JavaScript", "SQL", "Data Analysis"].map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
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
