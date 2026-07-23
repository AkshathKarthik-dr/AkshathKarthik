import { PageHero, Section, Card, Button } from "@/components/UI";
import rawContent from "@/content/site-content.json";
import type { SiteContent } from "@/content/types";

const content = rawContent as SiteContent;

export const metadata = { title: "Contact | Akshath Karthik" };

const { email } = content.contact;

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in Touch"
        description="Reach out about research collaboration, mentorship, or general questions."
      />

      <Section eyebrow="Reach Out" title="Contact Details">
        <Card className="max-w-md">
          <h3 className="text-base font-semibold text-foreground">Email</h3>
          <p className="mt-2 text-sm text-muted">
            The best way to reach me directly.
          </p>
          <div className="mt-4">
            <Button href={`mailto:${email}`}>Send an Email</Button>
          </div>
        </Card>
      </Section>

      <Section eyebrow="Coming Later" title="LinkedIn" className="bg-surface">
        <div className="rounded-xl border border-dashed border-border p-6 text-sm text-muted">
          A LinkedIn profile link will be added here.
        </div>
      </Section>

      <Section eyebrow="For Mentors & Faculty" title="Research Inquiry">
        <Card>
          <p className="text-[15px] leading-relaxed text-muted">
            If you are a researcher, faculty member, or physician interested in mentorship
            or collaboration, please reach out by email &mdash; a dedicated contact form
            is planned for a future update.
          </p>
        </Card>
      </Section>
    </>
  );
}
