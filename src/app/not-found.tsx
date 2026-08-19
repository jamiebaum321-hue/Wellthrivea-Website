import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-28 text-center">
      <div className="mx-auto max-w-2xl px-5">
        <span className="inline-block rounded-full bg-accent px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-[0.12em] text-brand-blue">
          404
        </span>
        <h1 className="mt-5 text-4xl font-extrabold md:text-5xl">
          That page seems to be out of the office.
        </h1>
        <p className="mt-4 text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
          Let&apos;s get you back to something useful.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="brand-gradient rounded-full px-7 py-3.5 font-heading font-bold text-white shadow-md transition-[filter] hover:brightness-110"
          >
            Back to home
          </Link>
          <Link
            href="/faq"
            className="rounded-full border border-border bg-white px-7 py-3.5 font-heading font-bold text-brand-navy shadow-sm transition-colors hover:border-brand-blue hover:text-brand-blue"
          >
            Browse the FAQ
          </Link>
        </div>
      </div>
    </section>
  );
}
