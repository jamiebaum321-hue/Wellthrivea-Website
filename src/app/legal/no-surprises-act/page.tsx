import type { Metadata } from "next";
import Link from "next/link";
import { PageHead } from "@/components/site/page-head";
import { Prose } from "@/components/site/prose";
import { Notice } from "@/components/site/notice";

export const metadata: Metadata = {
  title: "No Surprises Act & Good Faith Estimates",
  description:
    "Your protections against surprise medical bills under the federal No Surprises Act and New York law, and your right to a Good Faith Estimate of expected charges.",
};

export default function NoSurprisesActPage() {
  return (
    <>
      <PageHead
        badge="Privacy & Legal"
        title="Your protections against surprise medical bills"
        sub="The federal No Surprises Act and New York State law protect you from certain unexpected medical bills. This page explains those protections and your right to a Good Faith Estimate."
        meta="Published: August 19, 2026 · Wellthrivea Health & Wellness Network"
      />

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-5">
          <Prose>
            <h2>What is &quot;balance billing&quot; (a &quot;surprise bill&quot;)?</h2>
            <p>
              When you see a doctor or other health-care provider, you may owe
              certain out-of-pocket costs such as a copayment, coinsurance, or
              deductible. You may have additional costs — or have to pay the
              entire bill — if you see a provider or visit a facility that
              isn&apos;t in your health plan&apos;s network.
            </p>
            <p>
              &quot;Out-of-network&quot; means providers and facilities that
              haven&apos;t signed a contract with your health plan.
              Out-of-network providers may be allowed to bill you for the
              difference between what your plan pays and the full amount charged
              for a service. This is called <strong>balance billing</strong>.
              This amount is likely more than in-network costs for the same
              service and might not count toward your plan&apos;s deductible or
              annual out-of-pocket limit. A <strong>surprise bill</strong> is an
              unexpected balance bill.
            </p>

            <h2>You are protected from balance billing for:</h2>
            <h3>Emergency services</h3>
            <p>
              If you have an emergency medical condition and get emergency
              services from an out-of-network provider or facility, the most
              they can bill you is your plan&apos;s in-network cost-sharing
              amount (such as copayments and coinsurance). You{" "}
              <strong>can&apos;t</strong> be balance billed for those emergency
              services, including services you may get after you&apos;re in
              stable condition, unless you give written consent and give up your
              protections.
            </p>
            <h3>Certain services at an in-network hospital or ambulatory surgical center</h3>
            <p>
              When you get services from an in-network hospital or ambulatory
              surgical center, certain providers there may be out-of-network. In
              these cases, the most those providers can bill you is your
              plan&apos;s in-network cost-sharing amount. This applies to
              emergency medicine, anesthesia, pathology, radiology, laboratory,
              neonatology, assistant surgeon, hospitalist, or intensivist
              services. These providers <strong>can&apos;t</strong> ask you to
              give up your protections not to be balance billed.
            </p>
            <h3>New York State protections</h3>
            <p>
              New York&apos;s surprise-bill law additionally protects insured
              patients when, among other situations, an out-of-network provider
              treats you at an in-network facility without your informed
              consent, or when you are referred to an out-of-network provider
              without a written acknowledgment. When a bill qualifies as a
              surprise bill under New York law, you are responsible only for
              your in-network cost-sharing.
            </p>

            <Notice variant="info" className="my-6">
              <strong>You are never required</strong> to give up your
              protections from balance billing. You also aren&apos;t required to
              get care out-of-network. You can choose a provider or facility in
              your plan&apos;s network.
            </Notice>

            <h2>When balance billing isn&apos;t allowed, you also have these protections</h2>
            <ul>
              <li>
                You are only responsible for paying your share of the cost (like
                the copayments, coinsurance, and deductibles that you would pay
                if the provider or facility was in-network). Your health plan
                will pay out-of-network providers and facilities directly.
              </li>
              <li>
                Your health plan generally must cover emergency services without
                requiring prior authorization, cover emergency services by
                out-of-network providers, base your cost on what it would pay an
                in-network provider, and count amounts toward your deductible
                and out-of-pocket limit.
              </li>
            </ul>

            <h2>Your right to a Good Faith Estimate</h2>
            <p>
              If you are uninsured or choose not to use insurance,{" "}
              <strong>
                you have the right to receive a Good Faith Estimate of expected
                charges
              </strong>{" "}
              before you receive care.
            </p>
            <ul>
              <li>
                You can ask for a Good Faith Estimate before you schedule a
                service, and we will provide it in writing within the legally
                required timeframes.
              </li>
              <li>
                The estimate will include expected charges for the primary
                service and reasonably expected related services.
              </li>
              <li>
                If you receive a bill that is at least <strong>$400 more</strong>{" "}
                than your Good Faith Estimate, you can dispute the bill through
                the federal patient-provider dispute resolution process.
              </li>
              <li>Make sure to save a copy of your Good Faith Estimate.</li>
            </ul>
            <p>
              For questions or more information about your right to a Good Faith
              Estimate, visit{" "}
              <a href="https://www.cms.gov/nosurprises" rel="noopener">
                cms.gov/nosurprises
              </a>{" "}
              or call 1-800-985-3059.
            </p>

            <h2>Out-of-network cost estimates in New York</h2>
            <p>
              If we do not participate with your health plan, New York law
              entitles you, upon request, to the amount or estimated amount we
              would bill for a non-emergency service, in writing, before you
              receive care. See our{" "}
              <Link href="/insurance">Insurance &amp; Billing page</Link>.
            </p>

            <h2>If you believe you&apos;ve been wrongly billed</h2>
            <ul>
              <li>
                <strong>Federal:</strong> visit{" "}
                <a href="https://www.cms.gov/nosurprises" rel="noopener">
                  cms.gov/nosurprises
                </a>{" "}
                or call the No Surprises Help Desk at 1-800-985-3059.
              </li>
              <li>
                <strong>New York State:</strong> contact the NYS Department of
                Financial Services at{" "}
                <a href="https://www.dfs.ny.gov" rel="noopener">
                  dfs.ny.gov
                </a>{" "}
                or (800) 342-3736.
              </li>
              <li>
                <strong>With us:</strong>{" "}
                <a href="mailto:info@wellthrivea.com">info@wellthrivea.com</a>{" "}
                (subject &quot;Billing&quot;).
              </li>
            </ul>

            <p className="text-sm text-muted-foreground">
              This page summarizes protections under the federal No Surprises
              Act and New York State law. It is provided for information and
              will be maintained and updated as required. Once Wellthrivea
              begins providing services, this notice will also be provided to
              patients as required by law.
            </p>
          </Prose>
        </div>
      </section>
    </>
  );
}
