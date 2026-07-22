import { PageHero, Section, Card } from "@/components/UI";

export const metadata = { title: "Healthcare | Akshath Karthik" };

const JOURNEY = [
  { year: "Freshman Year", text: "Enrolled in the Healthcare Academy program." },
  { year: "Sophomore Year", text: "Began clinical shadowing and volunteer work." },
  { year: "Junior Year", text: "Expanding clinical exposure and certifications." },
];

export default function Healthcare() {
  return (
    <>
      <PageHero
        eyebrow="Healthcare"
        title="Healthcare Experience"
        description="Clinical exposure, service, and the milestones of a path toward medicine."
      />

      <Section eyebrow="Service" title="Volunteer Work">
        <Card>
          <p className="text-[15px] leading-relaxed text-muted">
            List hospitals, clinics, or organizations where you volunteer, along with your
            role, hours, and what you learned.
          </p>
        </Card>
      </Section>

      <Section eyebrow="In Practice" title="Clinical Experience" className="bg-surface">
        <Card>
          <p className="text-[15px] leading-relaxed text-muted">
            Describe any hands-on clinical experiences &mdash; skills labs, simulations,
            or supervised patient interaction through the Healthcare Academy.
          </p>
        </Card>
      </Section>

      <Section eyebrow="Observation" title="Shadowing">
        <Card>
          <p className="text-[15px] leading-relaxed text-muted">
            List physicians, specialties, and settings you have shadowed in, with key
            takeaways from each experience.
          </p>
        </Card>
      </Section>

      <Section eyebrow="Credentials" title="Certifications" className="bg-surface">
        <Card>
          <p className="text-[15px] leading-relaxed text-muted">
            List healthcare-related certifications &mdash; CPR, First Aid, HIPAA training,
            and any others earned through the Academy.
          </p>
        </Card>
      </Section>

      <Section eyebrow="Timeline" title="Healthcare Journey">
        <div className="space-y-6 border-l-2 border-border pl-6">
          {JOURNEY.map((j) => (
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
