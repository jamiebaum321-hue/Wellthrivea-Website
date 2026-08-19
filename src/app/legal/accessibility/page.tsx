import type { Metadata } from "next";
import { PageHead } from "@/components/site/page-head";
import { Prose } from "@/components/site/prose";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Wellthrivea's commitment to digital accessibility, the standards we build to, and how to reach us if you encounter an accessibility barrier.",
};

export default function AccessibilityPage() {
  return (
    <>
      <PageHead
        badge="Privacy & Legal"
        title="Accessibility Statement"
        sub="Health care only works if everyone can reach it — including online. Here's our commitment and how to tell us when we fall short."
        meta="Last updated: August 19, 2026"
      />

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-5">
          <Prose>
            <h2>Our commitment</h2>
            <p>
              Wellthrivea is committed to making this website accessible to the
              widest possible audience, regardless of technology or ability. We
              aim to conform to the Web Content Accessibility Guidelines (WCAG)
              2.1, Level AA, and we treat accessibility as an ongoing practice —
              not a one-time checkbox.
            </p>

            <h2>What we do</h2>
            <ul>
              <li>Semantic HTML structure with proper headings and landmarks</li>
              <li>Text alternatives for meaningful images</li>
              <li>Color contrast targeted to WCAG AA levels</li>
              <li>Keyboard operability and visible focus indicators</li>
              <li>Support for reduced-motion preferences</li>
              <li>Readable, plain-language content wherever possible</li>
            </ul>

            <h2>The physical clinic</h2>
            <p>
              Our new Brooklyn home base is being designed with accessibility
              throughout — including step-free access, accessible exam rooms and
              restrooms, and clear wayfinding. Details will be published as
              construction is completed.
            </p>

            <h2>Communication assistance</h2>
            <p>
              Once open, we will provide free aids and services for effective
              communication — including qualified sign-language interpreters and
              written materials in accessible formats — and free language
              assistance for people whose primary language is not English. See
              our Non-discrimination Statement for details.
            </p>

            <h2>Found a barrier? Tell us.</h2>
            <p>
              If any part of this website is difficult to use with assistive
              technology, or you need content in a different format, contact us:
            </p>
            <ul>
              <li>
                Email:{" "}
                <a href="mailto:info@wellthrivea.com">info@wellthrivea.com</a>{" "}
                (subject &quot;Accessibility&quot;)
              </li>
              <li>Mail: Wellthrivea, PO Box 1585, New York, NY 10163</li>
              <li>Fax: (516) 620-3049</li>
            </ul>
            <p>
              Please describe the page and the problem you experienced. We take
              every report seriously and will respond as quickly as we can.
            </p>
          </Prose>
        </div>
      </section>
    </>
  );
}
