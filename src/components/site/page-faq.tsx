import Link from "next/link";
import Accordion5, {
  type Accordion5Item,
} from "@/components/base-variants/accordion/accordion-5";

interface PageFaqProps {
  items: readonly Accordion5Item[];
  title?: string;
  eyebrow?: string;
}

/** Compact per-page FAQ block (watermelon "accordion-5" module). */
export function PageFaq({
  items,
  title = "Common questions",
  eyebrow = "FAQ",
}: PageFaqProps) {
  return (
    <section className="border-t border-border bg-muted/40 py-16">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center">
          <span className="inline-block rounded-full bg-accent px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-[0.12em] text-brand-blue">
            {eyebrow}
          </span>
          <h2 className="mt-3 text-2xl font-extrabold md:text-3xl">{title}</h2>
        </div>
        <div className="mt-7">
          <Accordion5 items={items} />
        </div>
        <p className="mt-6 text-center text-sm">
          <Link
            href="/faq"
            className="font-heading font-bold text-brand-blue hover:underline"
          >
            See all frequently asked questions →
          </Link>
        </p>
      </div>
    </section>
  );
}
