import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Bandage,
  FlaskConical,
  ShieldPlus,
  Stethoscope,
  FileText,
  Video,
  AlertTriangle,
  Check,
} from "lucide-react";
import { PageHead } from "@/components/site/page-head";
import { Notice } from "@/components/site/notice";

export const metadata: Metadata = {
  title: "Planned Services",
  description:
    "Planned walk-in services at Wellthrivea Urgent Care: everyday illness care, minor injuries, testing, vaccinations, physicals, and telehealth follow-up. Final services will be confirmed at opening.",
};

const SERVICES = [
  {
    icon: Stethoscope,
    tint: "text-brand-green",
    title: "Everyday illness",
    body: "Colds and flu, sore throat, cough, sinus and ear discomfort, pink eye, urinary symptoms, mild fevers, rashes, and similar non-emergency conditions.",
  },
  {
    icon: Bandage,
    tint: "text-brand-blue",
    title: "Minor injuries",
    body: "Minor cuts that may need attention, sprains and strains, minor burns, insect bites, and small wounds — evaluated, cleaned, and cared for.",
  },
  {
    icon: FlaskConical,
    tint: "text-brand-orange",
    title: "On-site testing",
    body: "Rapid testing for selected conditions (such as strep, flu, and COVID-19) and basic lab services. Your clinician will discuss which test is appropriate and how to interpret results.",
  },
  {
    icon: ShieldPlus,
    tint: "text-brand-green",
    title: "Vaccinations",
    body: "Routine and seasonal vaccinations, including flu shots, planned in accordance with current public-health guidance.",
  },
  {
    icon: FileText,
    tint: "text-brand-blue",
    title: "Physicals & forms",
    body: "School, camp, sports, and work physicals, plus help with the paperwork that goes with them.",
  },
  {
    icon: Video,
    tint: "text-brand-orange",
    title: "Telehealth follow-up",
    body: "Virtual follow-up visits for questions after your in-person visit, so recovery doesn't always require another trip.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHead
        badge="Planned services — confirmed list published at opening"
        title="What we plan to treat."
        sub="Wellthrivea Urgent Care will focus on urgent, non-life-threatening illnesses and injuries. Every service below is planned; the final list of services offered at our location will be verified and published before we open."
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5">
          <Notice variant="alert">
            <strong>Emergency? Don&apos;t wait here.</strong> For chest pain,
            difficulty breathing, stroke symptoms (face drooping, arm weakness,
            slurred speech), severe bleeding, major trauma, or any
            life-threatening condition, call <strong>911</strong> or go to the
            nearest emergency department immediately.
          </Notice>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(({ icon: Icon, tint, title, body }) => (
              <div
                key={title}
                className="rounded-3xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span className={`flex size-12 items-center justify-center rounded-2xl bg-muted ${tint}`}>
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 flex flex-wrap items-center gap-2 text-lg font-bold">
                  {title}
                  <span className="rounded-full bg-brand-orange-soft px-2.5 py-0.5 font-heading text-[10px] font-bold uppercase tracking-wider text-amber-700">
                    Planned
                  </span>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/60 py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-14 px-5 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-accent px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-[0.12em] text-brand-blue">
              Urgent care vs. emergency care
            </span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              Knowing where to go matters.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Urgent care fills the space between a primary-care appointment you
              can&apos;t get today and an emergency room you don&apos;t need.
              Here&apos;s a simple guide — when in doubt about a serious symptom,
              always choose 911 or the emergency department.
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                <h3 className="font-bold text-brand-green">Urgent care can help with</h3>
                <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground">
                  {[
                    "Cold, flu & sore throat",
                    "Minor cuts, sprains & strains",
                    "Earaches & sinus pressure",
                    "Mild fevers & rashes",
                    "Testing, vaccines & physicals",
                  ].map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <Check className="mt-0.5 size-4 shrink-0 text-brand-green" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                <h3 className="font-bold text-red-700">Call 911 / go to the ED for</h3>
                <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground">
                  {[
                    "Chest pain or pressure",
                    "Difficulty breathing",
                    "Stroke symptoms",
                    "Severe bleeding or trauma",
                    "Loss of consciousness",
                  ].map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <AlertTriangle className="mt-0.5 size-4 shrink-0 text-red-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <Image
            src="/img/child-care.jpg"
            alt="A clinician gently examining a smiling child's arm in a bright modern exam room"
            width={1344}
            height={752}
            className="rounded-3xl shadow-xl"
          />
        </div>
      </section>

      <section className="py-20 text-center">
        <div className="mx-auto max-w-2xl px-5">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Want to know the moment we open?
          </h2>
          <p className="mt-4 text-muted-foreground">
            The confirmed service list, hours, and address will go to our email
            list first.
          </p>
          <Link
            href="/contact"
            className="brand-gradient mt-8 inline-block rounded-full px-7 py-3.5 font-heading font-bold text-white shadow-md transition-[filter] hover:brightness-110"
          >
            Stay connected
          </Link>
        </div>
      </section>
    </>
  );
}
