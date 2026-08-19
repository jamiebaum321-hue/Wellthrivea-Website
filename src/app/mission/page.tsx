import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHead } from "@/components/site/page-head";

export const metadata: Metadata = {
  title: "Our Mission",
  description:
    "Wellthrivea's mission: strengthen the health of our community with accessible, coordinated, whole-person care — starting in Brooklyn and reaching the greater five boroughs.",
};

export default function MissionPage() {
  return (
    <>
      <PageHead
        badge="Coordinated Care. Better Health."
        title="Our mission."
        sub="Strengthen the health of our community by making whole-person care — at home, online, and in the neighborhood — accessible, understandable, and welcoming for every New Yorker we serve."
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-brand-green-soft px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-[0.12em] text-brand-green">
              The mission
            </span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              Health care that meets people where they are.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Wellthrivea&apos;s mission is to strengthen the health of our
              community by providing accessible, coordinated care — home care,
              wellness programs, behavioral health support, and telemedicine
              that work together instead of in silos.
            </p>
            <p className="mt-3 text-muted-foreground">
              We&apos;re starting with the Brooklyn area, where we&apos;re
              building our first home base, and reaching the
              greater five boroughs through virtual care and community
              outreach.
            </p>
          </div>
          <Image
            src="/img/wellness-workshop.jpg"
            alt="A community wellness workshop with a diverse group of Brooklyn neighbors"
            width={1344}
            height={752}
            className="rounded-3xl shadow-xl"
          />
        </div>
      </section>

      <section className="bg-muted/60 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
          <Image
            src="/img/team.jpg"
            alt="A diverse founding care team in green and blue scrubs in a bright modern hallway"
            width={1344}
            height={752}
            className="order-2 rounded-3xl shadow-xl lg:order-1"
          />
          <div className="order-1 lg:order-2">
            <span className="inline-block rounded-full bg-accent px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-[0.12em] text-brand-blue">
              The vision
            </span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              A connected, compassionate system of care.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our vision is a connected, compassionate healthcare experience
              where nursing, chronic care management, behavioral health, and
              wellness services work seamlessly together — so no patient has to
              be the messenger between their own providers.
            </p>
            <p className="mt-3 text-muted-foreground">
              Seamless for patients. Respectful of privacy. Rooted in the
              community it serves.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <span className="inline-block rounded-full bg-brand-orange-soft px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-[0.12em] text-amber-700">
            What guides us
          </span>
          <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
            Commitments we publish before we open.
          </h2>
          <div className="mt-10 grid gap-4 text-left sm:grid-cols-2">
            {[
              ["Every neighbor, every time", "Care without discrimination, with free language assistance — see our Non-discrimination Statement."],
              ["Costs explained first", "Good Faith Estimates and published plan participation — see Insurance & Billing."],
              ["Privacy by default", "No trackers on this site, and published privacy practices — see our privacy policies."],
              ["Emergencies to 911, always", "We provide non-emergency care and say so clearly, everywhere."],
            ].map(([title, body]) => (
              <div key={title} className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                <h3 className="font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/about"
              className="brand-gradient inline-block rounded-full px-7 py-3.5 font-heading font-bold text-white shadow-md transition-[filter] hover:brightness-110"
            >
              More about Wellthrivea
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
