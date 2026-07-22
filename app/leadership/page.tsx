import { PageHero, Section, Card } from "@/components/UI";

export const metadata = { title: "Leadership | Akshath Karthik" };

export default function Leadership() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Leadership & Service"
        description="Roles, organizations, and community work outside the classroom."
      />

      <Section eyebrow="Roles" title="Leadership">
        <Card>
          <p className="text-[15px] leading-relaxed text-muted">
            List leadership positions held &mdash; club officer roles, team captaincies,
            or student government &mdash; along with responsibilities and impact.
          </p>
        </Card>
      </Section>

      <Section eyebrow="Involvement" title="Organizations" className="bg-surface">
        <Card>
          <p className="text-[15px] leading-relaxed text-muted">
            List clubs, honor societies, and organizations you belong to.
          </p>
        </Card>
      </Section>

      <Section eyebrow="Giving Back" title="Community Service">
        <Card>
          <p className="text-[15px] leading-relaxed text-muted">
            Describe community service initiatives you have led or participated in.
          </p>
        </Card>
      </Section>

      <Section eyebrow="Hours" title="Volunteer" className="bg-surface">
        <Card>
          <p className="text-[15px] leading-relaxed text-muted">
            Summarize total volunteer hours and organizations, or link to the volunteer
            tracker once it is built.
          </p>
        </Card>
      </Section>
    </>
  );
}
