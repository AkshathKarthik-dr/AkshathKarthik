import Link from "next/link";
import PulseDivider from "@/components/PulseDivider";
import { Section, Card, StatCard, Button, Tag, Timeline } from "@/components/UI";
import rawContent from "@/content/site-content.json";
import type { SiteContent } from "@/content/types";

const content = rawContent as SiteContent;

const { roles, missionCard, snapshot, milestones, featuredProjects, news } = content.home;
const { intro: languagesIntro, list: languages } = content.languages;

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-surface">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/icons/logo-light.png"
          alt=""
          className="pointer-events-none absolute -right-10 -top-10 h-[420px] w-[420px] opacity-[0.08] dark:hidden"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/icons/logo-dark.png"
          alt=""
          className="pointer-events-none absolute -right-10 -top-10 hidden h-[420px] w-[420px] opacity-[0.12] dark:block"
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:py-28 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Portfolio
            </p>
            <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] text-foreground sm:text-6xl">
              Akshath Karthik
            </h1>
            <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-2 text-[15px] font-medium text-muted">
              {roles.map((role, i) => (
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
            <p className="mt-3 text-[15px] leading-relaxed text-muted">{missionCard}</p>
          </div>
        </div>
      </section>

      <Section eyebrow="Snapshot" title="Academic Snapshot">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {snapshot.map((s) => (
            <StatCard key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Journey" title="Milestones" className="bg-surface">
        <Timeline items={milestones} />
      </Section>

      <Section eyebrow="Multilingual" title="Languages">
        <p className="max-w-2xl text-[15px] leading-relaxed text-muted">{languagesIntro}</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className={`relative rounded-xl border p-5 ${
                lang.highlight
                  ? "border-accent bg-accent/5 ring-1 ring-accent/30"
                  : "border-border bg-background"
              }`}
            >
              {lang.highlight && (
                <span className="absolute -top-3 left-4 rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-white">
                  Signature Strength
                </span>
              )}
              <p className="font-display text-base font-semibold text-foreground">{lang.name}</p>
              <p className="mt-1.5 text-sm font-medium text-accent">{lang.level}</p>
              {lang.note && <p className="mt-1.5 text-xs leading-relaxed text-muted">{lang.note}</p>}
            </div>
          ))}
        </div>
      </Section>

      {featuredProjects.length > 0 && (
        <Section eyebrow="Selected Work" title="Featured Projects" className="bg-surface">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((p) => (
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
      )}

      {news.length > 0 && (
        <Section eyebrow="Updates" title="Latest News" className={featuredProjects.length === 0 ? "bg-surface" : ""}>
          <div className="grid gap-5 sm:grid-cols-3">
            {news.map((n) => (
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
      )}
    </>
  );
}
