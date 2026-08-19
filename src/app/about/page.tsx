import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Bell,
  Clock,
  HeartHandshake,
  Lock,
  Sparkles,
  Users,
} from "lucide-react";
import { PageHead } from "@/components/site/page-head";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Wellthrivea is building a new kind of neighborhood urgent care in Canarsie, Brooklyn — thoughtful walk-in care supported by smart technology and grounded in community.",
};

const VALUES = [
  {
    icon: Bell,
    tint: "text-brand-green",
    title: "Respect for your time",
    body: "Digital check-in, a planned virtual queue, and clear communication about what happens next — because waiting without information is the worst kind of waiting.",
  },
  {
    icon: HeartHandshake,
    tint: "text-brand-blue",
    title: "Care without judgment",
    body: "Everyone deserves to be heard, believed, and treated with dignity. We serve every neighbor, in a community proud of its diversity.",
  },
  {
    icon: Clock,
    tint: "text-brand-orange",
    title: "Honesty about costs",
    body: "Clear billing information before care, Good Faith Estimates for self-pay patients, and full surprise-billing protections under federal and New York law.",
  },
  {
    icon: Lock,
    tint: "text-brand-blue",
    title: "Privacy as a default",
    body: "Your health information is yours. Our website carries no ad pixels or trackers, and our privacy practices are published for anyone to read.",
  },
  {
    icon: Sparkles,
    tint: "text-brand-green",
    title: "Technology with a purpose",
    body: "We adopt technology when it makes care clearer, faster, or kinder — never for its own sake, and never at the expense of your privacy.",
  },
  {
    icon: Users,
    tint: "text-brand-orange",
    title: "Rooted in the neighborhood",
    body: "We're planning outreach, health education, and local hiring across the five boroughs — because a clinic should give back to the community that welcomes it.",
  },
];

const ROADMAP = [
  {
    title: "Designing the space",
    body: "A brand-new clinic building is being designed for Canarsie — bright, accessible, and built around smart-care technology from day one.",
  },
  {
    title: "Hiring the founding team",
    body: "Provider and staff hiring is underway. Verified names and credentials will be published as the roster is finalized.",
  },
  {
    title: "Finalizing services & health plans",
    body: "The confirmed service list and participating health plans will be published on this site before we open our doors.",
  },
  {
    title: "Opening day",
    body: "The address and date will be announced here — and to our email list first.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHead
        badge="Coming Soon · Canarsie, Brooklyn"
        title="Care that starts with community."
        sub="Wellthrivea is building a new kind of neighborhood urgent care — a brand-new space, a founding team, and technology chosen to make getting care simpler, clearer, and more human."
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-brand-green-soft px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-[0.12em] text-brand-green">
              Our mission
            </span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              Strengthen the health of our community.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Wellthrivea&apos;s mission is to strengthen the health of our
              community by making quality care for everyday illness and injury
              accessible, understandable, and welcoming — starting in Canarsie,
              Brooklyn, and reaching across the greater five boroughs through
              outreach.
            </p>
            <p className="mt-3 text-muted-foreground">
              We believe an unplanned sick day shouldn&apos;t come with confusion
              about where to go, what it costs, or whether you&apos;ll be treated
              with respect. Those are design problems — and we&apos;re designing
              for them.
            </p>
          </div>
          <Image
            src="/img/lobby.jpg"
            alt="Bright modern clinic lobby with a curved reception desk, digital kiosks, and a living plant wall"
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
              What we stand for
            </span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              Our values, in plain language.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map(({ icon: Icon, tint, title, body }) => (
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

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
          <Image
            src="/img/team.jpg"
            alt="A diverse founding care team of six professionals in green and blue scrubs in a bright clinic hallway"
            width={1344}
            height={752}
            className="order-2 rounded-3xl shadow-xl lg:order-1"
          />
          <div className="order-1 lg:order-2">
            <span className="inline-block rounded-full bg-brand-orange-soft px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-[0.12em] text-amber-700">
              Our team
            </span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              Meet the team — soon.
            </h2>
            <p className="mt-4 text-muted-foreground">
              We are actively hiring our founding clinical team. In keeping with
              New York&apos;s professional advertising rules, we will only
              publish provider names, credentials, and board certifications once
              they are verified — so this page will grow as the team does.
            </p>
            <ul className="mt-5 list-disc space-y-2 pl-5 text-muted-foreground">
              <li>Physicians, physician assistants, and nurse practitioners</li>
              <li>Registered nurses and medical assistants</li>
              <li>Front-office and patient-experience staff</li>
            </ul>
            <Link
              href="/careers"
              className="brand-gradient mt-8 inline-block rounded-full px-7 py-3.5 font-heading font-bold text-white shadow-md transition-[filter] hover:brightness-110"
            >
              See open opportunities
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-muted/60 py-20">
        <div className="mx-auto max-w-3xl px-5">
          <div className="text-center">
            <span className="inline-block rounded-full bg-accent px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-[0.12em] text-brand-blue">
              The road to opening
            </span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              Where we are right now.
            </h2>
          </div>
          <ol className="mt-10 space-y-7">
            {ROADMAP.map((step, i) => (
              <li key={step.title} className="flex gap-5">
                <span className="brand-gradient flex size-12 shrink-0 items-center justify-center rounded-2xl font-heading font-extrabold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-bold">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {step.body}{" "}
                    {i === ROADMAP.length - 1 && (
                      <Link href="/contact" className="font-semibold text-brand-blue hover:underline">
                        Stay connected
                      </Link>
                    )}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
