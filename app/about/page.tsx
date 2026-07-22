import { PageHero, Section, Card } from "@/components/UI";

export const metadata = { title: "About | Akshath Karthik" };

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
          <p className="text-[15px] leading-relaxed text-muted">
            Akshath Karthik is a Healthcare Academy student, Class of 2029, pursuing a path
            toward medicine through a combination of coursework, clinical exposure, and
            independent research. Add a two&ndash;three paragraph biography here covering
            background, interests, and what draws you to healthcare and science.
          </p>
        </Card>
      </Section>

      <Section eyebrow="Purpose" title="Mission">
        <Card>
          <p className="text-[15px] leading-relaxed text-muted">
            Describe the mission that drives your work &mdash; the intersection of medicine,
            research, and technology you want to pursue, and who you hope to serve.
          </p>
        </Card>
      </Section>

      <Section eyebrow="Direction" title="Career Vision" className="bg-surface">
        <Card>
          <p className="text-[15px] leading-relaxed text-muted">
            Outline your long-term vision &mdash; physician&ndash;scientist, specialty
            interests, and the kind of impact you hope to have in medicine and research.
          </p>
        </Card>
      </Section>

      <Section eyebrow="Principles" title="Values">
        <div className="grid gap-5 sm:grid-cols-3">
          {["Curiosity", "Integrity", "Service"].map((v) => (
            <Card key={v}>
              <h3 className="text-base font-semibold text-foreground">{v}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Add a short description of what this value means in your work and life.
              </p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
