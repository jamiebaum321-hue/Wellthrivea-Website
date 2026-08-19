import type { Metadata } from "next";
import { PageHead } from "@/components/site/page-head";
import { Notice } from "@/components/site/notice";
import { BlogExplorer } from "@/components/site/blog-explorer";
import { NewsletterSignup } from "@/components/site/newsletter-signup";

export const metadata: Metadata = {
  title: "Health Blog",
  description:
    "Educational articles from Wellthrivea Urgent Care: urgent care 101, seasonal wellness, smart-care technology, billing rights, and Brooklyn community stories.",
};

export default function BlogPage() {
  return (
    <>
      <PageHead
        badge="Health education from the Wellthrivea team"
        title="Read up while we build."
        sub="Practical, plain-language health reading for the five boroughs — what urgent care does, how to stay well through NYC seasons, and the patient rights most people never hear about."
      />

      <section className="py-12">
        <div className="mx-auto max-w-6xl px-5">
          <Notice variant="info" className="mx-auto max-w-3xl">
            <strong>Educational content only.</strong> Articles here are general
            information — not medical advice, a diagnosis, or a substitute for
            individualized care from a licensed clinician. For a life-threatening
            emergency, call <strong>911</strong> or go to the nearest emergency
            department.
          </Notice>
          <div className="mt-6">
            <BlogExplorer />
          </div>
        </div>
      </section>

      <NewsletterSignup />
    </>
  );
}
