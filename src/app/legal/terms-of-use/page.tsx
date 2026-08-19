import type { Metadata } from "next";
import Link from "next/link";
import { PageHead } from "@/components/site/page-head";
import { Prose } from "@/components/site/prose";
import { Notice } from "@/components/site/notice";

export const metadata: Metadata = {
  title: "Terms of Use & Medical Disclaimer",
  description:
    "Terms governing use of the Wellthrivea website, including our medical information disclaimer: website content is not medical advice.",
};

export default function TermsOfUsePage() {
  return (
    <>
      <PageHead
        badge="Privacy & Legal"
        title="Terms of Use & Medical Disclaimer"
        sub="The ground rules for using this website — most importantly, what this website is and isn't for."
        meta="Effective date: August 19, 2026 · Wellthrivea Health & Wellness Network"
      />

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-5">
          <Prose>
            <Notice variant="alert" className="mb-8">
              <strong>Medical disclaimer — please read.</strong> Content on this
              website is general information only. It is <strong>not</strong>{" "}
              medical advice, a diagnosis, or a substitute for individualized
              care from a licensed clinician, and reading it does not create a
              provider-patient relationship. If you are experiencing a
              life-threatening emergency, call <strong>911</strong> or go to the
              nearest emergency department.
            </Notice>

            <h2>1. Acceptance of these terms</h2>
            <p>
              By using wellthrivea.com (the &quot;Site&quot;), you agree to
              these Terms of Use. If you do not agree, please do not use the
              Site. We may update these terms; the current version, with its
              effective date, will always be posted here.
            </p>

            <h2>2. About Wellthrivea&apos;s current status</h2>
            <p>
              Wellthrivea Health & Wellness Network is preparing to open and is not yet
              providing patient care. Services, hours, staffing, technology
              features, and health-plan participation described on the Site are
              planned and will be confirmed and updated before opening. Nothing
              on this Site is a guarantee of the availability, timing, outcome,
              or cost of any service.
            </p>

            <h2>3. The Site is not for medical questions or emergencies</h2>
            <ul>
              <li>
                Do not use the Site, its forms, or email to seek medical advice
                or report symptoms. These channels are not monitored for medical
                issues.
              </li>
              <li>
                Please do not submit personal health information through the
                Site.
              </li>
              <li>
                For a life-threatening emergency, call 911 or go to the nearest
                emergency department.
              </li>
            </ul>

            <h2>4. Intellectual property</h2>
            <p>
              The Site and its content — including the Wellthrivea name, logo,
              text, graphics, and images — are owned by or licensed to
              Wellthrivea and protected by law. You may view and print pages for
              personal, non-commercial use; any other use requires our written
              permission.
            </p>

            <h2>5. Acceptable use</h2>
            <p>
              You agree not to misuse the Site — including attempting to
              interfere with its operation, probing or breaching its security,
              scraping content at scale, submitting false information, or using
              the Site for any unlawful purpose.
            </p>

            <h2>6. Third-party links</h2>
            <p>
              The Site links to government and regulatory resources (for
              example, HHS, CMS, and New York State agencies). Those sites are
              not ours and we are not responsible for their content.
            </p>

            <h2>7. No warranties; limitation of liability</h2>
            <p>
              The Site is provided &quot;as is&quot; and &quot;as
              available.&quot; To the fullest extent permitted by law,
              Wellthrivea disclaims all warranties, express or implied, about
              the Site and its content, and will not be liable for damages
              arising from use of the Site. Nothing in these terms limits rights
              you have under applicable law that cannot be limited, and nothing
              in them alters our obligations under HIPAA or New York law
              regarding actual patient care once we open.
            </p>

            <h2>8. Governing law</h2>
            <p>
              These terms are governed by the laws of the State of New York,
              without regard to conflict-of-law rules. Any dispute will be
              brought in the state or federal courts located in New York.
            </p>

            <h2>9. Contact</h2>
            <p>
              Questions about these terms:{" "}
              <a href="mailto:info@wellthrivea.com">info@wellthrivea.com</a> ·
              Wellthrivea, PO Box 1585, New York, NY 10163.
            </p>

            <p className="text-sm text-muted-foreground">
              See also:{" "}
              <Link href="/legal/digital-privacy-policy">
                Digital Privacy Policy
              </Link>{" "}
              ·{" "}
              <Link href="/legal/notice-of-privacy-practices">
                Notice of Privacy Practices
              </Link>{" "}
              · <Link href="/legal/sms-terms">SMS Terms of Use</Link> ·{" "}
              <Link href="/legal/patient-rights">
                Patient Rights &amp; Responsibilities
              </Link>
            </p>
          </Prose>
        </div>
      </section>
    </>
  );
}
