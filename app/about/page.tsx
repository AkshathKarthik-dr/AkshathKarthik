import { PageHero, Section, Card } from "@/components/UI";
import content from "@/content/site-content.json";

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

      <Section eyebrow="Portrait" title="Photo">
        <div className="flex aspect-[4/5] w-full max-w-xs items-center justify-center rounded-xl border border-dashed border-border bg-surface text-sm text-muted">
          Portrait photo placeholder
        </div>
      </Section>

      <Section eyebrow="Story" title="Biography" className="bg-surface">
        <Card>
          <p className="text-[15px] leading-relaxed text-muted">{bio}</p>
        </Card>
      </Section>

      <Section eyebrow="Purpose" title="Mission">
        <Card>
          <p className="text-[15px] leading-relaxed text-muted">{mission}</p>
        </Card>
      </Section>

      <Section eyebrow="Direction" title="Career Vision" className="bg-surface">
        <Card>
          <p className="text-[15px] leading-relaxed text-muted">{careerVision}</p>
        </Card>
      </Section>

      <Section eyebrow="Principles" title="Values">
        <div className="grid gap-5 sm:grid-cols-3">
          {values.map((v) => (
            <Card key={v.title}>
              <h3 className="text-base font-semibold text-foreground">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{v.description}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
