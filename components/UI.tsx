import { ReactNode } from "react";
import PulseDivider from "./PulseDivider";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-2xl text-4xl font-semibold leading-[1.1] text-foreground sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
            {description}
          </p>
        )}
        <PulseDivider className="mt-8 max-w-[180px]" />
      </div>
    </section>
  );
}

export function Section({
  title,
  eyebrow,
  children,
  className = "",
  id,
}: {
  title?: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-6xl scroll-mt-20 px-5 py-14 ${className}`}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </p>
      )}
      {title && (
        <h2 className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
          {title}
        </h2>
      )}
      <div className={title || eyebrow ? "mt-8" : ""}>{children}</div>
    </section>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-xl border border-border bg-background p-6 transition hover:border-accent/50 hover:shadow-[0_8px_28px_-14px_rgba(11,31,58,0.25)] ${className}`}
    >
      {children}
    </div>
  );
}

export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-border bg-background px-5 py-6 text-center">
      <p className="text-2xl font-semibold text-foreground">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-[0.1em] text-muted">{label}</p>
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
      {children}
    </span>
  );
}

export function Timeline({
  items,
}: {
  items: { year: string; title: string; description?: string }[];
}) {
  return (
    <div className="space-y-6 border-l-2 border-border pl-6">
      {items.map((item) => (
        <div key={`${item.year}-${item.title}`} className="relative">
          <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-accent">
            {item.year}
          </p>
          <p className="mt-1 text-[15px] font-medium text-foreground">{item.title}</p>
          {item.description && (
            <p className="mt-1 text-sm leading-relaxed text-muted">{item.description}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base =
    "focus-ring inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition";
  const styles =
    variant === "primary"
      ? "bg-accent text-white hover:bg-[#0046ad]"
      : "border border-border text-foreground hover:border-accent hover:text-accent";
  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}
