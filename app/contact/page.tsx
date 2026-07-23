import { PageHero, Section, Card, Button } from "@/components/UI";
import ContactForm from "@/components/ContactForm";
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
        description="Reach out about research collaboration, mentorship, or general questions \u2014 messages go straight to my inbox."
      />

      <Section eyebrow="Send a Message" title="Contact Form">
        <div className="max-w-2xl">
          <ContactForm email={email} />
        </div>
      </Section>

      <Section eyebrow="Reach Out" title="Prefer Email Directly?" className="bg-surface">
        <Card className="max-w-md">
          <p className="text-sm text-muted">You can also reach me directly at</p>
          <div className="mt-4">
            <Button href={`mailto:${email}`} variant="secondary">
              {email}
            </Button>
          </div>
        </Card>
      </Section>

      <Section eyebrow="Coming Later" title="LinkedIn">
        <div className="rounded-xl border border-dashed border-border p-6 text-sm text-muted">
          A LinkedIn profile link will be added here.
        </div>
      </Section>
    </>
  );
}
