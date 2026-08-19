import type { ReactNode } from "react";

interface PageHeadProps {
  badge?: string;
  title: ReactNode;
  sub?: ReactNode;
  meta?: string;
}

export function PageHead({ badge, title, sub, meta }: PageHeadProps) {
  return (
    <section className="hero-surface py-16 text-white md:py-20">
      <div className="mx-auto max-w-7xl px-5">
        {badge && (
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/35 bg-white/15 px-4 py-2 font-heading text-sm font-bold backdrop-blur-md">
            <span className="pulse-dot size-2.5 rounded-full bg-brand-green-bright" />
            {badge}
          </span>
        )}
        <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.12] !text-white md:text-5xl">
          {title}
        </h1>
        {sub && (
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-sky-100/85">
            {sub}
          </p>
        )}
        {meta && <p className="mt-5 text-sm text-sky-200/60">{meta}</p>}
      </div>
    </section>
  );
}
