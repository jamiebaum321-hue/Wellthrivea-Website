import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Long-form text container for legal and article pages. */
export function Prose({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "max-w-3xl text-[16.5px] leading-relaxed text-slate-700",
        "[&_h2]:mt-11 [&_h2]:mb-3.5 [&_h2]:text-2xl [&_h2]:font-extrabold",
        "[&_h3]:mt-7 [&_h3]:mb-2.5 [&_h3]:text-lg [&_h3]:font-bold",
        "[&_p]:mb-4",
        "[&_ul]:mb-4 [&_ul]:ml-6 [&_ul]:list-disc [&_ul>li]:mb-2",
        "[&_ol]:mb-4 [&_ol]:ml-6 [&_ol]:list-decimal [&_ol>li]:mb-2",
        "[&_a]:font-semibold [&_a]:text-brand-blue [&_a]:underline-offset-2 hover:[&_a]:underline",
        "[&_table]:my-5 [&_table]:w-full [&_table]:border-collapse [&_table]:text-sm",
        "[&_th]:border [&_th]:border-border [&_th]:bg-accent [&_th]:px-3.5 [&_th]:py-2.5 [&_th]:text-left [&_th]:font-heading [&_th]:font-bold [&_th]:text-brand-navy",
        "[&_td]:border [&_td]:border-border [&_td]:px-3.5 [&_td]:py-2.5 [&_td]:align-top",
        className
      )}
    >
      {children}
    </div>
  );
}
