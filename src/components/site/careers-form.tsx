"use client";

import { useState } from "react";
import Link from "next/link";
import { FloatingInput } from "@/components/watermelon-ui/floating-input";
import Checkbox16 from "@/components/base-variants/checkbox/checkbox-16";
import { Button } from "@/components/ui/button";
import { submitWtForm } from "@/lib/site-config";

const ROLES = [
  "Physician (MD/DO)",
  "Physician Assistant",
  "Nurse Practitioner",
  "Registered Nurse",
  "Medical Assistant",
  "Front Office / Patient Experience",
  "Other",
];

/** Careers expression-of-interest form (floating-input + checkbox-16 modules). */
export function CareersForm() {
  const [consent, setConsent] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    data.set("contact_consent", consent ? "yes" : "no");
    const result = await submitWtForm(data, {
      subject: "Careers — expression of interest",
    });
    if (result !== "error") setDone(true);
  };

  if (done) {
    return (
      <div
        role="status"
        className="rounded-2xl border border-green-200 bg-brand-green-soft px-6 py-5"
      >
        <p className="font-heading font-bold text-green-950">
          Thank you — we&apos;ve got it.
        </p>
        <p className="mt-1 text-sm text-green-900/80">
          We&apos;ll reach out as roles open up.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <FloatingInput label="Full name *" name="name" required autoComplete="name" />
        <FloatingInput
          label="Email address *"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
      </div>
      <div>
        <label
          htmlFor="role"
          className="mb-1.5 block text-sm font-medium text-muted-foreground"
        >
          Role of interest
        </label>
        <select
          id="role"
          name="role"
          className="w-full rounded-lg border border-border bg-transparent px-4 py-3 outline-none transition-colors focus:border-primary"
          defaultValue=""
        >
          <option value="">Select a role</option>
          {ROLES.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-muted-foreground"
        >
          Anything you&apos;d like us to know
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="A sentence or two about you — credentials, experience, or a link to your profile."
          className="w-full resize-y rounded-lg border border-border bg-transparent px-4 py-3 outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary"
        />
      </div>

      <div className="absolute -left-[9999px] h-0 overflow-hidden" aria-hidden>
        <label>
          Leave this field empty
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <Checkbox16
        label="You may contact me about roles at Wellthrivea"
        description="We'll only use your details for hiring conversations. Please don't include any patient information or sensitive personal details."
        checked={consent}
        onCheckedChange={setConsent}
        required
      />

      <Button
        type="submit"
        disabled={!consent}
        className="brand-gradient w-full rounded-full py-6 font-heading text-base font-bold text-white hover:brightness-110 disabled:opacity-50"
      >
        Send expression of interest
      </Button>

      <p className="text-xs leading-relaxed text-muted-foreground">
        Wellthrivea is an equal opportunity employer. See our{" "}
        <Link href="/legal/non-discrimination" className="font-semibold text-brand-blue hover:underline">
          Non-discrimination Statement
        </Link>
        .
      </p>
    </form>
  );
}
