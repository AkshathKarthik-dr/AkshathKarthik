import { PageHero, Section, Card, Button } from "@/components/UI";

export const metadata = { title: "Resume | Akshath Karthik" };

export default function Resume() {
  return (
    <>
      <PageHero
        eyebrow="Resume"
        title="Resume & Documents"
        description="Downloadable resume, research profile, and academic CV."
      />

      <Section eyebrow="Download" title="Resume">
        <Card className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-base font-semibold text-foreground">Resume.pdf</h3>
            <p className="mt-1 text-sm text-muted">
              General resume covering academics, activities, and skills.
            </p>
          </div>
          <Button href="/assets/docs/Resume.pdf">Download PDF</Button>
        </Card>
      </Section>

      <Section eyebrow="Download" title="Research Profile" className="bg-surface">
        <Card className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-base font-semibold text-foreground">ResearchProfile.pdf</h3>
            <p className="mt-1 text-sm text-muted">
              Detailed research interests, faculty connections, and project summaries.
            </p>
          </div>
          <Button href="/assets/docs/ResearchProfile.pdf">Download PDF</Button>
        </Card>
      </Section>

      <Section eyebrow="Coming Later" title="Academic CV">
        <div className="rounded-xl border border-dashed border-border p-6 text-sm text-muted">
          A full academic CV will be added here as coursework and research grow.
        </div>
      </Section>

      <Section eyebrow="Coming Later" title="Portfolio" className="bg-surface">
        <div className="rounded-xl border border-dashed border-border p-6 text-sm text-muted">
          A consolidated portfolio of writing, projects, and research will live here.
        </div>
      </Section>
    </>
  );
}
