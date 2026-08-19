import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MailOpen, Phone, ShieldCheck } from "lucide-react";
import { PageHead } from "@/components/site/page-head";
import { Prose } from "@/components/site/prose";
import { Notice } from "@/components/site/notice";

export const metadata: Metadata = {
  title: "Anonymous Compliance Hotline",
  description:
    "Report compliance, privacy, safety, or billing concerns to Wellthrivea anonymously. No retaliation. Multiple confidential reporting channels.",
};

const CHANNELS = [
  {
    icon: Phone,
    title: "Anonymous phone hotline",
    body: "A 24/7 anonymous phone line operated independently of clinic management is being activated for our opening. The number will be published on this page and posted in the clinic.",
    status: "Activating before opening",
  },
  {
    icon: Mail,
    title: "Anonymous mail",
    body: "Write to: Wellthrivea — Compliance, PO Box 1585, New York, NY 10163. Don't include your name or return address if you wish to stay anonymous.",
    status: "Available now",
  },
  {
    icon: MailOpen,
    title: "Email",
    body: "Email info@wellthrivea.com with the subject \"Compliance.\" For anonymity, use an email account that doesn't identify you.",
    status: "Available now",
  },
];

export default function AnonymousHotlinePage() {
  return (
    <>
      <PageHead
        badge="Speak up — safely"
        title="Anonymous compliance hotline"
        sub="If something doesn't look right — a privacy concern, a safety issue, a billing practice, discrimination, or anything else — we want to know. You can tell us anonymously, and retaliation is prohibited."
      />

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-5 md:grid-cols-3">
            {CHANNELS.map(({ icon: Icon, title, body, status }) => (
              <div
                key={title}
                className="rounded-3xl border border-border bg-card p-7 shadow-sm"
              >
                <span className="flex size-12 items-center justify-center rounded-2xl bg-muted text-brand-blue">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {body}
                </p>
                <span className="mt-4 inline-block rounded-full bg-brand-green-soft px-3 py-1 font-heading text-[11px] font-bold uppercase tracking-wider text-brand-green">
                  {status}
                </span>
              </div>
            ))}
          </div>

          <Prose className="mt-12">
            <h2>What to report</h2>
            <ul>
              <li>Privacy or security concerns about health information</li>
              <li>Patient-safety or quality-of-care concerns</li>
              <li>Billing, coding, or insurance practices that seem improper</li>
              <li>Discrimination or violations of patient rights</li>
              <li>Fraud, theft, or misuse of resources</li>
              <li>Retaliation against anyone who raised a concern</li>
              <li>
                Anything else that seems inconsistent with our published
                policies or the law
              </li>
            </ul>

            <h2>What happens to a report</h2>
            <p>
              Every report is reviewed by our compliance function, investigated
              as appropriate, and addressed. If you identify yourself and ask
              for follow-up, we will respond. If you report anonymously, please
              include enough detail for us to investigate — dates, locations,
              and what you observed.
            </p>

            <h2>No retaliation — ever</h2>
            <p>
              Wellthrivea prohibits retaliation of any kind against patients,
              employees, or anyone else who raises a concern in good faith.
              Retaliation is itself a reportable violation.
            </p>

            <h2>Concerns you can also raise with regulators</h2>
            <ul>
              <li>
                <strong>Privacy (HIPAA):</strong> U.S. Department of Health and
                Human Services, Office for Civil Rights —{" "}
                <a href="https://www.hhs.gov/ocr/complaints" rel="noopener">
                  hhs.gov/ocr/complaints
                </a>
              </li>
              <li>
                <strong>Care quality in New York:</strong> NYS Department of
                Health —{" "}
                <a href="https://www.health.ny.gov" rel="noopener">
                  health.ny.gov
                </a>
              </li>
              <li>
                <strong>Discrimination:</strong> see our{" "}
                <Link href="/legal/non-discrimination">
                  Non-discrimination Statement
                </Link>{" "}
                for federal, state, and city channels
              </li>
              <li>
                <strong>Billing:</strong> see our{" "}
                <Link href="/legal/no-surprises-act">No Surprises Act page</Link>
              </li>
            </ul>
          </Prose>

          <Notice variant="alert" className="mt-8 max-w-3xl">
            <span className="flex gap-2.5">
              <ShieldCheck className="mt-0.5 size-5 shrink-0" />
              <span>
                <strong>This is not an emergency channel.</strong> For a medical
                emergency, call 911. For an immediate safety threat, call 911
                first — then tell us.
              </span>
            </span>
          </Notice>
        </div>
      </section>
    </>
  );
}
