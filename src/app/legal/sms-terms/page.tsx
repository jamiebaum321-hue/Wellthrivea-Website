import type { Metadata } from "next";
import Link from "next/link";
import { PageHead } from "@/components/site/page-head";
import { Prose } from "@/components/site/prose";
import { Notice } from "@/components/site/notice";

export const metadata: Metadata = {
  title: "SMS Terms of Use",
  description:
    "Terms for Wellthrivea text messaging: consent, message frequency, opt-out (STOP), help (HELP), carrier disclosures, and privacy.",
};

export default function SmsTermsPage() {
  return (
    <>
      <PageHead
        badge="Privacy & Legal"
        title="SMS Terms of Use"
        sub="These terms govern text messages from Wellthrivea. Texting is always optional, always consent-based, and never used for personal health details."
        meta="Effective date: August 19, 2026 · Wellthrivea Urgent Care"
      />

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-5">
          <Prose>
            <Notice variant="info" className="mb-8">
              <strong>Status note:</strong> Wellthrivea&apos;s SMS program will
              launch alongside our clinic opening. These terms are published in
              advance and will apply to all Wellthrivea text messaging when the
              program is active.
            </Notice>

            <h2>1. Program description</h2>
            <p>
              With your consent, Wellthrivea (&quot;we,&quot; &quot;us&quot;)
              may send you text (SMS) messages such as: opening and operational
              announcements, appointment reminders and confirmations, check-in
              and queue updates, and responses to messages you send us. We do{" "}
              <strong>not</strong> send diagnoses, test results, or other
              personal health details by standard SMS.
            </p>

            <h2>2. Consent and enrollment</h2>
            <ul>
              <li>
                You enroll only by an affirmative action — for example, checking
                an SMS-consent box on a form, texting a keyword to our number,
                or providing verbal consent that we document.
              </li>
              <li>
                Consent to receive text messages is <strong>not</strong> a
                condition of receiving care or any other service from
                Wellthrivea.
              </li>
              <li>
                By enrolling, you confirm you are the subscriber or customary
                user of the phone number provided and that you are at least 18
                years old (or enrolling with a parent/guardian&apos;s consent).
              </li>
            </ul>

            <h2>3. Message frequency, rates, and carriers</h2>
            <ul>
              <li>Message frequency varies based on your interactions with us.</li>
              <li>
                <strong>Message and data rates may apply</strong> according to
                your mobile plan. Wellthrivea does not charge for the messages,
                but your carrier&apos;s standard rates apply.
              </li>
              <li>
                Carriers are not liable for delayed or undelivered messages.
                Delivery is subject to effective transmission by your mobile
                carrier and is outside our control.
              </li>
            </ul>

            <h2>4. Opting out</h2>
            <p>
              Reply <strong>STOP</strong> to any Wellthrivea text message at any
              time to cancel. After you send STOP, we will send one final
              message confirming that you have been unsubscribed, and you will
              receive no further messages unless you re-enroll. You may also opt
              out by emailing{" "}
              <a href="mailto:info@wellthrivea.com">info@wellthrivea.com</a>{" "}
              with the subject &quot;SMS opt-out.&quot;
            </p>

            <h2>5. Help</h2>
            <p>
              Reply <strong>HELP</strong> to any message for assistance, or
              contact us at{" "}
              <a href="mailto:info@wellthrivea.com">info@wellthrivea.com</a>.
            </p>

            <h2>6. Privacy</h2>
            <ul>
              <li>
                Your mobile number and SMS consent status will{" "}
                <strong>not</strong> be sold or shared with third parties for
                their marketing purposes. Mobile opt-in data is not shared with
                third parties for marketing.
              </li>
              <li>
                Messaging vendors that process texts on our behalf are used only
                under contracts that protect your information, with HIPAA
                Business Associate Agreements where required.
              </li>
              <li>
                Standard SMS is not an encrypted channel. Please do not text us
                personal health information; for anything health-related, wait
                for our secure channels or contact the clinic directly once
                open.
              </li>
              <li>
                See our{" "}
                <Link href="/legal/digital-privacy-policy">
                  Digital Privacy Policy
                </Link>{" "}
                and{" "}
                <Link href="/legal/notice-of-privacy-practices">
                  Notice of Privacy Practices
                </Link>
                .
              </li>
            </ul>

            <h2>7. Changes and interruptions</h2>
            <p>
              We may suspend or terminate the SMS program, or update these
              terms, at any time. Material changes will be posted here with a
              new effective date. Your continued enrollment after a change takes
              effect constitutes acceptance.
            </p>

            <h2>8. Contact</h2>
            <p>
              Wellthrivea · PO Box 1585, New York, NY 10163 ·{" "}
              <a href="mailto:info@wellthrivea.com">info@wellthrivea.com</a> ·
              Fax (516) 620-3049
            </p>
          </Prose>
        </div>
      </section>
    </>
  );
}
