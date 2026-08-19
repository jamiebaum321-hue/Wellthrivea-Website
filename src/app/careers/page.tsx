import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { PageHead } from "@/components/site/page-head";
import { CareersForm } from "@/components/site/careers-form";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Providers are coming soon — Wellthrivea Urgent Care is building its founding clinical and front-office team in Brooklyn. Learn about upcoming roles and express interest.",
};

const ROLES = [
  {
    title: "Physicians (MD/DO)",
    body: "Urgent-care or family/emergency-medicine trained physicians licensed in New York.",
  },
  {
    title: "Physician Assistants",
    body: "NCCPA-certified PAs with urgent care, primary care, or emergency experience.",
  },
  {
    title: "Nurse Practitioners",
    body: "NY-licensed NPs comfortable with walk-in acuity and a collaborative team model.",
  },
  {
    title: "Registered Nurses",
    body: "RNs who love variety, triage, and patient education.",
  },
  {
    title: "Medical Assistants",
    body: "Certified MAs for intake, vitals, point-of-care testing, and keeping the day moving.",
  },
  {
    title: "Front Office & Patient Experience",
    body: "The first faces of Wellthrivea — warm, organized, and multilingual candidates especially welcome.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHead
        badge="Now building our founding team"
        title={
          <>
            Providers — coming soon.
            <br />
            Builders — wanted now.
          </>
        }
        sub="Wellthrivea Urgent Care is hiring the founding team for our new Canarsie, Brooklyn clinic. Join us early enough to shape how a clinic should feel — for patients and for the people who care for them."
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-brand-green-soft px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-[0.12em] text-brand-green">
              Why join us
            </span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              Help design the clinic you always wished you worked in.
            </h2>
            <ul className="mt-6 space-y-3.5">
              {[
                ["A brand-new building:", "modern exam rooms, natural light, and equipment chosen by the team that will use it."],
                ["Technology that helps, not hinders:", "digital check-in and smart rooms designed to reduce administrative load, not add to it."],
                ["Community-first mission:", "local outreach across the five boroughs, with local hiring as a founding principle."],
                ["Founding-team voice:", "early hires help set clinical workflows, culture, and standards."],
              ].map(([strong, rest]) => (
                <li key={strong} className="flex gap-3 text-muted-foreground">
                  <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-green-soft text-brand-green">
                    <Check className="size-3" />
                  </span>
                  <span>
                    <strong className="text-foreground">{strong}</strong> {rest}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <Image
            src="/img/team.jpg"
            alt="A diverse healthcare team in green and blue scrubs standing together in a bright clinic hallway"
            width={1344}
            height={752}
            className="rounded-3xl shadow-xl"
          />
        </div>
      </section>

      <section className="bg-muted/60 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-accent px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-[0.12em] text-brand-blue">
              Upcoming roles
            </span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              Roles we&apos;re hiring for.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Formal postings with full descriptions, requirements, and
              compensation details are being finalized. Express interest now and
              we&apos;ll reach out as each role opens.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ROLES.map((r) => (
              <div
                key={r.title}
                className="rounded-3xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-lg font-bold">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {r.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-2xl px-5">
          <div className="rounded-[2rem] border border-border bg-card p-8 shadow-lg md:p-10">
            <h2 className="text-2xl font-extrabold md:text-3xl">Express interest</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Tell us who you are and the role you&apos;re interested in.
              We&apos;ll follow up as postings open. Please don&apos;t include
              any patient information or sensitive personal details.
            </p>
            <div className="mt-7">
              <CareersForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
