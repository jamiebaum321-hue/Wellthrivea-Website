import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Apple, CalendarHeart, GraduationCap, HeartPulse } from "lucide-react";
import { PageHead } from "@/components/site/page-head";
import { PageFaq } from "@/components/site/page-faq";
import { Notice } from "@/components/site/notice";

export const metadata: Metadata = {
  title: "Wellness Program",
  description:
    "Wellthrivea's planned Wellness Program: wellness visits, nutritional management, and community health education across Brooklyn and the greater five boroughs.",
};

const OFFERINGS = [
  {
    icon: CalendarHeart,
    tint: "text-brand-green",
    title: "Wellness visits",
    body: "Preventive check-ins built around your goals — reviewing your health picture, screenings, and the small changes that pay off for years.",
  },
  {
    icon: Apple,
    tint: "text-brand-orange",
    title: "Nutritional management",
    body: "Practical, culturally aware nutrition guidance that fits real kitchens and real budgets — never one-size-fits-all meal plans.",
  },
  {
    icon: HeartPulse,
    tint: "text-brand-blue",
    title: "Screenings & health checks",
    body: "Blood pressure checks and selected health screenings, planned at our Brooklyn home base and at community events.",
  },
  {
    icon: GraduationCap,
    tint: "text-brand-green",
    title: "Community health education",
    body: "Workshops and outreach across the five boroughs — from managing blood pressure to understanding your health coverage.",
  },
];

const PAGE_FAQ = [
  {
    value: "who",
    title: "Who are wellness visits for?",
    content: <p>Anyone who wants to stay ahead of their health rather than react to it. Wellness visits are planned as preventive check-ins built around your goals — not a replacement for care you receive from your primary care provider.</p>,
  },
  {
    value: "events",
    title: "How do I find out about community events?",
    content: <p>Events will be announced to our email list first, and posted on this site as they are scheduled. Organizations interested in hosting an event with us are welcome to reach out.</p>,
  },
  {
    value: "cost",
    title: "Will wellness services be covered by insurance?",
    content: <p>Coverage for preventive and wellness services varies by plan. We will publish participating plans and any self-pay pricing before wellness services launch, so you can check before you book.</p>,
  },
] as const;


export default function WellnessPage() {
  return (
    <>
      <PageHead
        badge="Planned program — details published before launch"
        title="Wellness that fits real life."
        sub="The Wellthrivea Wellness Program is about staying well, not just getting treated — wellness visits, nutrition support, and community health education, designed for how New Yorkers actually live."
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-brand-green-soft px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-[0.12em] text-brand-green">
              Why wellness
            </span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              The most valuable visit is the one before you get sick.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Most of what determines health happens outside any clinic — in
              groceries, sleep, stress, movement, and the neighborhood around
              you. Our Wellness Program is being designed to meet people there:
              prevention-first care, honest nutrition guidance, and education
              delivered where the community already gathers.
            </p>
            <p className="mt-3 text-muted-foreground">
              Wellness services connect to the rest of the Wellthrivea network
              — so a blood-pressure reading at a community event can become a
              follow-up plan, not just a number on a card.
            </p>
          </div>
          <Image
            src="/img/wellness-workshop.jpg"
            alt="A nutrition educator showing fresh vegetables to a diverse group at a Brooklyn community wellness workshop"
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
              Planned offerings
            </span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              What the Wellness Program will include.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {OFFERINGS.map(({ icon: Icon, tint, title, body }) => (
              <div
                key={title}
                className="rounded-3xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span className={`flex size-12 items-center justify-center rounded-2xl bg-muted ${tint}`}>
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 flex flex-wrap items-center gap-2 text-lg font-bold">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </div>
            ))}
          </div>
          <Notice variant="info" className="mx-auto mt-10 max-w-3xl">
            <strong>Planned means planned:</strong> each wellness offering will
            be confirmed — with schedules, locations, and any costs — before it
            launches. Community events will be announced to our email list
            first.
          </Notice>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
          <Image
            src="/img/community-street.jpg"
            alt="Sunny residential Brooklyn street with neighbors walking along tree-lined sidewalks"
            width={1344}
            height={752}
            className="order-2 rounded-3xl shadow-xl lg:order-1"
          />
          <div className="order-1 lg:order-2">
            <span className="inline-block rounded-full bg-brand-orange-soft px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-[0.12em] text-amber-700">
              In the community
            </span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              Five boroughs. One wellness mission.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Wellness outreach is planned across Brooklyn, Queens, Manhattan,
              the Bronx, and Staten Island — in partnership with schools, faith
              communities, and local organizations. If your organization wants
              to bring a wellness event to your neighborhood, we&apos;d love to
              plan it together.
            </p>
            <Link
              href="/contact"
              className="brand-gradient mt-8 inline-block rounded-full px-7 py-3.5 font-heading font-bold text-white shadow-md transition-[filter] hover:brightness-110"
            >
              Partner with us
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-muted/60 py-20 text-center">
        <div className="mx-auto max-w-2xl px-5">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Read while we build.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Our health blog shares practical, plain-language wellness reading —
            from flu-season habits to heat safety.
          </p>
          <Link
            href="/blog"
            className="brand-gradient mt-8 inline-block rounded-full px-7 py-3.5 font-heading font-bold text-white shadow-md transition-[filter] hover:brightness-110"
          >
            Visit the health blog
          </Link>
        </div>
      </section>
      <PageFaq items={PAGE_FAQ} title="Questions about wellness" />
    </>
  );
}
