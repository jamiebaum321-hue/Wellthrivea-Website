"use client";

import { Mail } from "lucide-react";
import { InlineAction } from "@/components/watermelon-ui/inline-action";
import { CONTACT_EMAIL } from "@/lib/site-config";

/** One-tap email copy built on the watermelon "inline-action" module. */
export function CopyEmail() {
  return (
    <InlineAction
      label={CONTACT_EMAIL}
      icon={<Mail className="size-5" />}
      actionText="Copy email"
      theme="light"
      onAction={async () => {
        await navigator.clipboard.writeText(CONTACT_EMAIL);
      }}
    />
  );
}
