import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  CalendarCheck,
  HeartHandshake,
  Home as HomeIcon,
  MonitorSmartphone,
  ShieldCheck,
  Smartphone,
  Video,
} from "lucide-react";
import { ExploreSplit } from "@/components/site/explore-split";
import { FacilityCarousel } from "@/components/site/facility-carousel";
import { NewsletterSignup } from "@/components/site/newsletter-signup";
import { Notice } from "@/components/site/notice";
import Accordion5 from "@/components/base-variants/accordion/accordion-5";

export const metadata: Metadata = {
  title: "Wellthrivea Urgent Care — Coming Soon to Canarsie, Brooklyn",
  description:
    "A new, modern walk-in urgent care for non-life-threatening illnesses and injuries is coming soon to Canarsie, Brooklyn — serving the greater five boroughs through community outreach. Sign up for opening updates.",
};

const CLINIC_JSONLD = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Wellthrivea Urgent Care",
  description:
    "A new walk-in urgent care clinic for non-life-threatening illnesses and injuries, coming soon to Canarsie, Brooklyn, serving the greater five boroughs through community outreach.",
  url: "https://wellthrivea.com/",
  email: "info@wellthrivea.com",
  areaServed: [
    { "@type": "Place", name: "Canarsie, Brooklyn, NY" },
    { "@type": "Place", name: "Brooklyn, NY" },
    { "@type": "Place", name: "Queens, NY" },
    { "@type": "Place", name: "Manhattan, NY" },
    { "@type": "Place", name: "The Bronx, NY" },
    { "@type": "Place", name: "Staten Island, NY" },
  ],
};

const FAQ_TEASER = [
  {
    value: "opening",
    title: "When and where are you opening?",
    content: (
      <p>
        We&apos;re preparing to open in Canarsie, Brooklyn. The exact address and
        opening date will be announced here and to our email list as soon as
        they&apos;re finalized. We&apos;ll also serve the greater five boroughs
        through community outreach.
      </p>
    ),
  },
  {
    value: "scope",
    title: "What will urgent care treat — and what should go to the ER?",
    content: (
      <p>
        Urgent care is for urgent, non-life-threatening illnesses and injuries —
        things like colds, flu, sore throats, minor cuts, and sprains. For chest
        pain, trouble breathing, stroke symptoms, severe bleeding, or any
        life-threatening emergency, call 911 or go to the nearest emergency
        department.
      </p>
    ),
  },
  {
    value: "insurance",
    title: "Will you take my insurance?",
    content: (
      <p>
        We plan to participate with selected health plans, and we will publish
        the exact list of participating plans before opening. Coverage, network
        status, copayments, and deductibles vary by plan — please confirm your
        benefits with your health plan before any visit. Self-pay patients will
        be able to request a Good Faith Estimate of expected charges.
      </p>
    ),
  },
];

const FEATURES = [
  {
    icon: HomeIcon,
    tint: "text-brand-green",
    title: "Walk in, or plan ahead",
    body: "Walk-in visits are planned alongside online scheduling and a virtual queue, so you can spend more of your wait at home — subject to operating hours and capacity.",
  },
  {
    icon: Smartphone,
    tint: "text-brand-blue",
    title: "Check in digitally",
    body: "Self-service kiosks and phone check-in are part of the design — less paperwork at the desk, more time with the people caring for you.",
  },
  {
    icon: Video,
    tint: "text-brand-orange",
    title: "Telehealth-ready",
    body: "Virtual follow-ups are planned so that questions after a visit don't always mean another trip to the clinic.",
  },
  {
    icon: ShieldCheck,
    tint: "text-brand-green",
    title: "Clear, honest billing",
    body: "Plain-language cost information, Good Faith Estimates for self-pay patients, and the surprise-billing protections you're entitled to under federal and New York law.",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(CLINIC_JSONLD) }}
      />

      {/* ============ HERO ============ */}
      <section className="hero-surface relative overflow-hidden text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/35 bg-white/15 px-4 py-2 font-heading text-sm font-bold backdrop-blur-md">
              <span className="pulse-dot size-2.5 rounded-full bg-brand-green-bright" />
              Coming Soon · Canarsie, Brooklyn
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] !text-white md:text-6xl">
              A smarter kind of{" "}
              <span className="brand-gradient-text">urgent care</span> is coming
              to Brooklyn.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-sky-100/85">
              Wellthrivea Urgent Care is building a brand-new,
              technology-forward walk-in clinic for urgent, non-life-threatening
              illnesses and injuries — designed around you, your time, and your
              neighborhood. We&apos;re coming soon to serve Canarsie and the
              greater five boroughs through community outreach.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="brand-gradient rounded-full px-7 py-3.5 font-heading font-bold text-white shadow-[0_10px_26px_rgba(0,114,188,.35)] transition-[filter] hover:brightness-110"
              >
                Get opening updates
              </Link>
              <div className="min-w-[260px]">
                <ExploreSplit />
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/img/hero-building.jpg"
              alt="Rendering of the new Wellthrivea Urgent Care building planned for Brooklyn, glowing at dusk"
              width={1280}
              height={723}
              priority
              className="rounded-3xl border border-white/15 shadow-[0_24px_70px_rgba(2,20,35,.55)]"
            />
            <div className="absolute -top-4 right-6 hidden items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-xl backdrop-blur md:flex">
              <span className="brand-gradient flex size-9 items-center justify-center rounded-xl text-white">
                <CalendarCheck className="size-4.5" />
              </span>
              <span className="font-heading text-sm font-bold text-brand-navy">
                Digital check-in
                <small className="block font-sans text-xs font-medium text-muted-foreground">
                  Planned for opening day
                </small>
              </span>
            </div>
            <div className="absolute -bottom-5 -left-3 hidden items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-xl backdrop-blur md:flex">
              <span className="brand-gradient flex size-9 items-center justify-center rounded-xl text-white">
                <HeartHandshake className="size-4.5" />
              </span>
              <span className="font-heading text-sm font-bold text-brand-navy">
                Care built for community
                <small className="block font-sans text-xs font-medium text-muted-foreground">
                  Canarsie &amp; the five boroughs
                </small>
              </span>
            </div>
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl gap-3.5 px-5 pb-16 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Walk-in friendly", "Planned walk-in visits plus online scheduling, subject to hours and capacity."],
            ["Smart technology", "Digital check-in, smart exam rooms, and telehealth-ready follow-up in the design."],
            ["Transparent billing", "Good Faith Estimates and clear pricing information for self-pay patients."],
            ["Privacy first", "No ad pixels or analytics trackers on this website. Your visit here stays yours."],
          ].map(([title, body]) => (
            <div
              key={title}
              className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-md"
            >
              <b className="font-heading text-white">{title}</b>
              <span className="mt-1 block text-sm leading-snug text-sky-200/75">
                {body}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ============ WHAT WE'RE BUILDING ============ */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-accent px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-[0.12em] text-brand-blue">
              What we&apos;re building
            </span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              Urgent care, rethought from the front door in.
            </h2>
            <p className="mt-4 text-muted-foreground">
              A brand-new space, a founding clinical team, and technology chosen
              to make an unplanned sick day feel a little less stressful.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map(({ icon: Icon, tint, title, body }) => (
              <div
                key={title}
                className="rounded-3xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span className={`flex size-12 items-center justify-center rounded-2xl bg-muted ${tint}`}>
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FACILITY TOUR (carousel-navigator module) ============ */}
      <section className="bg-muted/60 py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-brand-green-soft px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-[0.12em] text-brand-green">
              Sneak peek
            </span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              Take the tour before the doors open.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Concept designs for the new building and the experience inside it.
            </p>
          </div>
          <div className="mt-10">
            <FacilityCarousel />
          </div>
        </div>
      </section>

      {/* ============ SERVICES PREVIEW ============ */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-brand-green-soft px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-[0.12em] text-brand-green">
              Planned services
            </span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              Care for the moments that can&apos;t wait for next week.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our planned services focus on urgent, non-life-threatening
              illnesses and injuries. The final service list will be confirmed
              and published before we open.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                img: "/img/child-care.jpg",
                alt: "A clinician in blue scrubs gently examining a smiling child's arm while the child's mother looks on",
                title: "Everyday illness & minor injuries",
                body: "Colds, flu, sore throats, earaches, minor cuts, sprains, and the other things that interrupt real life.",
              },
              {
                img: "/img/lobby.jpg",
                alt: "Bright modern urgent care lobby with digital self-check-in kiosks and a plant wall",
                title: "Testing, vaccines & physicals",
                body: "On-site rapid testing, routine vaccinations, and school, camp, and work physicals are all part of the plan.",
              },
              {
                img: "/img/telehealth.jpg",
                alt: "A woman at home having a telehealth video visit with a clinician on a tablet",
                title: "Telehealth follow-up",
                body: "Virtual visits for follow-up questions and care coordination, designed to fit around your day.",
              },
            ].map((card) => (
              <Link
                key={card.title}
                href="/services"
                className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={card.img}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="flex items-center gap-2 text-lg font-bold">
                    {card.title}
                    <span className="rounded-full bg-brand-orange-soft px-2.5 py-0.5 font-heading text-[10px] font-bold uppercase tracking-wider text-amber-700">
                      Planned
                    </span>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {card.body}
                  </p>
                  <span className="mt-3 inline-block font-heading text-sm font-bold text-brand-blue">
                    Explore planned services →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <Notice variant="alert" className="mx-auto mt-10 max-w-4xl">
            <strong>Know where to go:</strong> urgent care treats urgent,
            non-life-threatening conditions. For chest pain, difficulty
            breathing, stroke symptoms, severe bleeding, or any life-threatening
            emergency, call <strong>911</strong> or go to the nearest emergency
            department.
          </Notice>
        </div>
      </section>

      {/* ============ TECHNOLOGY ============ */}
      <section className="bg-muted/60 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-accent px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-[0.12em] text-brand-blue">
              Smart care technology
            </span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              A clinic designed like it was built this decade.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Because it was. From the ground up, our new space is being
              designed around smart, human-centered technology — not bolted on
              afterward.
            </p>
            <ul className="mt-6 space-y-3 text-muted-foreground">
              {[
                "Smart exam rooms with digital displays that keep you in the loop during your visit.",
                "Electronic prescriptions planned to be sent to your preferred pharmacy before you're out the door.",
                "Secure digital records, so your information follows your care — not a clipboard.",
                "A privacy-first website: no advertising pixels, no analytics trackers, no session recording.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-green-soft text-brand-green">
                    <MonitorSmartphone className="size-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/technology"
              className="brand-gradient mt-8 inline-block rounded-full px-7 py-3.5 font-heading font-bold text-white shadow-md transition-[filter] hover:brightness-110"
            >
              See the full technology vision
            </Link>
          </div>
          <Image
            src="/img/exam-room.jpg"
            alt="Modern smart exam room with a wall-mounted health dashboard display and green accent wall"
            width={1344}
            height={752}
            className="rounded-3xl shadow-xl"
          />
        </div>
      </section>

      {/* ============ CANARSIE ============ */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
          <Image
            src="/img/canarsie-street.jpg"
            alt="Sunny tree-lined residential street in Canarsie, Brooklyn with neighbors walking and chatting"
            width={1344}
            height={752}
            className="order-2 rounded-3xl shadow-xl lg:order-1"
          />
          <div className="order-1 lg:order-2">
            <span className="inline-block rounded-full bg-brand-green-soft px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-[0.12em] text-brand-green">
              Locations &amp; outreach
            </span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              Rooted in Canarsie. Reaching all five boroughs.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our first home will be in Canarsie, Brooklyn — one of the most
              wonderfully diverse neighborhoods in New York. While we finish
              building, our team is planning community outreach across Brooklyn,
              Queens, Manhattan, the Bronx, and Staten Island.
            </p>
            <p className="mt-3 text-muted-foreground">
              The street address and opening date will be announced here and to
              our email list first.
            </p>
            <Link
              href="/locations"
              className="mt-8 inline-block rounded-full border border-border bg-white px-7 py-3.5 font-heading font-bold text-brand-navy shadow-sm transition-colors hover:border-brand-blue hover:text-brand-blue"
            >
              Locations &amp; outreach plans
            </Link>
          </div>
        </div>
      </section>

      {/* ============ TEAM / CAREERS ============ */}
      <section className="bg-muted/60 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-brand-orange-soft px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-[0.12em] text-amber-700">
              Our team
            </span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              Providers — coming soon.
            </h2>
            <p className="mt-4 text-muted-foreground">
              We are actively building our founding clinical team: physicians,
              physician assistants, nurse practitioners, nurses, medical
              assistants, and front-office staff who know and love this
              community. Verified provider names and credentials will be
              published here as the team is finalized.
            </p>
            <p className="mt-3 text-muted-foreground">
              Are you a clinician who wants to help shape a clinic from day one?
            </p>
            <Link
              href="/careers"
              className="brand-gradient mt-8 inline-block rounded-full px-7 py-3.5 font-heading font-bold text-white shadow-md transition-[filter] hover:brightness-110"
            >
              Explore careers at Wellthrivea
            </Link>
          </div>
          <Image
            src="/img/team.jpg"
            alt="A diverse team of six healthcare professionals in blue and green scrubs smiling in a modern clinic hallway"
            width={1344}
            height={752}
            className="rounded-3xl shadow-xl"
          />
        </div>
      </section>

      {/* ============ EMAIL SIGNUP (newsletter-3 module) ============ */}
      <NewsletterSignup />

      {/* ============ FAQ TEASER (accordion-5 module) ============ */}
      <section className="bg-muted/60 py-20">
        <div className="mx-auto max-w-3xl px-5">
          <div className="text-center">
            <span className="inline-block rounded-full bg-accent px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-[0.12em] text-brand-blue">
              Questions
            </span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              The short version.
            </h2>
          </div>
          <div className="mt-8">
            <Accordion5 items={FAQ_TEASER} defaultOpenFirst />
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-block rounded-full border border-border bg-white px-7 py-3.5 font-heading font-bold text-brand-navy shadow-sm transition-colors hover:border-brand-blue hover:text-brand-blue"
            >
              Read all FAQs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
