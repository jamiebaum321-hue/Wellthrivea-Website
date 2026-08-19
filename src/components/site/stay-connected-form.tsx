"use client";

import { useState } from "react";
import Link from "next/link";
import { FloatingInput } from "@/components/watermelon-ui/floating-input";
import Checkbox16 from "@/components/base-variants/checkbox/checkbox-16";
import { Button } from "@/components/ui/button";
import { submitWtForm } from "@/lib/site-config";

const BOROUGHS = ["Brooklyn", "Queens", "Manhattan", "The Bronx", "Staten Island", "Outside NYC"];

/**
 * Stay-connected form built on the watermelon "floating-input" and
 * "checkbox-16" (consent) modules.
 */
export function StayConnectedForm() {
  const [consent, setConsent] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    data.set("email_consent", consent ? "yes" : "no");
    const result = await submitWtForm(data, {
      subject: "Keep me posted — Wellthrivea opening updates",
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
          Thank you — you&apos;re on the list!
        </p>
        <p className="mt-1 text-sm text-green-900/80">
          We&apos;ll be in touch with the opening date, the address reveal, and
          community events. Unsubscribe anytime.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <FloatingInput label="First name" name="first_name" autoComplete="given-name" />
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
          htmlFor="borough"
          className="mb-1.5 block text-sm font-medium text-muted-foreground"
        >
          Your borough (optional)
        </label>
        <select
          id="borough"
          name="borough"
          className="w-full rounded-lg border border-border bg-transparent px-4 py-3 outline-none transition-colors focus:border-primary"
          defaultValue=""
        >
          <option value="">Select a borough</option>
          {BOROUGHS.map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>
      </div>

      {/* Honeypot — humans never see this */}
      <div className="absolute -left-[9999px] h-0 overflow-hidden" aria-hidden>
        <label>
          Leave this field empty
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <Checkbox16
        label="Yes, send me Wellthrivea email updates"
        description="Opening announcements, hiring news, and community events. Unsubscribe anytime. We never sell your information."
        checked={consent}
        onCheckedChange={setConsent}
        required
      />

      <Button
        type="submit"
        disabled={!consent}
        className="brand-gradient w-full rounded-full py-6 font-heading text-base font-bold text-white hover:brightness-110 disabled:opacity-50"
      >
        Keep me posted
      </Button>

      <p className="text-xs leading-relaxed text-muted-foreground">
        No health information is requested or needed — please don&apos;t include
        any. See our{" "}
        <Link href="/legal/digital-privacy-policy" className="font-semibold text-brand-blue hover:underline">
          Digital Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}
