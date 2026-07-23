import { PageHero, Section, Card, Timeline } from "@/components/UI";
import rawContent from "@/content/site-content.json";
import type { SiteContent } from "@/content/types";

const content = rawContent as SiteContent;

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
          <a
            href="https://hosa.org"
            target="_blank"
            rel="noreferrer"
            className="focus-ring mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
          >
            Learn more about HOSA &rarr;
          </a>
        </Card>
      </Section>

      <Section eyebrow="Giving Back" title="Community Service" className="bg-surface">
        <Card>
          <p className="text-[15px] leading-relaxed text-muted">{communityService}</p>
        </Card>
      </Section>

      <Section eyebrow="Timeline" title="Healthcare Journey">
        <Timeline items={journey.map((j) => ({ year: j.year, title: j.title, description: j.text }))} />
      </Section>
    </>
  );
}
