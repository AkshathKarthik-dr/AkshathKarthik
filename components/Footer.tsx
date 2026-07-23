import Link from "next/link";
import PulseDivider from "./PulseDivider";
import rawContent from "@/content/site-content.json";
import type { SiteContent } from "@/content/types";

const content = rawContent as SiteContent;

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/academics", label: "Academics" },
  { href: "/research", label: "Research" },
  { href: "/healthcare", label: "Healthcare" },
  { href: "/blog", label: "Blog" },
  { href: "/resume", label: "Resume" },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 pt-10">
        <PulseDivider className="max-w-[220px] opacity-70" />
      </div>
      <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-12 pt-4 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/icons/logo-light.png" alt="" className="block h-6 w-6 dark:hidden" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/icons/logo-dark.png" alt="" className="hidden h-6 w-6 dark:block" />
            <p className="text-sm font-semibold tracking-[0.12em] text-foreground">
              AKSHATH KARTHIK
            </p>
          </div>
          <p className="mt-3 max-w-[220px] text-sm leading-relaxed text-muted">
            Healthcare scholar and aspiring physician&ndash;scientist, Class of 2029.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            Explore
          </p>
          <ul className="mt-3 space-y-2">
            {LINKS.slice(0, 3).map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="focus-ring text-sm text-muted transition hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            More
          </p>
          <ul className="mt-3 space-y-2">
            {LINKS.slice(3).map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="focus-ring text-sm text-muted transition hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            Connect
          </p>
          <ul className="mt-3 space-y-2">
            <li>
              <a
                href={`mailto:${content.contact.email}`}
                className="focus-ring text-sm text-muted transition hover:text-accent"
              >
                Email
              </a>
            </li>
            <li>
              <Link href="/contact" className="focus-ring text-sm text-muted transition hover:text-accent">
                Research Inquiry
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Akshath Karthik. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
