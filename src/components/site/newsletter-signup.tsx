"use client";

import { useState } from "react";
import Link from "next/link";
import Newsletter3 from "@/components/watermelon-ui/newsletter-3";
import { submitWtForm, CONTACT_EMAIL } from "@/lib/site-config";

/**
 * Email capture built on the watermelon "newsletter-3" module.
 * With no form endpoint configured it opens a pre-filled email draft in the
 * visitor's own mail app, so no visitor data is transmitted by this site.
 */
export function NewsletterSignup() {
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    data.set("request", "Add me to the Wellthrivea opening-updates email list");
    const result = await submitWtForm(data, {
      subject: "Keep me posted — Wellthrivea opening updates",
      mailto: CONTACT_EMAIL,
    });
    if (result !== "error") setDone(true);
  };

  if (done) {
    return (
      <section className="bg-background flex w-full items-center justify-center py-12 md:py-14">
        <div
          role="status"
          className="mx-5 max-w-lg rounded-2xl border border-green-200 bg-brand-green-soft px-7 py-5 text-center"
        >
          <p className="font-heading text-base font-bold text-green-950">
            Thank you — you&apos;re on the list!
          </p>
          <p className="mt-1 text-sm text-green-900/80">
            We&apos;ll be in touch with the opening date, the address reveal, and
            community events. Unsubscribe anytime.
          </p>
        </div>
      </section>
    );
  }

  return (
    <div>
      <Newsletter3
        badgeText="Stay Connected"
        heading="Be first through the door."
        description="Launch news, hiring announcements, and community events — straight to your inbox. Please don't include health information."
        placeholder="you@example.com"
        privacyPrefix="We'll only use your email for Wellthrivea updates, and you can unsubscribe anytime — "
        privacyLinkText="Digital Privacy Policy"
        privacyLinkHref="/legal/digital-privacy-policy"
        onSubmit={handleSubmit}
      />
      <p className="sr-only">
        See our <Link href="/legal/digital-privacy-policy">privacy policy</Link>.
      </p>
    </div>
  );
}
