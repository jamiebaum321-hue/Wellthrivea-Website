"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/about", label: "About" },
  { href: "/services", label: "What We Do" },
  { href: "/home-care", label: "Home Care" },
  { href: "/behavioral-health", label: "Behavioral Health" },
  { href: "/wellness", label: "Wellness" },
  { href: "/locations", label: "Locations" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Careers" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border/80 bg-white/85 backdrop-blur-xl transition-shadow",
        scrolled && "shadow-[0_1px_2px_rgba(6,48,79,.05),0_4px_14px_rgba(6,48,79,.06)]"
      )}
    >
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-4 px-5">
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Wellthrivea Health &amp; Wellness Network — home">
          <Image
            src="/img/logo-mark.png"
            alt=""
            width={46}
            height={48}
            className="h-11 w-auto"
            priority
          />
          <span className="leading-none">
            <span className="font-heading text-[1.4rem] font-extrabold tracking-tight">
              <span className="text-brand-green">Well</span>
              <span className="text-brand-blue">thrivea</span>
            </span>
            <span className="mt-1 hidden text-[9px] font-bold uppercase tracking-[0.22em] text-muted-foreground sm:block">
              Health &amp; Wellness Network
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main navigation">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-lg px-3 py-2 font-heading text-[0.93rem] font-semibold text-muted-foreground transition-colors hover:bg-accent hover:text-brand-navy",
                pathname.startsWith(item.href) && "bg-accent text-brand-blue"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="brand-gradient ml-2 rounded-full px-5 py-2.5 font-heading text-[0.93rem] font-bold text-white shadow-md transition-[filter] hover:brightness-110"
          >
            Stay Connected
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-brand-navy lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="flex flex-col gap-1 border-t border-border bg-white px-5 pb-6 pt-3 shadow-lg lg:hidden"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={cn(
                "rounded-lg px-3 py-3 font-heading font-semibold text-muted-foreground hover:bg-accent hover:text-brand-navy",
                pathname.startsWith(item.href) && "bg-accent text-brand-blue"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={closeMenu}
            className="brand-gradient mt-2 rounded-full px-5 py-3 text-center font-heading font-bold text-white"
          >
            Stay Connected
          </Link>
        </nav>
      )}
    </header>
  );
}
