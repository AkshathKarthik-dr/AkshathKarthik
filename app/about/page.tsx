import { Guitar, Drum, ChessKnight, Waves } from "lucide-react";
import { PageHero, Section, Card } from "@/components/UI";
import rawContent from "@/content/site-content.json";
import type { SiteContent } from "@/content/types";

const content = rawContent as SiteContent;

export const metadata = { title: "About | Akshath Karthik" };

const { bio, mission, careerVision, values } = content.about;
const { intro: hobbiesIntro, list: hobbies } = content.hobbies;

const HOBBY_ICONS: Record<string, typeof Guitar> = {
  guitar: Guitar,
  drum: Drum,
  chess: ChessKnight,
  waves: Waves,
};

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
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-surface">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/images/profile.jpg"
                alt="Akshath Karthik"
                className="h-full w-full object-cover"
              />
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
              <p className="mt-3 text-base leading-relaxed text-foreground sm:text-[17px]">
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

      <Section eyebrow="Outside the Classroom" title="Hobbies">
        <p className="max-w-2xl text-[15px] leading-relaxed text-muted">{hobbiesIntro}</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {hobbies.map((hobby) => {
            const Icon = HOBBY_ICONS[hobby.icon] ?? Guitar;
            return (
              <Card key={hobby.name} className="flex flex-col items-start gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                  <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-display text-base font-semibold text-foreground">{hobby.name}</p>
                  {hobby.note && <p className="mt-1 text-xs leading-relaxed text-muted">{hobby.note}</p>}
                </div>
              </Card>
            );
          })}
        </div>
      </Section>
    </>
  );
}
