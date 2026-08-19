import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { HeartHandshake, Lock, Users, Video } from "lucide-react";
import { PageHead } from "@/components/site/page-head";
import { PageFaq } from "@/components/site/page-faq";
import { Notice } from "@/components/site/notice";

export const metadata: Metadata = {
  title: "Behavioral Health Program",
  description:
    "Wellthrivea's planned Behavioral Health Program: judgment-free mental and emotional health support, connected to the rest of your care — in person in Brooklyn and virtually across the five boroughs.",
};

const PILLARS = [
  {
    icon: HeartHandshake,
    tint: "text-brand-green",
    title: "Judgment-free by design",
    body: "Mental health is health. Our program is being designed so that asking for support feels as normal as asking about blood pressure.",
  },
  {
    icon: Video,
    tint: "text-brand-blue",
    title: "Virtual-first access",
    body: "Telehealth behavioral health support is planned across the five boroughs, so care can fit around work, family, and transit reality.",
  },
  {
    icon: Users,
    tint: "text-brand-orange",
    title: "Connected to your whole care",
    body: "Behavioral health works best when it isn't siloed. With your consent, your support plan connects to your wellness and medical care.",
  },
  {
    icon: Lock,
    tint: "text-brand-blue",
    title: "Extra-protected privacy",
    body: "New York and federal law give mental-health information special protection — and our privacy practices are published for anyone to read.",
  },
];

const PAGE_FAQ = [
  {
    value: "crisis",
    title: "What should I do if I need help right now?",
    content: <p>Please do not wait for us. Call or text 988 for the Suicide &amp; Crisis Lifeline — free, confidential, 24/7 — or call 911 for a life-threatening emergency. This website is not a crisis service.</p>,
  },
  {
    value: "private",
    title: "Is behavioral health information kept private?",
    content: <p>Yes, and New York law gives mental-health information additional protection beyond standard HIPAA rules. Our Notice of Privacy Practices explains how sensitive information is handled and the authorizations required before it is shared.</p>,
  },
  {
    value: "virtual",
    title: "Will support be available virtually?",
    content: <p>Telehealth behavioral health support is planned across the five boroughs, so care can fit around work, family, and travel realities. Details will be confirmed before the program launches.</p>,
  },
] as const;


export default function BehavioralHealthPage() {
  return (
    <>
      <PageHead
        badge="Planned program — details published before launch"
        title="Behavioral health, without the barriers."
        sub="Wellthrivea's Behavioral Health Program is being designed to make mental and emotional health support approachable, private, and connected to the rest of your care — in person in Brooklyn and virtually across the five boroughs."
      />

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-5">
          <Notice variant="alert">
            <strong>If you are in crisis right now:</strong> call or text{" "}
            <strong>988</strong> to reach the Suicide &amp; Crisis Lifeline
            (24/7, free, confidential), or chat at{" "}
            <a href="https://988lifeline.org" rel="noopener">988lifeline.org</a>.
            For a life-threatening emergency, call <strong>911</strong>. NYC
            residents can also reach NYC 988 for local crisis support. This
            website is not a crisis service.
          </Notice>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-brand-green-soft px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-[0.12em] text-brand-green">
              Why this program
            </span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              Support shouldn&apos;t require a crisis first.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Too often, behavioral health care only becomes available when
              things have already fallen apart. We&apos;re designing our
              program for the moments before that — stress that won&apos;t
              lift, sleep that won&apos;t come, grief, anxiety, the weight of
              caregiving — with support that meets people early and with
              respect.
            </p>
            <p className="mt-3 text-muted-foreground">
              The program&apos;s specific services, clinician roster, and
              scheduling details will be confirmed and published before launch,
              alongside our other planned services.
            </p>
          </div>
          <Image
            src="/img/lobby.jpg"
            alt="A calm, welcoming modern care space with plants and soft natural light"
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
              Program pillars
            </span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              How we&apos;re designing behavioral health support.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map(({ icon: Icon, tint, title, body }) => (
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
          <p className="mx-auto mt-9 max-w-3xl text-center text-sm text-muted-foreground">
            Mental-health information receives special legal protection in New
            York. Read our{" "}
            <Link href="/legal/notice-of-privacy-practices" className="font-semibold text-brand-blue hover:underline">
              Notice of Privacy Practices
            </Link>{" "}
            for how sensitive information is handled.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-5">
          <div className="text-center">
            <span className="inline-block rounded-full bg-brand-orange-soft px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-[0.12em] text-amber-700">
              While you wait
            </span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              Free support that exists today.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our program is still being built — but no one should wait alone.
              These free, established resources are available right now:
            </p>
          </div>
          <ul className="mt-8 space-y-4 rounded-3xl border border-border bg-card p-8 text-muted-foreground shadow-sm">
            <li>
              <strong className="text-foreground">988 Suicide &amp; Crisis Lifeline:</strong>{" "}
              call or text 988, or chat at{" "}
              <a href="https://988lifeline.org" rel="noopener" className="font-semibold text-brand-blue hover:underline">988lifeline.org</a>{" "}
              — 24/7, free, confidential.
            </li>
            <li>
              <strong className="text-foreground">NYC 988:</strong> New York
              City&apos;s connection to free, confidential mental health
              support in 200+ languages —{" "}
              <a href="https://nyc988.cityofnewyork.us" rel="noopener" className="font-semibold text-brand-blue hover:underline">nyc988.cityofnewyork.us</a>.
            </li>
            <li>
              <strong className="text-foreground">NYS Office of Mental Health:</strong>{" "}
              find licensed providers and programs at{" "}
              <a href="https://omh.ny.gov" rel="noopener" className="font-semibold text-brand-blue hover:underline">omh.ny.gov</a>.
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-muted/60 py-20 text-center">
        <div className="mx-auto max-w-2xl px-5">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Hear when the program opens.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Program details, clinicians, and how to get started — announced to
            our email list first. Behavioral health clinicians interested in
            joining the founding team are warmly invited to reach out.
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
              Clinician careers
            </Link>
          </div>
        </div>
      </section>
      <PageFaq items={PAGE_FAQ} title="Questions about behavioral health" />
    </>
  );
}
