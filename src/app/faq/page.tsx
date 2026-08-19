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
    "Answers about Wellthrivea Health & Wellness Network: planned services, home care, behavioral health, wellness, insurance, telemedicine, careers, and how to get launch updates.",
};

const GROUPS: { heading: string; items: Accordion5Item[] }[] = [
  {
    heading: "About the launch",
    items: [
      {
        value: "when-open",
        title: "When do you launch?",
        content: (
          <p>
            We&apos;re actively building and hiring now. Launch dates for each
            service will be announced on this site and to our{" "}
            <Link href="/contact" className="font-semibold text-brand-blue hover:underline">
              email list
            </Link>{" "}
            first.
          </p>
        ),
      },
      {
        value: "where",
        title: "Where will you be located?",
        content: (
          <p>
            Our first home base is coming to Canarsie, Brooklyn — the street
            address will be published closer to launch. Virtual care and
            community outreach are planned across the greater five boroughs.
          </p>
        ),
      },
      {
        value: "providers",
        title: "Who are your providers?",
        content: (
          <p>
            Our founding care team is being hired now. In keeping with New York
            professional advertising rules, we publish provider names,
            credentials, and certifications only after they are verified — so
            check back as the team grows. Clinicians interested in joining can
            visit our{" "}
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
    heading: "About our services",
    items: [
      {
        value: "services",
        title: "What services will Wellthrivea offer?",
        content: (
          <p>
            Our planned services include{" "}
            <Link href="/home-care" className="font-semibold text-brand-blue hover:underline">
              home care
            </Link>
            , telemedicine, wellness visits, chronic disease management,
            medication management, wound care, IV infusion therapy,{" "}
            <Link href="/behavioral-health" className="font-semibold text-brand-blue hover:underline">
              behavioral health support
            </Link>
            , and nutritional management. See{" "}
            <Link href="/services" className="font-semibold text-brand-blue hover:underline">
              What We Do
            </Link>{" "}
            — each service is confirmed and published before it launches.
          </p>
        ),
      },
      {
        value: "emergencies",
        title: "Do you handle emergencies?",
        content: (
          <p>
            No. Wellthrivea provides non-emergency health and wellness
            services. For chest pain, difficulty breathing, stroke symptoms,
            severe bleeding, major trauma, or any life-threatening condition,
            call <strong>911</strong> or go to the nearest emergency department
            immediately. If you are in emotional distress or crisis, call or
            text <strong>988</strong> for the Suicide &amp; Crisis Lifeline.
          </p>
        ),
      },
      {
        value: "home-care-area",
        title: "Where will home care be available?",
        content: (
          <p>
            Home care is planned to begin in the Brooklyn area, with the exact
            service map published at launch. Virtual support is planned across
            the greater five boroughs. Details on our{" "}
            <Link href="/home-care" className="font-semibold text-brand-blue hover:underline">
              Home Care page
            </Link>
            .
          </p>
        ),
      },
      {
        value: "telehealth",
        title: "Will you offer telemedicine?",
        content: (
          <p>
            Yes — telemedicine is a core part of the plan, with planned virtual
            hours of Monday–Friday, 9am–5pm EST. Final details will be
            published before launch.
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
            before services launch. Coverage varies by plan, so please confirm
            your benefits with your health plan before any visit.
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
            information will be published before launch.
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
            rights you have over it — including the special protections New
            York gives behavioral health information. This website itself
            carries no advertising pixels, analytics trackers, or session
            recording — see the{" "}
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
            Yes — nurses, nurse practitioners, home health aides, behavioral
            health clinicians, wellness educators, and care coordinators for
            our founding team. Visit{" "}
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
        sub="Everything we can answer today about Wellthrivea Health &amp; Wellness Network — and honest &quot;we'll announce it&quot; answers where details are still being finalized."
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
