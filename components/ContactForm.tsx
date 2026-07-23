"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm({ email }: { email: string }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${email}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="animate-[fadeUp_0.5s_ease] rounded-xl border border-border bg-background p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0056D2" strokeWidth="2.5">
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="mt-4 font-display text-lg font-semibold text-foreground">Message sent</p>
        <p className="mt-1 text-sm text-muted">
          Thanks for reaching out &mdash; you&rsquo;ll hear back by email soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="_subject" value="New message from akshathkarthik.com" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="true" />
      {/* honeypot spam trap, hidden from real visitors */}
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="focus-ring mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-accent"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="focus-ring mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-accent"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="reason" className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">
          Reason for reaching out
        </label>
        <select
          id="reason"
          name="reason"
          className="focus-ring mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition focus:border-accent"
          defaultValue="General question"
        >
          <option>General question</option>
          <option>Research collaboration</option>
          <option>Mentorship</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="focus-ring mt-2 w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-accent"
          placeholder="What would you like to share?"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="focus-ring inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0046ad] disabled:opacity-60"
      >
        {status === "loading" ? "Sending\u2026" : "Send Message"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong &mdash; please try again, or email directly instead.
        </p>
      )}
    </form>
  );
}
