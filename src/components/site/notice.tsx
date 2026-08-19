import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const VARIANTS = {
  alert: "border-red-200 bg-red-50 text-red-900",
  info: "border-sky-200 bg-brand-blue-soft text-brand-navy-2",
  ok: "border-green-200 bg-brand-green-soft text-green-950",
} as const;

interface NoticeProps {
  variant?: keyof typeof VARIANTS;
  children: ReactNode;
  className?: string;
}

export function Notice({ variant = "info", children, className }: NoticeProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border px-5 py-4 text-sm leading-relaxed [&_a]:font-semibold [&_a]:underline-offset-2 [&_a:hover]:underline [&_strong]:font-heading",
        VARIANTS[variant],
        className
      )}
    >
      {children}
    </div>
  );
}
