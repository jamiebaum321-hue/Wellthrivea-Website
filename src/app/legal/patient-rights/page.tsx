import type { Metadata } from "next";
import Link from "next/link";
import { PageHead } from "@/components/site/page-head";
import { Prose } from "@/components/site/prose";
import { Notice } from "@/components/site/notice";

export const metadata: Metadata = {
  title: "Patient Rights & Responsibilities – NY",
  description:
    "The rights and responsibilities of Wellthrivea Health & Wellness Network patients in New York, including respect, privacy, information, billing transparency, and complaints.",
};

export default function PatientRightsPage() {
  return (
    <>
      <PageHead
        badge="Privacy & Legal"
        title="Patient Rights & Responsibilities — New York"
        sub="Care works best as a partnership. Here's what you can expect from us — and what helps us care for you well."
        meta="Effective date: August 19, 2026 · Wellthrivea Health & Wellness Network"
      />

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-5">
          <Prose>
            <Notice variant="info" className="mb-8">
              <strong>Status note:</strong> Wellthrivea Health & Wellness Network is preparing
              to open. These rights and responsibilities are published in
              advance and will apply to all patient care when we open. A copy
              will also be available at the clinic.
            </Notice>

            <h2>As our patient, you have the right to:</h2>
            <ul>
              <li>
                <strong>Respectful care.</strong> Receive considerate,
                respectful care in a clean and safe environment, without
                discrimination — consistent with our{" "}
                <Link href="/legal/non-discrimination">
                  Non-discrimination Statement
                </Link>
                .
              </li>
              <li>
                <strong>Know who is treating you.</strong> Know the name,
                position, and credentials of every person involved in your care.
              </li>
              <li>
                <strong>Understandable information.</strong> Receive complete
                information about your diagnosis, treatment, and prognosis in
                terms you can understand, with free interpreter services and
                communication aids when needed.
              </li>
              <li>
                <strong>Make decisions about your care.</strong> Receive the
                information needed to give informed consent before any
                non-emergency treatment, and refuse treatment to the extent
                permitted by law after being told what the refusal may mean for
                your health.
              </li>
              <li>
                <strong>Privacy and confidentiality.</strong> Privacy during
                your care and confidentiality of your health information, as
                described in our{" "}
                <Link href="/legal/notice-of-privacy-practices">
                  Notice of Privacy Practices
                </Link>
                .
              </li>
              <li>
                <strong>Access your records.</strong> Review and obtain copies
                of your medical record as provided by New York law and HIPAA.
              </li>
              <li>
                <strong>Emergency guidance.</strong> Be told clearly that for
                life-threatening conditions you should call 911 or go to the
                nearest emergency department, and be referred or transferred
                appropriately when your needs exceed our services.
              </li>
              <li>
                <strong>Billing transparency.</strong> Receive information about
                charges, participating health plans, and hospital affiliations
                before non-emergency care; request estimates; and receive the
                protections described on our{" "}
                <Link href="/legal/no-surprises-act">No Surprises Act page</Link>{" "}
                — including a Good Faith Estimate if you are uninsured or
                self-pay.
              </li>
              <li>
                <strong>Advance directives.</strong> Have your health-care proxy
                or other advance directive respected to the extent applicable to
                the services we provide.
              </li>
              <li>
                <strong>Complain without fear.</strong> Voice complaints about
                your care — to us, or to the New York State Department of Health
                — and receive a response, with no retaliation of any kind. You
                may also use our{" "}
                <Link href="/legal/anonymous-hotline">anonymous hotline</Link>.
              </li>
            </ul>

            <h2>As our patient, you have the responsibility to:</h2>
            <ul>
              <li>
                Provide accurate and complete information about your symptoms,
                medications, allergies, and health history, to the best of your
                knowledge.
              </li>
              <li>
                Tell your care team if you don&apos;t understand something about
                your care or what&apos;s expected of you.
              </li>
              <li>
                Follow the treatment plan you and your clinician agree on, or
                tell us if you can&apos;t — so we can help adjust it.
              </li>
              <li>
                Treat staff and other patients with courtesy and respect.
              </li>
              <li>
                Provide accurate insurance and contact information, and meet
                agreed financial obligations.
              </li>
              <li>
                Use emergency services (911 / emergency department) for
                emergencies — Wellthrivea provides non-emergency care and is
                not equipped for life-threatening conditions.
              </li>
            </ul>

            <h2>Questions or concerns</h2>
            <p>
              Contact us at{" "}
              <a href="mailto:info@wellthrivea.com">info@wellthrivea.com</a>{" "}
              (subject &quot;Patient Rights&quot;) or by mail: Wellthrivea, PO
              Box 1585, New York, NY 10163. Complaints about care in New York
              may also be directed to the New York State Department of Health at{" "}
              <a href="https://www.health.ny.gov" rel="noopener">
                health.ny.gov
              </a>
              .
            </p>
          </Prose>
        </div>
      </section>
    </>
  );
}
