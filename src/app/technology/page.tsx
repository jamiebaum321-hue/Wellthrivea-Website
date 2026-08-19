import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Check, EyeOff, Lock, ShieldCheck } from "lucide-react";
import { PageHead } from "@/components/site/page-head";

export const metadata: Metadata = {
  title: "Smart Care Technology",
  description:
    "How Wellthrivea Urgent Care is designing technology around patients: digital check-in, smart exam rooms, telehealth-ready visits, and a privacy-first website with no ad trackers.",
};

function Tick({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 text-muted-foreground">
      <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-green-soft text-brand-green">
        <Check className="size-3" />
      </span>
      <span>{children}</span>
    </li>
  );
}

export default function TechnologyPage() {
  return (
    <>
      <PageHead
        badge="In design — arriving with our opening"
        title="Smart technology, human care."
        sub="We're designing Wellthrivea around technology that removes friction from getting care — while keeping your privacy and your dignity at the center. Here's what we're building toward."
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-accent px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-[0.12em] text-brand-blue">
              Before your visit
            </span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              Start from your couch, not a clipboard.
            </h2>
            <ul className="mt-6 space-y-3.5">
              <Tick>
                <strong>Online scheduling &amp; virtual queue (planned):</strong>{" "}
                reserve a spot, see your place in line, and spend more of your
                wait at home — subject to operating hours and capacity.
              </Tick>
              <Tick>
                <strong>Digital pre-registration (planned):</strong> complete
                intake from your phone through a secure, HIPAA-reviewed system
                before you arrive.
              </Tick>
              <Tick>
                <strong>Clear cost information:</strong> plain-language billing
                pages, self-pay information, and Good Faith Estimates for
                uninsured or self-pay patients.
              </Tick>
            </ul>
          </div>
          <Image
            src="/img/tech-illustration.jpg"
            alt="Illustration of a modern health dashboard interface in Wellthrivea's green and blue brand colors"
            width={1344}
            height={752}
            className="rounded-3xl shadow-xl"
          />
        </div>
      </section>

      <section className="bg-muted/60 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
          <Image
            src="/img/exam-room.jpg"
            alt="Smart exam room with a wall-mounted digital display and modern diagnostic equipment"
            width={1344}
            height={752}
            className="order-2 rounded-3xl shadow-xl lg:order-1"
          />
          <div className="order-1 lg:order-2">
            <span className="inline-block rounded-full bg-brand-green-soft px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-[0.12em] text-brand-green">
              In the clinic
            </span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              A building designed this decade, for this decade.
            </h2>
            <ul className="mt-6 space-y-3.5">
              <Tick>
                <strong>Self-service check-in kiosks (planned):</strong> check in
                quickly at the door, with staff always available for anyone who
                prefers a person.
              </Tick>
              <Tick>
                <strong>Smart exam rooms (planned):</strong> in-room displays
                that help your clinician share what they&apos;re seeing, so you
                leave understanding your care.
              </Tick>
              <Tick>
                <strong>E-prescriptions (planned):</strong> prescriptions sent
                electronically to your preferred pharmacy.
              </Tick>
              <Tick>
                <strong>Modern, secure records:</strong> your information managed
                in a secure electronic health record system — not paper folders.
              </Tick>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-brand-orange-soft px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-[0.12em] text-amber-700">
              After your visit
            </span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              Care that follows up.
            </h2>
            <ul className="mt-6 space-y-3.5">
              <Tick>
                <strong>Telehealth follow-up (planned):</strong> virtual visits
                for questions during recovery.
              </Tick>
              <Tick>
                <strong>Secure messaging (planned):</strong> a private,
                HIPAA-appropriate channel for follow-up communication — never
                regular text or email for health details.
              </Tick>
              <Tick>
                <strong>Optional updates by SMS:</strong> appointment and
                operational notifications, only with your consent and under our{" "}
                <Link href="/legal/sms-terms" className="font-semibold text-brand-blue hover:underline">
                  SMS Terms of Use
                </Link>
                .
              </Tick>
            </ul>
          </div>
          <Image
            src="/img/telehealth.jpg"
            alt="A woman at home speaking with a clinician through a telehealth video visit on her tablet"
            width={1344}
            height={752}
            className="rounded-3xl shadow-xl"
          />
        </div>
      </section>

      <section className="bg-brand-navy py-20 text-white">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-[0.12em] text-sky-200">
              Privacy by design
            </span>
            <h2 className="mt-4 text-3xl font-extrabold !text-white md:text-4xl">
              The smartest feature is the one you don&apos;t see.
            </h2>
            <p className="mt-4 text-sky-200/80">
              Health websites are notorious for quietly sharing visitor data
              with advertising platforms. We built this site the opposite way.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "No ad pixels",
                body: "No Meta Pixel, no Google Ads tags, no TikTok or LinkedIn trackers — on any page of this site.",
              },
              {
                icon: EyeOff,
                title: "No session recording",
                body: "No screen-replay tools, no heat maps, no keystroke capture. What you do on this site isn't recorded.",
              },
              {
                icon: Lock,
                title: "Vetted before added",
                body: "Any future vendor that touches visitor data — scheduling, forms, chat — gets a HIPAA review first, with a Business Associate Agreement where required.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-3xl border border-white/10 bg-white/5 p-7"
              >
                <span className="flex size-12 items-center justify-center rounded-2xl bg-white/10 text-brand-green-bright">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold !text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sky-200/75">
                  {body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-9 text-center text-sm">
            <Link href="/legal/digital-privacy-policy" className="font-semibold text-sky-300 hover:underline">
              Read the full Digital Privacy Policy →
            </Link>
          </p>
        </div>
      </section>

      <section className="py-20 text-center">
        <div className="mx-auto max-w-2xl px-5">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Technology this thoughtful needs people this good.
          </h2>
          <p className="mt-4 text-muted-foreground">
            We&apos;re hiring the founding team that will bring all of this to
            life.
          </p>
          <Link
            href="/careers"
            className="brand-gradient mt-8 inline-block rounded-full px-7 py-3.5 font-heading font-bold text-white shadow-md transition-[filter] hover:brightness-110"
          >
            Join the founding team
          </Link>
        </div>
      </section>
    </>
  );
}
