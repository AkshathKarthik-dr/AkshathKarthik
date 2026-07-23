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
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold leading-[1.1] text-foreground sm:text-5xl">
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
        <h2 className="mt-2 font-display text-2xl font-semibold text-foreground sm:text-3xl">
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

function TimelineNode() {
  return (
    <span className="relative flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-background">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
    </span>
  );
}

export function Timeline({
  items,
}: {
  items: { year: string; title: string; description?: string }[];
}) {
  return (
    <>
      {/* Desktop: alternating zigzag with bubble nodes on a center spine */}
      <div className="hidden md:block">
        {items.map((item, i) => {
          const isLeft = i % 2 === 0;
          const isLast = i === items.length - 1;
          return (
            <div key={`${item.year}-${item.title}`} className="grid grid-cols-[1fr_2.5rem_1fr] gap-6">
              <div className={isLeft ? "pb-10 text-right" : "pb-10"}>
                {isLeft && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-accent">
                      {item.year}
                    </p>
                    <p className="mt-1 font-display text-base font-semibold text-foreground">
                      {item.title}
                    </p>
                    {item.description && (
                      <p className="mt-1 text-sm leading-relaxed text-muted">{item.description}</p>
                    )}
                  </div>
                )}
              </div>

              <div className="flex flex-col items-center">
                <TimelineNode />
                {!isLast && <span className="w-px flex-1 bg-border" />}
              </div>

              <div className={!isLeft ? "pb-10" : "pb-10"}>
                {!isLeft && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-accent">
                      {item.year}
                    </p>
                    <p className="mt-1 font-display text-base font-semibold text-foreground">
                      {item.title}
                    </p>
                    {item.description && (
                      <p className="mt-1 text-sm leading-relaxed text-muted">{item.description}</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile: single column, nodes on the left */}
      <div className="space-y-8 md:hidden">
        {items.map((item, i) => (
          <div key={`${item.year}-${item.title}`} className="flex gap-4">
            <div className="flex flex-col items-center">
              <TimelineNode />
              {i !== items.length - 1 && <span className="w-px flex-1 bg-border" />}
            </div>
            <div className="pb-2">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-accent">
                {item.year}
              </p>
              <p className="mt-1 font-display text-base font-semibold text-foreground">
                {item.title}
              </p>
              {item.description && (
                <p className="mt-1 text-sm leading-relaxed text-muted">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
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
