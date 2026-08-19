import type { Metadata } from "next";
import Link from "next/link";
import { PageHead } from "@/components/site/page-head";
import { Notice } from "@/components/site/notice";
import Accordion5, {
  type Accordion5Item,
} from "@/components/base-variants/accordion/accordion-5";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about Wellthrivea Urgent Care: what urgent care treats, when and where we're opening in Brooklyn, insurance, walk-ins, telehealth, careers, and how to get updates.",
};

const GROUPS: { heading: string; items: Accordion5Item[] }[] = [
  {
    heading: "About the opening",
    items: [
      {
        value: "when-open",
        title: "When do you open?",
        content: (
          <p>
            We&apos;re actively building and hiring now. The opening date will
            be announced on this site and to our{" "}
            <Link href="/contact" className="font-semibold text-brand-blue hover:underline">
              email list
            </Link>{" "}
            first.
          </p>
        ),
      },
      {
        value: "where",
        title: "Where exactly will you be located?",
        content: (
          <p>
            Our first clinic is coming to Canarsie, Brooklyn. The street address
            will be published closer to opening. We&apos;ll also serve the
            greater five boroughs through community outreach programs.
          </p>
        ),
      },
      {
        value: "providers",
        title: "Who are your providers?",
        content: (
          <p>
            Our founding clinical team is being hired now. In keeping with New
            York professional advertising rules, we publish provider names,
            credentials, and board certifications only after they are verified —
            so check back as the team grows. Clinicians interested in joining
            can visit our{" "}
            <Link href="/careers" className="font-semibold text-brand-blue hover:underline">
              careers page
            </Link>
            .
          </p>
        ),
      },
    ],
  },
  {
    heading: "About urgent care",
    items: [
      {
        value: "treats",
        title: "What does urgent care treat?",
        content: (
          <p>
            Urgent care is for urgent, non-life-threatening illnesses and
            injuries — colds and flu, sore throats, earaches, minor cuts,
            sprains, mild fevers, rashes, and similar conditions. See our{" "}
            <Link href="/services" className="font-semibold text-brand-blue hover:underline">
              planned services
            </Link>
            .
          </p>
        ),
      },
      {
        value: "er",
        title: "When should I go to the emergency department instead?",
        content: (
          <p>
            For chest pain or pressure, difficulty breathing, stroke symptoms
            (face drooping, arm weakness, slurred speech), severe bleeding,
            major trauma, loss of consciousness, or any condition that could be
            life-threatening — call <strong>911</strong> or go to the nearest
            emergency department immediately. Urgent care is not an emergency
            room.
          </p>
        ),
      },
      {
        value: "walk-in",
        title: "Will I be able to walk in, or do I need an appointment?",
        content: (
          <p>
            Both are planned: walk-in visits and online scheduling with a
            virtual queue, subject to operating hours and capacity. Final
            details will be published before opening.
          </p>
        ),
      },
      {
        value: "telehealth",
        title: "Will you offer telehealth?",
        content: (
          <p>
            Telehealth follow-up visits are part of our plan, so questions
            during recovery don&apos;t always require another trip to the
            clinic. Details will be confirmed at opening.
          </p>
        ),
      },
    ],
  },
  {
    heading: "Insurance & costs",
    items: [
      {
        value: "plans",
        title: "Which insurance plans will you accept?",
        content: (
          <p>
            We plan to participate with selected health plans, and the exact
            list of participating plans will be published on our{" "}
            <Link href="/insurance" className="font-semibold text-brand-blue hover:underline">
              Insurance &amp; Billing page
            </Link>{" "}
            before we open. Coverage varies by plan, so please confirm your
            benefits with your health plan before any visit.
          </p>
        ),
      },
      {
        value: "uninsured",
        title: "What if I don't have insurance?",
        content: (
          <p>
            Self-pay patients are welcome. You may have the right to receive a{" "}
            <Link href="/legal/no-surprises-act" className="font-semibold text-brand-blue hover:underline">
              Good Faith Estimate
            </Link>{" "}
            of expected charges before you receive care, and self-pay pricing
            information will be published before opening.
          </p>
        ),
      },
      {
        value: "surprise",
        title: "Am I protected from surprise bills?",
        content: (
          <p>
            Yes — federal and New York law protect you from certain unexpected
            balance bills. Read your full protections on our{" "}
            <Link href="/legal/no-surprises-act" className="font-semibold text-brand-blue hover:underline">
              No Surprises Act page
            </Link>
            .
          </p>
        ),
      },
    ],
  },
  {
    heading: "Privacy & communication",
    items: [
      {
        value: "privacy",
        title: "How will you protect my health information?",
        content: (
          <p>
            Our{" "}
            <Link href="/legal/notice-of-privacy-practices" className="font-semibold text-brand-blue hover:underline">
              Notice of Privacy Practices
            </Link>{" "}
            explains how medical information may be used and disclosed and the
            rights you have over it. This website itself carries no advertising
            pixels, analytics trackers, or session recording — see the{" "}
            <Link href="/legal/digital-privacy-policy" className="font-semibold text-brand-blue hover:underline">
              Digital Privacy Policy
            </Link>
            .
          </p>
        ),
      },
      {
        value: "sms",
        title: "Will you text me?",
        content: (
          <p>
            Only if you opt in. Optional SMS updates are governed by our{" "}
            <Link href="/legal/sms-terms" className="font-semibold text-brand-blue hover:underline">
              SMS Terms of Use
            </Link>{" "}
            — you can reply STOP at any time, and we won&apos;t send personal
            health details by text.
          </p>
        ),
      },
      {
        value: "report",
        title: "How do I report a concern?",
        content: (
          <p>
            We take concerns seriously and prohibit retaliation. You can use our{" "}
            <Link href="/legal/anonymous-hotline" className="font-semibold text-brand-blue hover:underline">
              anonymous compliance hotline page
            </Link>
            , email us, or write to us by mail — anonymously if you prefer.
          </p>
        ),
      },
    ],
  },
  {
    heading: "Working with us",
    items: [
      {
        value: "hiring",
        title: "Are you hiring?",
        content: (
          <p>
            Yes — physicians, PAs, NPs, RNs, medical assistants, and
            front-office staff for our founding team. Visit{" "}
            <Link href="/careers" className="font-semibold text-brand-blue hover:underline">
              Careers
            </Link>{" "}
            to express interest.
          </p>
        ),
      },
      {
        value: "partner",
        title: "Can my organization partner with Wellthrivea?",
        content: (
          <p>
            We&apos;d love to hear from schools, faith groups, community
            organizations, and employers across the five boroughs.{" "}
            <Link href="/contact" className="font-semibold text-brand-blue hover:underline">
              Contact us
            </Link>{" "}
            to start the conversation.
          </p>
        ),
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHead
        badge="Questions & answers"
        title="Frequently asked questions."
        sub="Everything we can answer today about Wellthrivea Urgent Care — and honest &quot;we'll announce it&quot; answers where details are still being finalized."
      />

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-5">
          {GROUPS.map((group) => (
            <div key={group.heading} className="mb-10">
              <h2 className="mb-4 text-2xl font-extrabold">{group.heading}</h2>
              <Accordion5 items={group.items} />
            </div>
          ))}

          <Notice variant="info" className="mt-6">
            <strong>Didn&apos;t find your answer?</strong> Email{" "}
            <a href="mailto:info@wellthrivea.com">info@wellthrivea.com</a> —
            please don&apos;t include personal health information in email.
          </Notice>
        </div>
      </section>
    </>
  );
}
