import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  CalendarCheck,
  HeartHandshake,
  Home as HomeIcon,
  Leaf,
  MonitorSmartphone,
  ShieldCheck,
  Video,
} from "lucide-react";
import { ExploreSplit } from "@/components/site/explore-split";
import { NewsletterSignup } from "@/components/site/newsletter-signup";
import { Notice } from "@/components/site/notice";
import Accordion5 from "@/components/base-variants/accordion/accordion-5";

export const metadata: Metadata = {
  title:
    "Wellthrivea Health & Wellness Network — Coordinated Care. Better Health.",
  description:
    "Home care, wellness programs, behavioral health support, and telemedicine — coming soon to Brooklyn, and serving the greater five boroughs through virtual care and community outreach. Sign up for updates.",
};

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  name: "Wellthrivea Health & Wellness Network",
  alternateName: "Wellthrivea",
  slogan: "Coordinated Care. Better Health.",
  description:
    "A health and wellness network offering home care services, wellness programs, behavioral health support, chronic disease management, and telemedicine — coming soon to Brooklyn, and serving the greater five boroughs through virtual care and community outreach.",
  url: "https://wellthrivea.com/",
  email: "info@wellthrivea.com",
  areaServed: [
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
    title: "When and where are you launching?",
    content: (
      <p>
        Our in-person home base is coming to Brooklyn — the address
        and date will be announced here and to our email list as soon as
        they&apos;re finalized. Virtual care and community outreach are planned
        across the greater five boroughs.
      </p>
    ),
  },
  {
    value: "scope",
    title: "What services will Wellthrivea offer?",
    content: (
      <p>
        Our planned services include home care, wellness visits, chronic
        disease management, medication management, wound care, IV infusion
        therapy, behavioral health support, nutritional management, and
        telemedicine. Every service is confirmed and published before it
        launches. Wellthrivea provides non-emergency care — for a
        life-threatening emergency, always call 911 or go to the nearest
        emergency department.
      </p>
    ),
  },
  {
    value: "insurance",
    title: "Will you take my insurance?",
    content: (
      <p>
        We plan to participate with selected health plans, and we will publish
        the exact list of participating plans before services launch. Coverage,
        network status, copayments, and deductibles vary by plan — please
        confirm your benefits with your health plan before any visit. Self-pay
        patients will be able to request a Good Faith Estimate of expected
        charges.
      </p>
    ),
  },
];

const FEATURES = [
  {
    icon: HomeIcon,
    tint: "text-brand-green",
    title: "Care that comes to you",
    body: "Home care services are at the heart of our plan — skilled, respectful care where you're most comfortable: your own home.",
  },
  {
    icon: Video,
    tint: "text-brand-blue",
    title: "Virtual-first convenience",
    body: "Telemedicine visits are planned across the five boroughs, so distance and mobility never have to stand between you and your care team.",
  },
  {
    icon: Leaf,
    tint: "text-brand-green",
    title: "Whole-person wellness",
    body: "Wellness visits, nutritional management, and behavioral health support — because health is more than treating what hurts today.",
  },
  {
    icon: ShieldCheck,
    tint: "text-brand-orange",
    title: "Clear, honest billing",
    body: "Plain-language cost information, Good Faith Estimates for self-pay patients, and the surprise-billing protections you're entitled to under federal and New York law.",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }}
      />

      {/* ============ HERO ============ */}
      <section className="hero-surface relative overflow-hidden text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/35 bg-white/15 px-4 py-2 font-heading text-sm font-bold backdrop-blur-md">
              <span className="pulse-dot size-2.5 rounded-full bg-brand-green-bright" />
              Coming Soon · Brooklyn
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] !text-white md:text-6xl">
              Coordinated care.{" "}
              <span className="brand-gradient-text">Better health.</span>{" "}
              Rooted in Brooklyn.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-sky-100/85">
              Wellthrivea Health &amp; Wellness Network is bringing home care,
              wellness programs, behavioral health support, and telemedicine
              together under one roof — coming soon to serve Brooklyn
              and the greater five boroughs through virtual care
              and community outreach.
            </p>
            <div className="mt-8 flex flex-col items-start gap-2">
              <Link
                href="/contact"
                className="brand-gradient rounded-full px-7 py-3.5 font-heading font-bold text-white shadow-[0_10px_26px_rgba(0,114,188,.35)] transition-[filter] hover:brightness-110"
              >
                Get launch updates
              </Link>
              <div className="w-full max-w-lg">
                <ExploreSplit />
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/img/hero-building.jpg"
              alt="The Wellthrivea Health &amp; Wellness Network storefront at dusk, its leaf-and-figures logo lit above warm, welcoming windows"
              width={1448}
              height={1086}
              priority
              className="rounded-3xl border border-white/15 shadow-[0_24px_70px_rgba(2,20,35,.55)]"
            />
            <div className="absolute -top-4 right-6 hidden items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-xl backdrop-blur md:flex">
              <span className="brand-gradient flex size-9 items-center justify-center rounded-xl text-white">
                <CalendarCheck className="size-4.5" />
              </span>
              <span className="font-heading text-sm font-bold text-brand-navy">
                Virtual visits
                <small className="block font-sans text-xs font-medium text-muted-foreground">
                  Planned Mon–Fri, 9am–5pm EST
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
                  Brooklyn &amp; the five boroughs
                </small>
              </span>
            </div>
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl gap-3.5 px-5 pb-16 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Home-first care", "Planned home care services that meet you where you live, with dignity and respect."],
            ["Smart technology", "Telemedicine, digital scheduling, and secure records designed in from day one."],
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
              One network for the health of your whole life.
            </h2>
            <p className="mt-4 text-muted-foreground">
              A founding care team, a new Brooklyn home base, and technology
              chosen to connect your care — at home, online, and in the
              community.
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

      {/* ============ SERVICES PREVIEW ============ */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-brand-green-soft px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-[0.12em] text-brand-green">
              Planned services
            </span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              Care for your home, your mind, and your everyday health.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every service below is planned; each will be confirmed and
              published before it launches.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                img: "/img/telehealth.jpg",
                alt: "A woman at home receiving care support through a video visit on her tablet",
                title: "Home Care Services",
                href: "/home-care",
                body: "Skilled nursing, medication management, wound care, and chronic disease support — delivered where you live.",
                cta: "Explore home care →",
              },
              {
                img: "/img/lobby.jpg",
                alt: "A calm, welcoming modern care space with plants and natural light",
                title: "Behavioral Health Program",
                href: "/behavioral-health",
                body: "Compassionate, judgment-free behavioral health support that treats mental health as health, period.",
                cta: "Explore behavioral health →",
              },
              {
                img: "/img/wellness-workshop.jpg",
                alt: "A nutrition educator showing fresh vegetables to a diverse group at a community wellness workshop",
                title: "Wellness Program",
                href: "/wellness",
                body: "Wellness visits, nutritional management, and community health education across the five boroughs.",
                cta: "Explore wellness →",
              },
            ].map((card) => (
              <Link
                key={card.title}
                href={card.href}
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
                    {card.cta}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="inline-block rounded-full border border-border bg-white px-7 py-3.5 font-heading font-bold text-brand-navy shadow-sm transition-colors hover:border-brand-blue hover:text-brand-blue"
            >
              See everything we plan to offer
            </Link>
          </div>

          <Notice variant="alert" className="mx-auto mt-10 max-w-4xl">
            <strong>Know where to go:</strong> Wellthrivea provides
            non-emergency health and wellness services. For chest pain,
            difficulty breathing, stroke symptoms, severe bleeding, or any
            life-threatening emergency, call <strong>911</strong> or go to the
            nearest emergency department. In emotional crisis? Call or text{" "}
            <strong>988</strong>.
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
              A care network designed like it was built this decade.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Because it was. From telemedicine to our future Brooklyn home
              base, we&apos;re designing smart, human-centered technology in
              from the start — not bolting it on afterward.
            </p>
            <ul className="mt-6 space-y-3 text-muted-foreground">
              {[
                "Telemedicine visits planned across the five boroughs, with virtual hours published up front.",
                "Digital scheduling and check-in designed to respect your time.",
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
            alt="Modern smart care room with a wall-mounted health dashboard display and green accent wall"
            width={1344}
            height={752}
            className="rounded-3xl shadow-xl"
          />
        </div>
      </section>

      {/* ============ BROOKLYN ============ */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
          <Image
            src="/img/community-street.jpg"
            alt="Sunny tree-lined residential Brooklyn street with neighbors walking and chatting"
            width={1344}
            height={752}
            className="order-2 rounded-3xl shadow-xl lg:order-1"
          />
          <div className="order-1 lg:order-2">
            <span className="inline-block rounded-full bg-brand-green-soft px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-[0.12em] text-brand-green">
              Locations &amp; outreach
            </span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              Rooted in Brooklyn. Reaching all five boroughs.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our first home base will be in Brooklyn — one of the most wonderfully
              diverse places in New York. While we
              build, we&apos;re planning virtual care and community outreach
              across Brooklyn, Queens, Manhattan, the Bronx, and Staten Island.
            </p>
            <p className="mt-3 text-muted-foreground">
              The street address and launch date will be announced here and to
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
              We are actively building our founding care team: nurses, nurse
              practitioners, home health aides, behavioral health clinicians,
              care coordinators, and wellness educators who know and love this
              community. Verified names and credentials will be published here
              as the team is finalized.
            </p>
            <p className="mt-3 text-muted-foreground">
              Want to help shape a care network from day one?
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
            alt="A diverse team of six healthcare professionals in blue and green scrubs smiling in a modern hallway"
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
