import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import { PageHead } from "@/components/site/page-head";
import { PageFaq } from "@/components/site/page-faq";
import { Notice } from "@/components/site/notice";

export const metadata: Metadata = {
  title: "Home Care Services",
  description:
    "Planned home care services from Wellthrivea Health & Wellness Network: skilled nursing, medication management, wound care, and chronic disease support — delivered where you live, in Brooklyn and beyond.",
};

const SERVICES = [
  {
    title: "Skilled nursing visits",
    body: "Assessments, care planning, and hands-on nursing support in your own home, on a schedule built around your needs.",
  },
  {
    title: "Medication management",
    body: "Reviews of everything you take, help organizing doses, and plain-language answers about what each medication does.",
  },
  {
    title: "Wound care",
    body: "Skilled wound assessment, cleaning, dressing changes, and healing progress tracked visit to visit.",
  },
  {
    title: "Chronic disease support",
    body: "In-home monitoring and coaching for conditions like diabetes, hypertension, COPD, and heart disease.",
  },
  {
    title: "Post-discharge transitions",
    body: "Support in the fragile weeks after a hospital stay — the window where good home care matters most.",
  },
  {
    title: "Caregiver support & education",
    body: "Training and respite guidance for the family members who carry so much of the care load.",
  },
];

const PAGE_FAQ = [
  {
    value: "area",
    title: "Where will home care be available?",
    content: <p>Home care is planned to begin in the Brooklyn area, with the exact service map published at launch. Virtual support is planned across the greater five boroughs.</p>,
  },
  {
    value: "who",
    title: "Who will come to my home?",
    content: <p>Licensed and certified members of our care team — such as registered nurses, licensed practical nurses, and home health aides. Every team member is verified before they are published on this site or sent to a home.</p>,
  },
  {
    value: "cost",
    title: "How much will home care cost?",
    content: <p>Costs depend on your health plan and the services you need. We will publish participating plans before launch, and self-pay patients can request a Good Faith Estimate of expected charges in advance.</p>,
  },
] as const;


export default function HomeCarePage() {
  return (
    <>
      <PageHead
        badge="Planned service line — details published before launch"
        title="Care that comes home to you."
        sub="Home care is the heart of the Wellthrivea network: skilled, respectful, culturally aware care delivered where people actually live their lives — starting with the Brooklyn area and reaching the greater five boroughs."
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-brand-green-soft px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-[0.12em] text-brand-green">
              Why home care
            </span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              The best care setting is often your own kitchen table.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Recovery goes better where people feel safe. Chronic conditions
              are managed in kitchens and medicine cabinets, not waiting rooms.
              And for many of our neighbors — older adults, new parents, people
              managing mobility challenges — getting to care is the hardest
              part of getting care.
            </p>
            <p className="mt-3 text-muted-foreground">
              That&apos;s why Wellthrivea is being built home-first: a care
              team that comes to you, connected to telemedicine and to our
              future Brooklyn home base, so nothing about your health gets lost
              between settings.
            </p>
          </div>
          <Image
            src="/img/telehealth.jpg"
            alt="A woman at home connecting with her care team through a video visit on her tablet"
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
              Planned home care services
            </span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              What our home care team will offer.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Each service is planned and will be confirmed — with service
              areas, eligibility, and any referral requirements — before it
              launches.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="rounded-3xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="flex flex-wrap items-center gap-2 text-lg font-bold">
                  {s.title}
                  <span className="rounded-full bg-brand-orange-soft px-2.5 py-0.5 font-heading text-[10px] font-bold uppercase tracking-wider text-amber-700">
                    Planned
                  </span>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
          <Image
            src="/img/community-street.jpg"
            alt="Sunny residential Brooklyn street where Wellthrivea's home care service will begin"
            width={1344}
            height={752}
            className="order-2 rounded-3xl shadow-xl lg:order-1"
          />
          <div className="order-1 lg:order-2">
            <span className="inline-block rounded-full bg-brand-orange-soft px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-[0.12em] text-amber-700">
              How it will work
            </span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              Simple to start, human throughout.
            </h2>
            <ul className="mt-6 space-y-3.5">
              {[
                ["Reach out:", "once we launch, request home care online, by phone, or through a clinician referral."],
                ["Meet your nurse:", "a first visit to understand your health, your home, and your goals."],
                ["Get a plan:", "a clear written care plan — what happens, how often, and what it costs, before care begins."],
                ["Stay connected:", "telemedicine check-ins between visits, and one team that shares your information only with your consent."],
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
            <Notice variant="info" className="mt-7">
              <strong>Service area:</strong> home care is planned to begin in
              the Brooklyn area, with the exact coverage map published at
              launch. Virtual support is planned across the greater five
              boroughs.
            </Notice>
          </div>
        </div>
      </section>

      <section className="bg-muted/60 py-20 text-center">
        <div className="mx-auto max-w-2xl px-5">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Be first to know when home care launches.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Join the email list for the launch date, service area, and how to
            request care — or ask about joining the home care team.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="brand-gradient rounded-full px-7 py-3.5 font-heading font-bold text-white shadow-md transition-[filter] hover:brightness-110"
            >
              Stay connected
            </Link>
            <Link
              href="/careers"
              className="rounded-full border border-border bg-white px-7 py-3.5 font-heading font-bold text-brand-navy shadow-sm transition-colors hover:border-brand-blue hover:text-brand-blue"
            >
              Join the home care team
            </Link>
          </div>
        </div>
      </section>
      <PageFaq items={PAGE_FAQ} title="Questions about home care" />
    </>
  );
}
