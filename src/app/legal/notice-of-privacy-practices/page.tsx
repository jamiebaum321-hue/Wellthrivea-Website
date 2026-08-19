import type { Metadata } from "next";
import Link from "next/link";
import { PageHead } from "@/components/site/page-head";
import { Prose } from "@/components/site/prose";
import { Notice } from "@/components/site/notice";

export const metadata: Metadata = {
  title: "Notice of Privacy Practices – NY",
  description:
    "HIPAA Notice of Privacy Practices for Wellthrivea Health & Wellness Network: how medical information about you may be used and disclosed, and how you can get access to this information.",
};

export default function NppPage() {
  return (
    <>
      <PageHead
        badge="Privacy & Legal"
        title="Notice of Privacy Practices — New York"
        sub="This notice describes how medical information about you may be used and disclosed and how you can get access to this information. Please review it carefully."
        meta="Effective date: August 19, 2026 · Wellthrivea Health & Wellness Network"
      />

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-5">
          <Prose>
            <Notice variant="info" className="mb-8">
              <strong>Status note:</strong> Wellthrivea Health & Wellness Network is preparing
              to open and is not yet treating patients. This Notice of Privacy
              Practices is published in advance so our community can review it.
              It applies to protected health information we create or receive,
              and a copy will be offered to every patient at or before their
              first service once we open. It will be updated with our clinic
              address, telephone number, and Privacy Officer&apos;s direct
              contact details before opening.
            </Notice>

            <h2>Our commitment to your health information</h2>
            <p>
              Wellthrivea Health & Wellness Network (&quot;we,&quot; &quot;us&quot;) is
              required by the Health Insurance Portability and Accountability
              Act of 1996 (HIPAA) to maintain the privacy and security of your
              protected health information (&quot;PHI&quot;), to give you this
              notice of our legal duties and privacy practices, and to follow
              the terms of the notice currently in effect. New York law provides
              additional protections for certain categories of especially
              sensitive information, described below.
            </p>

            <h2>How we may use and disclose your health information</h2>
            <h3>Uses and disclosures that do not require your authorization</h3>
            <ul>
              <li>
                <strong>Treatment.</strong> We may use and share your PHI to
                provide, coordinate, and manage your care — for example, sharing
                information with a pharmacy filling your prescription, a
                laboratory processing your test, or another provider involved in
                your care.
              </li>
              <li>
                <strong>Payment.</strong> We may use and share your PHI to bill
                and collect payment — for example, submitting a claim to your
                health plan or confirming your coverage.
              </li>
              <li>
                <strong>Health care operations.</strong> We may use and share
                your PHI to run our practice — quality improvement, training,
                licensing, audits, and similar activities.
              </li>
              <li>
                <strong>Appointment reminders and follow-up.</strong> We may
                contact you to remind you of appointments or to follow up on
                your care, using the contact methods you have given us.
              </li>
              <li>
                <strong>As required by law.</strong> We will share your PHI when
                federal, state, or local law requires it, including with the
                U.S. Department of Health and Human Services when it
                investigates our compliance.
              </li>
              <li>
                <strong>Public health and safety.</strong> We may share PHI for
                public-health activities (such as disease reporting to the New
                York State or New York City health departments), to report
                suspected abuse or neglect as required by law, to avert a
                serious threat to health or safety, and for health oversight
                activities.
              </li>
              <li>
                <strong>Other permitted purposes.</strong> Where permitted by
                law and subject to legal conditions: judicial and administrative
                proceedings; law-enforcement purposes; coroners, medical
                examiners, and funeral directors; organ and tissue donation;
                workers&apos; compensation; specialized government functions;
                and research approved under legally required privacy safeguards.
              </li>
            </ul>

            <h3>Uses and disclosures that require your written authorization</h3>
            <p>
              We will obtain your written authorization before using or
              disclosing your PHI for any purpose not described in this notice,
              including:
            </p>
            <ul>
              <li>
                <strong>Marketing</strong> purposes, and any <strong>sale</strong>{" "}
                of your PHI (which we do not do);
              </li>
              <li>
                Most uses and disclosures of <strong>psychotherapy notes</strong>,
                if any are created;
              </li>
              <li>
                Uses and disclosures of categories given special protection by
                New York and federal law, including{" "}
                <strong>
                  HIV-related information, mental-health information, and
                  substance-use-disorder treatment records
                </strong>
                , except as specifically permitted or required by those laws.
              </li>
            </ul>
            <p>
              You may revoke an authorization at any time in writing, except to
              the extent we have already relied on it.
            </p>

            <h3>Your choices</h3>
            <p>
              You can tell us your preference — and we will follow it unless the
              law requires otherwise — about sharing information with family or
              friends involved in your care, in disaster-relief situations, and
              whether to include you in any patient directory (we do not
              currently maintain one).
            </p>

            <h2>Your rights over your health information</h2>
            <ul>
              <li>
                <strong>Get a copy of your record.</strong> You may inspect and
                receive a copy of your medical and billing records, usually
                within 30 days of a written request. New York law also gives you
                the right to access your records; a reasonable, cost-based fee
                may apply as permitted by law.
              </li>
              <li>
                <strong>Ask us to correct your record.</strong> If you believe
                information is incorrect or incomplete, you may request an
                amendment in writing. We may deny the request in limited
                circumstances and will tell you why in writing.
              </li>
              <li>
                <strong>Request confidential communications.</strong> You may
                ask us to contact you in a specific way (for example, only at a
                certain phone number) and we will accommodate reasonable
                requests.
              </li>
              <li>
                <strong>Ask us to limit what we share.</strong> You may request
                restrictions on certain uses and disclosures. We are not
                required to agree to all requests, but if you pay for a service
                in full out of pocket, you may require us not to share that
                information with your health plan for payment or operations
                purposes, and we must agree unless the law requires the
                disclosure.
              </li>
              <li>
                <strong>Get a list of disclosures.</strong> You may request an
                accounting of certain disclosures of your PHI for the six years
                prior to your request.
              </li>
              <li>
                <strong>Get a copy of this notice.</strong> You may request a
                paper copy of this notice at any time, even if you agreed to
                receive it electronically.
              </li>
              <li>
                <strong>Choose someone to act for you.</strong> A person with
                medical power of attorney or a legal guardian may exercise your
                rights on your behalf.
              </li>
              <li>
                <strong>Be notified of a breach.</strong> We will notify you if
                a breach occurs that may have compromised the privacy or
                security of your PHI.
              </li>
            </ul>

            <h2>Changes to this notice</h2>
            <p>
              We may change this notice and the changes will apply to all PHI we
              maintain. The current notice, with its effective date, will always
              be posted on this website and available at our clinic once open.
            </p>

            <h2>Complaints</h2>
            <p>
              If you believe your privacy rights have been violated, you may
              complain to us or to the federal government.{" "}
              <strong>
                You will never be penalized or retaliated against for filing a
                complaint.
              </strong>
            </p>
            <ul>
              <li>
                <strong>With us:</strong> Privacy Officer, Wellthrivea, PO Box
                1585, New York, NY 10163, or{" "}
                <a href="mailto:info@wellthrivea.com">info@wellthrivea.com</a>{" "}
                (subject line &quot;Privacy&quot;).
              </li>
              <li>
                <strong>
                  With the U.S. Department of Health and Human Services, Office
                  for Civil Rights:
                </strong>{" "}
                200 Independence Avenue SW, Washington, DC 20201;
                1-800-368-1019 (TDD 1-800-537-7697); or online at{" "}
                <a href="https://www.hhs.gov/ocr/complaints" rel="noopener">
                  hhs.gov/ocr/complaints
                </a>
                .
              </li>
            </ul>

            <h2>Contact</h2>
            <p>
              Privacy Officer
              <br />
              Wellthrivea Health & Wellness Network
              <br />
              PO Box 1585, New York, NY 10163
              <br />
              Email:{" "}
              <a href="mailto:info@wellthrivea.com">info@wellthrivea.com</a>{" "}
              (subject &quot;Privacy&quot;)
              <br />
              Fax: (516) 620-3049
            </p>
            <p className="text-sm text-muted-foreground">
              A separate{" "}
              <Link href="/legal/digital-privacy-policy">
                Digital Privacy Policy
              </Link>{" "}
              describes how this website handles information about visitors.
              That policy supplements — and does not replace — this Notice of
              Privacy Practices.
            </p>
          </Prose>
        </div>
      </section>
    </>
  );
}
