import Link from "next/link";
import PulseDivider from "@/components/PulseDivider";
import { Section, Card, StatCard, Button, Tag } from "@/components/UI";

const ROLES = ["Healthcare Scholar", "Aspiring Physician\u2013Scientist", "Research Enthusiast"];

const SNAPSHOT = [
  { value: "2029", label: "Class of" },
  { value: "Academy", label: "Healthcare" },
  { value: "Certified", label: "Python" },
  { value: "Active", label: "Volunteer" },
  { value: "Focused", label: "Research" },
  { value: "Multi", label: "Languages" },
];

const PROJECTS = [
  {
    title: "Clinical Symptom Tracker",
    tag: "Healthcare App",
    description:
      "A Python-based tool for logging and visualizing patient-reported symptoms over time, built to explore how software can support clinical decision-making.",
  },
  {
    title: "Alzheimer's Imaging Classifier",
    tag: "Research",
    description:
      "An exploratory machine learning project applying image classification techniques to publicly available neuroimaging datasets.",
  },
  {
    title: "Volunteer Hours Dashboard",
    tag: "Coding",
    description:
      "A lightweight dashboard for tracking clinical volunteering and shadowing hours, built to practice full-stack development fundamentals.",
  },
];

const NEWS = [
  {
    date: "Coming soon",
    title: "Research Profile publication",
    description: "Formal research interests and faculty mentorship details will be posted here.",
  },
  {
    date: "Coming soon",
    title: "First monthly blog article",
    description: "Long-form writing on healthcare, medicine, and the research process begins soon.",
  },
  {
    date: "Coming soon",
    title: "Science fair results",
    description: "Updates on current and upcoming science fair projects will be added as they develop.",
  },
];

export default function Home() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:py-28 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Portfolio
            </p>
            <h1 className="mt-4 text-5xl font-semibold leading-[1.05] text-foreground sm:text-6xl">
              Akshath Karthik
            </h1>
            <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-2 text-[15px] font-medium text-muted">
              {ROLES.map((role, i) => (
                <li key={role} className="flex items-center gap-3">
                  {i > 0 && <span className="h-1 w-1 rounded-full bg-accent" />}
                  {role}
                </li>
              ))}
            </ul>
            <PulseDivider className="mt-8 max-w-[220px]" />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/resume">Resume</Button>
              <Button href="/research" variant="secondary">
                Research
              </Button>
              <Button href="/research#projects" variant="secondary">
                Projects
              </Button>
            </div>
          </div>

          <div className="reveal rounded-2xl border border-border bg-background p-8" style={{ animationDelay: "0.1s" }}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Mission
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              Bridging medicine and technology &mdash; using research and software to
              understand disease more clearly and care for patients more effectively.
            </p>
          </div>
        </div>
      </section>

      <Section eyebrow="Snapshot" title="Academic Snapshot">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {SNAPSHOT.map((s) => (
            <StatCard key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Selected Work" title="Featured Projects" className="bg-surface">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <Card key={p.title}>
              <Tag>{p.tag}</Tag>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.description}</p>
            </Card>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/research#projects" className="focus-ring text-sm font-semibold text-accent hover:underline">
            View all projects &rarr;
          </Link>
        </div>
      </Section>

      <Section eyebrow="Updates" title="Latest News">
        <div className="grid gap-5 sm:grid-cols-3">
          {NEWS.map((n) => (
            <div key={n.title} className="border-l-2 border-accent/40 pl-5">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
                {n.date}
              </p>
              <h3 className="mt-2 text-base font-semibold text-foreground">{n.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{n.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
