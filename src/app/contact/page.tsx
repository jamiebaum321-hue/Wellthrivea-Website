import type { Metadata } from "next";
import Link from "next/link";
import { PageHead } from "@/components/site/page-head";
import { Notice } from "@/components/site/notice";
import { StayConnectedForm } from "@/components/site/stay-connected-form";
import { CopyEmail } from "@/components/site/copy-email";

export const metadata: Metadata = {
  title: "Contact & Stay Connected",
  description:
    "Stay connected with Wellthrivea Health & Wellness Network — sign up for launch updates, or reach us by email, fax, or mail. Please do not include personal health information.",
};

export default function ContactPage() {
  return (
    <>
      <PageHead
        badge="We'd love to hear from you"
        title="Stay connected."
        sub="Sign up for opening updates, ask a general question, or start a community partnership. One important note: please don't include personal health information in any message — this site is not for medical questions or care."
      />

      <section className="py-16" id="connect">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-brand-green-soft px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-[0.12em] text-brand-green">
              Email updates
            </span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              Be first to know.
            </h2>
            <p className="mt-4 text-muted-foreground">
              The opening date, the address reveal, hiring announcements, and
              outreach events — our email list hears everything first.
            </p>
            <div className="mt-7 rounded-[2rem] border border-border bg-card p-7 shadow-lg md:p-8">
              <StayConnectedForm />
            </div>
          </div>

          <div>
            <span className="inline-block rounded-full bg-accent px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-[0.12em] text-brand-blue">
              General inquiries
            </span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              Reach us directly.
            </h2>

            <div className="mt-7 rounded-3xl border border-border bg-card p-7 shadow-sm">
              <h3 className="text-lg font-bold">Contact details</h3>
              <div className="mt-4">
                <CopyEmail />
              </div>
              <ul className="mt-5 space-y-3 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Fax:</strong> (516) 620-3049
                </li>
                <li>
                  <strong className="text-foreground">Mail:</strong> Wellthrivea,
                  PO Box 1585, New York, NY 10163
                </li>
                <li>
                  <strong className="text-foreground">
                    Clinic address &amp; hours:
                  </strong>{" "}
                  to be announced before opening
                </li>
              </ul>
            </div>

            <div className="mt-5 rounded-3xl border border-border bg-card p-7 shadow-sm">
              <h3 className="text-lg font-bold">Who to contact for what</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>
                  <strong className="text-foreground">Careers:</strong> use the{" "}
                  <Link href="/careers" className="font-semibold text-brand-blue hover:underline">
                    careers form
                  </Link>
                </li>
                <li>
                  <strong className="text-foreground">
                    Community partnerships &amp; outreach:
                  </strong>{" "}
                  email with subject &quot;Partnership&quot;
                </li>
                <li>
                  <strong className="text-foreground">Press &amp; media:</strong>{" "}
                  email with subject &quot;Media&quot;
                </li>
                <li>
                  <strong className="text-foreground">Privacy questions:</strong>{" "}
                  see the{" "}
                  <Link href="/legal/notice-of-privacy-practices" className="font-semibold text-brand-blue hover:underline">
                    Notice of Privacy Practices
                  </Link>
                </li>
                <li>
                  <strong className="text-foreground">
                    Compliance or safety concerns:
                  </strong>{" "}
                  use the{" "}
                  <Link href="/legal/anonymous-hotline" className="font-semibold text-brand-blue hover:underline">
                    anonymous hotline
                  </Link>{" "}
                  — anonymously if you prefer
                </li>
              </ul>
            </div>

            <Notice variant="alert" className="mt-5">
              <strong>Please note:</strong> this website and these contact
              channels are not monitored for medical issues and cannot provide
              medical advice. If you are experiencing a life-threatening
              emergency, call <strong>911</strong> or go to the nearest
              emergency department.
            </Notice>
          </div>
        </div>
      </section>
    </>
  );
}
