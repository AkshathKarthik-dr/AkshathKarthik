import { PageHero, Section, Card } from "@/components/UI";
import content from "@/content/site-content.json";

export const metadata = { title: "Healthcare | Akshath Karthik" };

const {
  volunteerWork,
  clinicalExperience,
  shadowing,
  certifications,
  leadership,
  communityService,
  journey,
} = content.healthcare;

export default function Healthcare() {
  return (
    <>
      <PageHero
        eyebrow="Healthcare"
        title="Healthcare Experience"
        description="Clinical exposure, service, and leadership on the path toward medicine."
      />

      <Section eyebrow="Service" title="Volunteer Work">
        <Card>
          <p className="text-[15px] leading-relaxed text-muted">{volunteerWork}</p>
        </Card>
      </Section>

      <Section eyebrow="In Practice" title="Clinical Experience" className="bg-surface">
        <Card>
          <p className="text-[15px] leading-relaxed text-muted">{clinicalExperience}</p>
        </Card>
      </Section>

      <Section eyebrow="Observation" title="Shadowing">
        <Card>
          <p className="text-[15px] leading-relaxed text-muted">{shadowing}</p>
        </Card>
      </Section>

      <Section eyebrow="Credentials" title="Certifications" className="bg-surface">
        <Card>
          <p className="text-[15px] leading-relaxed text-muted">{certifications}</p>
        </Card>
      </Section>

      <Section eyebrow="Roles" title="Leadership & Organizations">
        <Card>
          <p className="text-[15px] leading-relaxed text-muted">{leadership}</p>
        </Card>
      </Section>

      <Section eyebrow="Giving Back" title="Community Service" className="bg-surface">
        <Card>
          <p className="text-[15px] leading-relaxed text-muted">{communityService}</p>
        </Card>
      </Section>

      <Section eyebrow="Timeline" title="Healthcare Journey">
        <div className="space-y-6 border-l-2 border-border pl-6">
          {journey.map((j) => (
            <div key={j.year} className="relative">
              <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-accent">
                {j.year}
              </p>
              <p className="mt-1 text-[15px] text-muted">{j.text}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
