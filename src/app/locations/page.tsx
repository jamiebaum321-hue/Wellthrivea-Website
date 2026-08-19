import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import { PageHead } from "@/components/site/page-head";

export const metadata: Metadata = {
  title: "Locations & Outreach",
  description:
    "Wellthrivea Urgent Care is coming soon to Canarsie, Brooklyn, with community outreach across the greater five boroughs. Address and opening date will be announced.",
};

const BOROUGHS = [
  {
    name: "Brooklyn",
    body: "Home base. Neighborhood events, school and community partnerships, and local hiring — starting in Canarsie and East Brooklyn.",
  },
  {
    name: "Queens",
    body: "Outreach and health-education events planned with community organizations across the borough.",
  },
  {
    name: "Manhattan",
    body: "Wellness education partnerships and employer outreach planned as our network of programs grows.",
  },
  {
    name: "The Bronx",
    body: "Community screenings and prevention-focused events planned with local partners.",
  },
  {
    name: "Staten Island",
    body: "Outreach programming planned so every borough is part of the Wellthrivea community.",
  },
];

export default function LocationsPage() {
  return (
    <>
      <PageHead
        badge="Address & opening date to be announced"
        title={
          <>
            Coming soon to Canarsie.
            <br />
            Reaching all five boroughs.
          </>
        }
        sub="Our first clinic is being built in Canarsie, Brooklyn. While construction and hiring continue, we're planning community outreach across Brooklyn, Queens, Manhattan, the Bronx, and Staten Island."
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-brand-green-soft px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-[0.12em] text-brand-green">
              Flagship location
            </span>
            <h2 className="mt-4 flex flex-wrap items-center gap-3 text-3xl font-extrabold md:text-4xl">
              Canarsie, Brooklyn
              <span className="rounded-full bg-brand-orange-soft px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-amber-700">
                Coming Soon
              </span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Canarsie is one of New York&apos;s most vibrant, diverse
              neighborhoods — and it deserves modern, welcoming walk-in care
              close to home. Our brand-new clinic is being designed for this
              community from the ground up: bright, accessible, and
              technology-forward.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Street address announced closer to opening",
                "Hours published before opening day",
                "Walk-in visits planned, plus online scheduling",
                "Accessible design throughout the building",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-muted-foreground">
                  <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-green-soft text-brand-green">
                    <Check className="size-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="brand-gradient mt-8 inline-block rounded-full px-7 py-3.5 font-heading font-bold text-white shadow-md transition-[filter] hover:brightness-110"
            >
              Get the address reveal first
            </Link>
          </div>
          <Image
            src="/img/hero-building.jpg"
            alt="Concept rendering of the new Wellthrivea Urgent Care building at dusk with green and blue lighting"
            width={1920}
            height={1085}
            className="rounded-3xl shadow-xl"
          />
        </div>
      </section>

      <section className="bg-muted/60 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-accent px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-[0.12em] text-brand-blue">
              Community outreach
            </span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              The greater five boroughs, before day one.
            </h2>
            <p className="mt-4 text-muted-foreground">
              A clinic can open its doors long after it starts serving its
              community. Our outreach team is planning health education,
              screening events, and partnerships across New York City.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {BOROUGHS.map((b) => (
              <div
                key={b.name}
                className="rounded-3xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-lg font-bold">{b.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {b.body}
                </p>
              </div>
            ))}
            <div className="brand-gradient rounded-3xl p-7 shadow-md">
              <h3 className="text-lg font-bold !text-white">Partner with us</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/85">
                Community organization, school, faith group, or local employer?
                We&apos;d love to plan something together.
              </p>
              <Link href="/contact" className="mt-3 inline-block font-heading text-sm font-bold text-white hover:underline">
                Reach out →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
          <Image
            src="/img/canarsie-street.jpg"
            alt="Sunny residential street in Canarsie with diverse neighbors walking along tree-lined sidewalks"
            width={1344}
            height={752}
            className="order-2 rounded-3xl shadow-xl lg:order-1"
          />
          <div className="order-1 lg:order-2">
            <span className="inline-block rounded-full bg-brand-orange-soft px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-[0.12em] text-amber-700">
              Why Canarsie
            </span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              A neighborhood worth building for.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Canarsie is proudly diverse — home to deep Caribbean-American
              roots and neighbors from around the world. Health care here should
              reflect the community it serves: multilingual, respectful, and
              easy to reach. That&apos;s the standard we&apos;re building to, and
              it&apos;s why our{" "}
              <Link href="/legal/non-discrimination" className="font-semibold text-brand-blue hover:underline">
                non-discrimination commitment
              </Link>{" "}
              and free language-assistance services are published before our
              doors even open.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted/60 py-20 text-center">
        <div className="mx-auto max-w-2xl px-5">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Be the first to know where and when.
          </h2>
          <p className="mt-4 text-muted-foreground">
            The address and opening date go to our email list before anywhere
            else.
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
