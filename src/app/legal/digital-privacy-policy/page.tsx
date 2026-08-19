import type { Metadata } from "next";
import Link from "next/link";
import { PageHead } from "@/components/site/page-head";
import { Prose } from "@/components/site/prose";
import { Notice } from "@/components/site/notice";

export const metadata: Metadata = {
  title: "Digital Privacy Policy",
  description:
    "How the Wellthrivea website handles information: no ad pixels, no analytics trackers, no session recording. What we collect, why, and your choices.",
};

export default function DigitalPrivacyPolicyPage() {
  return (
    <>
      <PageHead
        badge="Privacy & Legal"
        title="Digital Privacy Policy"
        sub="How this website — wellthrivea.com — handles information about its visitors. Short version: we built it to collect as close to nothing as possible."
        meta="Effective date: August 19, 2026 · Applies to this website only"
      />

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-5">
          <Prose>
            <Notice variant="ok" className="mb-8">
              <strong>The short version:</strong> no advertising pixels, no
              third-party analytics, no session recording, no sale of personal
              information — ever. The only information we receive is what you
              choose to send us.
            </Notice>

            <h2>Scope of this policy</h2>
            <p>
              This Digital Privacy Policy describes how Wellthrivea
              (&quot;we,&quot; &quot;us&quot;) handles information collected
              through this website. It does <strong>not</strong> describe how we
              handle protected health information as a health-care provider —
              that is governed by our{" "}
              <Link href="/legal/notice-of-privacy-practices">
                Notice of Privacy Practices
              </Link>
              , which this policy supplements but does not replace.
            </p>

            <h2>What this website does NOT do</h2>
            <ul>
              <li>
                <strong>No advertising trackers.</strong> This site contains no
                Meta (Facebook) Pixel, Google Ads tags, TikTok pixel, LinkedIn
                Insight Tag, or any other advertising technology.
              </li>
              <li>
                <strong>No third-party analytics.</strong> We do not use Google
                Analytics or similar services that profile visitors.
              </li>
              <li>
                <strong>No session recording.</strong> No screen-replay,
                heat-mapping, or keystroke-logging tools run on this site.
              </li>
              <li>
                <strong>No sale or sharing of personal information</strong> for
                advertising or marketing purposes.
              </li>
              <li>
                <strong>No tracking cookies.</strong> The site does not set
                cookies used to track you across websites.
              </li>
            </ul>
            <p>
              We take this approach because federal guidance (from the U.S.
              Department of Health and Human Services) recognizes that tracking
              technologies on health-care websites can expose sensitive
              information. Before any data-collecting vendor is ever added to
              this site, it will undergo a HIPAA review, with a Business
              Associate Agreement where required, and this policy will be
              updated.
            </p>

            <h2>Information you choose to send us</h2>
            <h3>Email updates (&quot;Stay Connected&quot;)</h3>
            <p>
              If you sign up for updates, we ask for your email address and,
              optionally, your first name and borough. We use this only to send
              you Wellthrivea updates — the opening date, hiring announcements,
              and community events. You can unsubscribe at any time using the
              link in any email or by emailing{" "}
              <a href="mailto:info@wellthrivea.com">info@wellthrivea.com</a>.
            </p>
            <h3>Careers interest form</h3>
            <p>
              If you express interest in a role, we use the information you
              provide only for hiring-related communication.
            </p>
            <h3>Email you send us</h3>
            <p>
              Email you send to our addresses is used to respond to you.{" "}
              <strong>
                Please do not include personal health information in any website
                form or email
              </strong>{" "}
              — these channels are not intended for medical questions or care.
            </p>

            <h2>Technical information</h2>
            <p>
              Like nearly all websites, our hosting infrastructure may
              automatically log basic technical data (such as IP address,
              browser type, and pages requested) for security and reliability
              purposes. We do not use these logs to identify or profile
              visitors, and we do not combine them with any other data source.
            </p>

            <h2>Fonts</h2>
            <p>
              This site&apos;s fonts are self-hosted and served from our own
              infrastructure — visiting this site does not send requests to
              third-party font services.
            </p>

            <h2>Children&apos;s privacy</h2>
            <p>
              This website is not directed to children under 13, and we do not
              knowingly collect personal information from them. If you believe a
              child has submitted information to us, contact us and we will
              delete it.
            </p>

            <h2>Your choices and rights</h2>
            <ul>
              <li>Unsubscribe from emails at any time.</li>
              <li>
                Ask us what information we hold about you from website
                interactions, or ask us to correct or delete it, by emailing{" "}
                <a href="mailto:info@wellthrivea.com">info@wellthrivea.com</a>{" "}
                with the subject &quot;Privacy.&quot;
              </li>
              <li>
                New York residents may have additional rights under state law;
                we honor verified requests consistent with applicable law.
              </li>
            </ul>

            <h2>Changes to this policy</h2>
            <p>
              If our practices change — for example, if a HIPAA-reviewed
              scheduling or forms vendor is added before opening — we will
              update this policy and its effective date before the change takes
              effect.
            </p>

            <h2>Contact</h2>
            <p>
              Privacy questions:{" "}
              <a href="mailto:info@wellthrivea.com">info@wellthrivea.com</a>{" "}
              (subject &quot;Privacy&quot;) · Wellthrivea, PO Box 1585, New
              York, NY 10163.
            </p>
          </Prose>
        </div>
      </section>
    </>
  );
}
