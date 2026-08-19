import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { BLOG_POSTS, formatDate, getPost } from "@/lib/blog";
import { Prose } from "@/components/site/prose";
import { Notice } from "@/components/site/notice";
import { NewsletterSignup } from "@/components/site/newsletter-signup";

interface Params {
  slug: string;
}

export function generateStaticParams(): Params[] {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article not found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <section className="hero-surface py-14 text-white md:py-16">
        <div className="mx-auto max-w-3xl px-5">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-sky-200/90 hover:text-white"
          >
            <ArrowLeft className="size-4" /> All articles
          </Link>
          <p className="mt-6 font-heading text-sm font-bold uppercase tracking-widest text-brand-green-bright">
            {post.category}
          </p>
          <h1 className="mt-3 text-3xl font-extrabold leading-[1.15] !text-white md:text-[2.6rem]">
            {post.title}
          </h1>
          <div className="mt-6 flex items-center gap-3">
            <Image
              src={post.author.avatar}
              alt=""
              width={40}
              height={42}
              className="size-10 rounded-xl bg-white object-contain p-0.5"
            />
            <div className="text-sm">
              <p className="font-semibold text-white">{post.author.name}</p>
              <p className="text-sky-200/70">
                {formatDate(post.date)} · {post.readMinutes} min read
              </p>
            </div>
          </div>
        </div>
      </section>

      <article className="py-14">
        <div className="mx-auto max-w-3xl px-5">
          <Prose>
            {post.body.map((block, i) => {
              if (block.type === "h2") return <h2 key={i}>{block.text}</h2>;
              if (block.type === "ul")
                return (
                  <ul key={i}>
                    {block.items?.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                );
              return <p key={i}>{block.text}</p>;
            })}
          </Prose>

          <Notice variant="info" className="mt-10">
            <strong>Medical disclaimer:</strong> this article is general health
            information, not medical advice, and is not a substitute for
            individualized care from a licensed clinician. If you are
            experiencing a life-threatening emergency, call <strong>911</strong>{" "}
            or go to the nearest emergency department. See our{" "}
            <Link href="/legal/terms-of-use">
              Terms of Use &amp; Medical Disclaimer
            </Link>
            .
          </Notice>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-border bg-muted/60 px-6 py-5">
            <p className="font-heading font-bold text-brand-navy">
              More plain-language health reading
            </p>
            <Link
              href="/blog"
              className="brand-gradient rounded-full px-6 py-2.5 font-heading text-sm font-bold text-white transition-[filter] hover:brightness-110"
            >
              Browse all articles
            </Link>
          </div>
        </div>
      </article>

      <NewsletterSignup />
    </>
  );
}
