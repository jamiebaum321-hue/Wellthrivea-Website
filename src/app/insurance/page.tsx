import type { Metadata } from "next";
import Link from "next/link";
import { PageHead } from "@/components/site/page-head";
import { PageFaq } from "@/components/site/page-faq";
import { Prose } from "@/components/site/prose";
import { Notice } from "@/components/site/notice";

export const metadata: Metadata = {
  title: "Insurance & Billing",
  description:
    "How insurance and billing will work at Wellthrivea Health & Wellness Network: planned health-plan participation, coverage verification, self-pay transparency, Good Faith Estimates, and surprise-billing protections.",
};

const PAGE_FAQ = [
  {
    value: "which",
    title: "Which plans will you accept?",
    content: <p>We plan to participate with selected health plans, and the exact list will be published on this page before services launch. Coverage and network status vary by plan, so please confirm your benefits with your plan before any visit.</p>,
  },
  {
    value: "gfe",
    title: "What is a Good Faith Estimate?",
    content: <p>If you are uninsured or choose not to use insurance, federal law gives you the right to a written estimate of expected charges before scheduled care. Our No Surprises Act page explains the right and how to use it.</p>,
  },
  {
    value: "dispute",
    title: "What if my bill is higher than expected?",
    content: <p>If your final bill is at least $400 more than your Good Faith Estimate, you may be able to dispute it through a federal dispute-resolution process. You can also contact us directly, and we will walk through the charges with you.</p>,
  },
] as const;


export default function InsurancePage() {
  return (
    <>
      <PageHead
        badge="Participating plans published before opening"
        title="Insurance & billing, in plain language."
        sub="Nobody should be surprised by a medical bill. Here's how coverage and costs will work at Wellthrivea — and the rights that protect you under federal and New York law."
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5">
          <Prose>
            <h2>Health-plan participation</h2>
            <p>
              We plan to participate with selected health plans. Because we have
              not yet opened, contracting with health plans is still in
              progress.{" "}
              <strong>
                Before we open, this page will list the exact names of every
                plan we participate with
              </strong>
              , and we will keep that list current as contracts change.
            </p>
            <Notice variant="info" className="my-6">
              <strong>Please verify your coverage.</strong> Coverage, network
              participation, copayments, deductibles, and covered services vary
              by plan. Once we announce our participating plans, please contact
              your health plan or our office to confirm your coverage before
              your visit.
            </Notice>

            <h2>Hospital affiliations</h2>
            <p>
              New York requires health-care practices to disclose their hospital
              affiliations before non-emergency services. Wellthrivea&apos;s
              affiliations, if any, will be published on this page
              and stated verbally when appointments are scheduled, before we
              begin seeing patients.
            </p>

            <h2>If we&apos;re not in your network</h2>
            <p>
              If we do not participate with your health plan, New York law
              entitles you to know what a visit may cost. You may request the
              amount or estimated amount we would bill for a service before
              receiving non-emergency care, and we will provide a written
              estimate upon request.
            </p>

            <h2>Self-pay and uninsured patients</h2>
            <p>
              You don&apos;t need insurance to be treated with transparency. If
              you are uninsured or choose not to use insurance:
            </p>
            <ul>
              <li>
                You may have the right to a <strong>Good Faith Estimate</strong>{" "}
                of expected charges before you receive care, under the federal
                No Surprises Act.
              </li>
              <li>
                Self-pay pricing information will be published before opening.
                Additional testing, imaging, procedures, medications, or
                supplies may cost extra — ask us for an estimate that reflects
                your visit.
              </li>
            </ul>
            <p>
              <Link href="/legal/no-surprises-act">
                Read about Good Faith Estimates and your No Surprises Act
                protections →
              </Link>
            </p>

            <h2>Protection from surprise bills</h2>
            <p>
              Federal law and New York law protect you from certain unexpected
              &quot;balance bills.&quot; You are never required to give up these
              protections, and you should never be asked to. Our full notice of
              these protections is published on our{" "}
              <Link href="/legal/no-surprises-act">No Surprises Act page</Link>.
            </p>

            <h2>Questions about a bill</h2>
            <p>
              Once we open, billing questions can be directed to our office by
              phone or email, and every statement will include contact
              information. Until then, general questions are welcome at{" "}
              <a href="mailto:info@wellthrivea.com">info@wellthrivea.com</a>.
            </p>

            <Notice variant="ok" className="my-6">
              <strong>Our commitment:</strong> clear cost information before
              care wherever the law requires it — and wherever it doesn&apos;t,
              too.
            </Notice>
          </Prose>
        </div>
      </section>

      <section className="bg-muted/60 py-20 text-center">
        <div className="mx-auto max-w-2xl px-5">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Get the participating-plan list when it publishes.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Join the email list and we&apos;ll send coverage and opening updates
            as they&apos;re finalized.
          </p>
          <Link
            href="/contact"
            className="brand-gradient mt-8 inline-block rounded-full px-7 py-3.5 font-heading font-bold text-white shadow-md transition-[filter] hover:brightness-110"
          >
            Stay connected
          </Link>
        </div>
      </section>
      <PageFaq items={PAGE_FAQ} title="Questions about insurance & billing" />
    </>
  );
}
