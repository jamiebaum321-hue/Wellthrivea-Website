import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MdEmail, MdArrowOutward } from "react-icons/md";

export interface Newsletter3Props {
  badgeText?: string;
  heading?: string;
  description?: string;
  placeholder?: string;
  privacyPrefix?: string;
  privacyLinkText?: string;
  privacyLinkHref?: string;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Newsletter3: React.FC<Newsletter3Props> = ({
  badgeText = "Newsletter",
  heading = "Get the latest, stay inspired",
  description = "Join for design tips, fresh releases, and smarter ways to elevate your work.",
  placeholder = "Type your email here...",
  privacyPrefix = "We respect your privacy — ",
  privacyLinkText = "learn more",
  privacyLinkHref = "#",
  onSubmit,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(e);
    }
  };

  return (
    <section className="bg-background relative flex h-full w-full items-center justify-center overflow-hidden py-12 md:py-14">
      <div className="absolute inset-0 z-0 h-full w-full bg-white bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] dark:bg-black dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_0%,var(--primary),transparent)] opacity-10 dark:opacity-30"></div>
      </div>

      <div className="relative z-10 container mx-auto flex max-w-2xl flex-col items-center px-4 text-center md:px-6">
        {badgeText && (
          <Badge className="mb-3 rounded-full px-3 py-1 text-xs font-semibold">
            {badgeText}
          </Badge>
        )}

        <h2 className="text-foreground mb-3 text-2xl font-bold tracking-tight md:text-3xl">
          {heading}
        </h2>

        <p className="text-muted-foreground mb-6 max-w-xl text-sm leading-relaxed md:text-base">
          {description}
        </p>

        <div className="mx-auto flex w-full max-w-md flex-col items-center">
          <form
            onSubmit={handleSubmit}
            className="focus-within:ring-primary/20 focus-within:border-primary group border-border bg-background relative mb-3 flex w-full items-center rounded-2xl border p-1.5 shadow-sm transition-all focus-within:ring-2 hover:shadow-md"
          >
            <div className="group-focus-within:text-primary text-muted-foreground pointer-events-none flex items-center justify-center pr-3 pl-4 transition-colors">
              <MdEmail className="h-5 w-5" />
            </div>

            <Input
              type="email"
              name="email"
              placeholder={placeholder}
              required
              className="text-foreground placeholder:text-muted-foreground h-11 flex-1 border-none bg-transparent px-0 text-base shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />

            <Button
              type="submit"
              className="bg-primary hover:bg-primary/90 text-primary-foreground ml-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl shadow-sm transition-colors"
              aria-label="Subscribe"
            >
              <MdArrowOutward className="h-5 w-5" />
            </Button>
          </form>

          <p className="text-muted-foreground text-xs">
            {privacyPrefix}
            <a
              href={privacyLinkHref}
              className="text-foreground hover:text-foreground font-medium underline-offset-4 transition-colors hover:underline"
            >
              {privacyLinkText}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter3;
