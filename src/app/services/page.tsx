import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Activity,
  Apple,
  Bandage,
  Brain,
  Droplets,
  HeartPulse,
  Home,
  Pill,
  Video,
} from "lucide-react";
import { PageHead } from "@/components/site/page-head";
import { PageFaq } from "@/components/site/page-faq";
import { Notice } from "@/components/site/notice";

export const metadata: Metadata = {
  title: "What We Do — Planned Services",
  description:
    "Planned services from Wellthrivea Health & Wellness Network: home care, telemedicine, wellness visits, chronic disease management, medication management, wound care, IV infusion therapy, behavioral health support, and nutritional management.",
};

const SERVICES = [
  {
    icon: Home,
    tint: "text-brand-green",
    title: "Home Care Services",
    href: "/home-care",
    body: "Skilled, compassionate care delivered where you live — the heart of the Wellthrivea network.",
  },
  {
    icon: Video,
    tint: "text-brand-blue",
    title: "Telemedicine",
    body: "Virtual visits planned across the five boroughs, with published virtual hours (Monday–Friday, 9am–5pm EST planned).",
  },
  {
    icon: HeartPulse,
    tint: "text-brand-orange",
    title: "Wellness Visits",
    href: "/wellness",
    body: "Preventive check-ins focused on keeping you well — screenings, health goals, and early conversations, not just sick care.",
  },
  {
    icon: Activity,
    tint: "text-brand-blue",
    title: "Chronic Disease Management",
    body: "Ongoing support for conditions like diabetes, hypertension, and asthma — coordinated between visits, not just during them.",
  },
  {
    icon: Pill,
    tint: "text-brand-green",
    title: "Medication Management",
    body: "Help organizing, understanding, and safely taking your medications — including reviews for interactions and duplications.",
  },
  {
    icon: Bandage,
    tint: "text-brand-orange",
    title: "Wound Care Services",
    body: "Skilled wound assessment, cleaning, dressing, and healing support, planned both in-home and at our future Brooklyn location.",
  },
  {
    icon: Droplets,
    tint: "text-brand-blue",
    title: "IV Infusion Therapy",
    body: "Clinician-administered IV therapy, planned where clinically appropriate and prescribed — details published before launch.",
  },
  {
    icon: Brain,
    tint: "text-brand-green",
    title: "Behavioral Health Support",
    href: "/behavioral-health",
    body: "Judgment-free support for mental and emotional health, connected to the rest of your care.",
  },
  {
    icon: Apple,
    tint: "text-brand-orange",
    title: "Nutritional Management",
    body: "Practical nutrition guidance and education that fits real kitchens, real budgets, and real Brooklyn life.",
  },
];

const PAGE_FAQ = [
  {
    value: "planned",
    title: "Why does everything say “planned”?",
    content: <p>Because it is. Wellthrivea has not begun providing services yet, and New York advertising rules require that we not present a service as available until it actually is. Each service is confirmed, with its details published here, before it launches.</p>,
  },
  {
    value: "referral",
    title: "Will I need a referral?",
    content: <p>Referral requirements vary by service and by health plan. We will publish exactly what each service requires — including any referral, prescription, or eligibility criteria — before that service launches.</p>,
  },
  {
    value: "together",
    title: "Do these services work together?",
    content: <p>That is the whole idea. With your consent, your care team shares one picture of your care, so a wellness visit, a home-care plan, and a telemedicine follow-up are not three disconnected conversations.</p>,
  },
] as const;


export default function ServicesPage() {
  return (
    <>
      <PageHead
        badge="Planned services — each confirmed and published before launch"
        title="What we do."
        sub="Wellthrivea Health & Wellness Network is bringing coordinated, whole-person care to New York — at home, online, and in the community. Every service below is planned; the confirmed list will be published as services launch."
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5">
          <Notice variant="alert">
            <strong>Emergencies go to 911.</strong> Wellthrivea provides
            non-emergency health and wellness services. For chest pain,
            difficulty breathing, stroke symptoms, severe bleeding, major
            trauma, or any life-threatening condition, call <strong>911</strong>{" "}
            or go to the nearest emergency department. In emotional crisis, call
            or text <strong>988</strong> for the Suicide &amp; Crisis Lifeline.
          </Notice>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(({ icon: Icon, tint, title, body, href }) => {
              const card = (
                <>
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
                  {href && (
                    <span className="mt-3 inline-block font-heading text-sm font-bold text-brand-blue">
                      Learn more →
                    </span>
                  )}
                </>
              );
              const className =
                "rounded-3xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg";
              return href ? (
                <Link key={title} href={href} className={className}>
                  {card}
                </Link>
              ) : (
                <div key={title} className={className}>
                  {card}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-muted/60 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-accent px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-[0.12em] text-brand-blue">
              How it fits together
            </span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              Coordinated care means your services talk to each other.
            </h2>
            <p className="mt-4 text-muted-foreground">
              A wound-care nurse who knows what your chronic-disease plan says.
              A wellness visit that flags a medication question before it
              becomes a problem. A telemedicine follow-up that already has your
              home-care notes. That&apos;s the network we&apos;re building —
              one care team, connected around you.
            </p>
            <p className="mt-3 text-muted-foreground">
              Your information moves only with your consent and under the
              protections described in our{" "}
              <Link href="/legal/notice-of-privacy-practices" className="font-semibold text-brand-blue hover:underline">
                Notice of Privacy Practices
              </Link>
              .
            </p>
          </div>
          <Image
            src="/img/child-care.jpg"
            alt="A clinician gently examining a smiling child's arm in a bright modern care room"
            width={1344}
            height={752}
            className="rounded-3xl shadow-xl"
          />
        </div>
      </section>

      <section className="py-20 text-center">
        <div className="mx-auto max-w-2xl px-5">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Want to know the moment services launch?
          </h2>
          <p className="mt-4 text-muted-foreground">
            The confirmed service list, virtual hours, and our Brooklyn address
            will go to our email list first.
          </p>
          <Link
            href="/contact"
            className="brand-gradient mt-8 inline-block rounded-full px-7 py-3.5 font-heading font-bold text-white shadow-md transition-[filter] hover:brightness-110"
          >
            Stay connected
          </Link>
        </div>
      </section>
      <PageFaq items={PAGE_FAQ} title="Questions about our services" />
    </>
  );
}
