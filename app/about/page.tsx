import { PageHero, Section, Card } from "@/components/UI";
import rawContent from "@/content/site-content.json";
import type { SiteContent } from "@/content/types";

const content = rawContent as SiteContent;

export const metadata = { title: "About | Akshath Karthik" };

const { bio, mission, careerVision, values } = content.about;

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="About Akshath"
        description="Getting to know the person behind the research, the volunteering, and the code."
      />

      <Section>
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          {/* Photo, bigger, with an offset accent block and a floating badge overlay */}
          <div className="relative mx-auto w-full max-w-sm lg:mx-0">
            <div
              aria-hidden="true"
              className="absolute -bottom-5 -right-5 h-full w-full rounded-2xl bg-accent/15"
            />
            <div className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface text-center text-sm text-muted">
              Portrait photo
              <br />
              (add later)
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-xl border border-border bg-background px-5 py-4 shadow-[0_12px_32px_-12px_rgba(11,31,58,0.35)]">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-accent">
                Class of 2029
              </p>
              <p className="mt-1 font-display text-base font-semibold text-foreground">
                Aspiring Neurosurgeon
              </p>
            </div>
          </div>

          {/* Bio, Mission, Vision stacked to the right */}
          <div className="mt-10 space-y-10 lg:mt-0">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Biography
              </p>
              <p className="mt-3 font-display text-xl leading-relaxed text-foreground sm:text-2xl">
                {bio}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Mission
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{mission}</p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Career Vision
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{careerVision}</p>
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Principles" title="Values" className="bg-surface">
        <div className="grid gap-5 sm:grid-cols-3">
          {values.map((v) => (
            <Card key={v.title}>
              <h3 className="font-display text-base font-semibold text-foreground">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{v.description}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
