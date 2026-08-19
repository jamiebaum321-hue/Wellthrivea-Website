import type { Metadata } from "next";
import Link from "next/link";
import { PageHead } from "@/components/site/page-head";
import { Prose } from "@/components/site/prose";
import { Notice } from "@/components/site/notice";

export const metadata: Metadata = {
  title: "AI Disclaimers & Transparency",
  description:
    "How Wellthrivea may use artificial intelligence — in written communications, appointment confirmations, and brand imagery for the website, newsletters, and print — and where AI is never used.",
};

export default function AiTransparencyPage() {
  return (
    <>
      <PageHead
        badge="Privacy & Legal"
        title="AI Disclaimers & Transparency"
        sub="Artificial intelligence is part of how modern organizations work. We think you deserve to know exactly where we may use it, where we never will, and who is accountable either way."
        meta="Effective date: August 19, 2026 · Wellthrivea Health & Wellness Network"
      />

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-5">
          <Prose>
            <Notice variant="ok" className="mb-8">
              <strong>The short version:</strong> we may use AI tools to help
              draft written communications, handle routine scheduling
              confirmations, and create brand imagery and graphics. A human
              reviews AI-assisted work before it is published or sent. AI does
              not diagnose, treat, triage, or make decisions about your care.
            </Notice>

            <h2>Why we publish this</h2>
            <p>
              AI tools are now embedded in everyday business software — email,
              design programs, scheduling systems, and office suites. Rather
              than leave that unspoken, we are stating plainly how these tools
              may be used at Wellthrivea, so patients, applicants, partners,
              and journalists can make informed judgments about what they read
              and receive from us.
            </p>

            <h2>Where we may use AI</h2>
            <h3>Written communications</h3>
            <ul>
              <li>
                Drafting, editing, and quality-checking responses to media and
                press inquiries, partnership requests, and general
                correspondence.
              </li>
              <li>
                Drafting website copy, newsletters, blog articles, social posts,
                and printed materials such as pamphlets and flyers.
              </li>
              <li>
                Summarizing publicly available health information as a starting
                point for educational content — always reviewed by a person
                before publication.
              </li>
            </ul>

            <h3>Scheduling and routine operations</h3>
            <ul>
              <li>
                Generating and sending appointment confirmations, reminders,
                and rescheduling logistics.
              </li>
              <li>
                Routing general inquiries to the right person, and drafting
                routine administrative replies.
              </li>
              <li>
                Internal operational work such as organizing schedules,
                preparing checklists, and drafting policies for human review.
              </li>
            </ul>

            <h3>Imagery, graphics, and design</h3>
            <ul>
              <li>
                Generating and editing brand imagery, illustrations, icons, and
                graphics used on this website, in newsletters, on social media,
                and in printed materials.
              </li>
              <li>
                Producing concept renderings of spaces and design ideas before
                they physically exist.
              </li>
            </ul>

            <h2>Where we do not use AI</h2>
            <p>
              These boundaries are deliberate, and they are not softened by
              convenience:
            </p>
            <ul>
              <li>
                <strong>No clinical decisions.</strong> AI does not diagnose,
                treat, triage, or determine what care you need. Clinical
                judgment belongs to licensed clinicians who are accountable for
                it.
              </li>
              <li>
                <strong>No autonomous clinical communication.</strong> AI does
                not independently answer medical questions or send clinical
                advice to patients.
              </li>
              <li>
                <strong>No coverage or billing determinations.</strong> AI does
                not decide what your plan covers or what you owe.
              </li>
              <li>
                <strong>No crisis response.</strong> AI is never a substitute
                for emergency or crisis services. For a life-threatening
                emergency call <strong>911</strong>; in emotional distress or
                crisis, call or text <strong>988</strong>.
              </li>
            </ul>

            <h2>Human oversight and accountability</h2>
            <p>
              AI-assisted material is reviewed by a person before it is
              published, sent, or printed. Responsibility for anything carrying
              the Wellthrivea name rests with Wellthrivea and its people — not
              with a tool. Where content is factual or health-related, a human
              reviewer checks it for accuracy and for compliance with the
              advertising and privacy rules described elsewhere in these legal
              pages.
            </p>

            <h2>Your health information and AI</h2>
            <ul>
              <li>
                We do not enter protected health information into
                general-purpose, consumer AI tools.
              </li>
              <li>
                Any AI-enabled vendor that would process protected health
                information must first pass a HIPAA review and, where required,
                operate under a Business Associate Agreement.
              </li>
              <li>
                Our handling of health information is governed by our{" "}
                <Link href="/legal/notice-of-privacy-practices">
                  Notice of Privacy Practices
                </Link>
                ; this website&apos;s data practices are described in our{" "}
                <Link href="/legal/digital-privacy-policy">
                  Digital Privacy Policy
                </Link>
                . This website carries no advertising pixels, analytics
                trackers, or session recording.
              </li>
            </ul>

            <h2>About the imagery on this website</h2>
            <Notice variant="info" className="my-6">
              Some photographs, renderings, and graphics on this site were
              created or enhanced with AI image tools. Except where explicitly
              identified, they are <strong>illustrative</strong> — they do not
              depict actual patients, actual staff members, actual events, or a
              specific existing facility, and no image should be read as
              identifying a real person or a street address. Images of spaces
              are concept renderings of what we are building.
            </Notice>
            <p>
              People shown in illustrative imagery are not patients, and nothing
              in that imagery is a testimonial or an endorsement. Once our team
              and location are finalized, real photography will progressively
              replace concept imagery, and this page will continue to identify
              what is illustrative.
            </p>

            <h2>Your choices</h2>
            <ul>
              <li>
                You may ask whether AI was involved in any communication you
                receive from us.
              </li>
              <li>
                You may ask to communicate with a person instead of an automated
                system, and we will accommodate that request.
              </li>
              <li>
                You may opt out of automated messages such as SMS reminders at
                any time — see our{" "}
                <Link href="/legal/sms-terms">SMS Terms of Use</Link>.
              </li>
            </ul>

            <h2>Changes to this statement</h2>
            <p>
              As the tools we use change, we will update this page and its
              effective date. If we ever adopt AI in a way that materially
              affects patients, we will say so here before it takes effect.
            </p>

            <h2>Questions</h2>
            <p>
              Email{" "}
              <a href="mailto:info@wellthrivea.com">info@wellthrivea.com</a>{" "}
              with the subject &quot;AI Transparency,&quot; or write to
              Wellthrivea, PO Box 1585, New York, NY 10163. Concerns can also be
              raised anonymously through our{" "}
              <Link href="/legal/anonymous-hotline">
                anonymous compliance hotline
              </Link>
              .
            </p>
          </Prose>
        </div>
      </section>
    </>
  );
}
