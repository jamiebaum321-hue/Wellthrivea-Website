"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { IconType } from "react-icons";
import {
  PiListBold,
  PiFirstAidKitBold,
  PiLeafBold,
  PiCpuBold,
  PiReceiptBold,
  PiUsersThreeBold,
} from "react-icons/pi";
import Blog2 from "@/components/watermelon-ui/blog-2";
import { FilterDisclosure, type FilterItem } from "@/components/watermelon-ui/filter-disclosure";
import { ContinuousPagination } from "@/components/watermelon-ui/continuous-pagination";
import { BLOG_POSTS, formatDate } from "@/lib/blog";

const PAGE_SIZE = 4;

const FILTER_ICONS: Record<string, IconType> = {
  all: PiListBold,
  "urgent-care-101": PiFirstAidKitBold,
  wellness: PiLeafBold,
  "smart-care": PiCpuBold,
  billing: PiReceiptBold,
  community: PiUsersThreeBold,
};

const FILTER_ITEMS: FilterItem[] = [
  { id: "all", label: "All Topics", icon: PiListBold },
  { id: "urgent-care-101", label: "Urgent Care 101", icon: FILTER_ICONS["urgent-care-101"] },
  { id: "wellness", label: "Wellness", icon: FILTER_ICONS.wellness },
  { id: "smart-care", label: "Smart Care", icon: FILTER_ICONS["smart-care"] },
  { id: "billing", label: "Billing & Insurance", icon: FILTER_ICONS.billing },
  { id: "community", label: "Community", icon: FILTER_ICONS.community },
];

/**
 * Blog archive built on three watermelon modules:
 * "blog-2" (card grid), "filter-disclosure" (topic filter), and
 * "continuous-pagination" (pager).
 */
export function BlogExplorer() {
  const [category, setCategory] = useState("all");
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () =>
      category === "all"
        ? BLOG_POSTS
        : BLOG_POSTS.filter((p) => p.categoryId === category),
    [category]
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pagePosts = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div>
      <div className="flex flex-col items-center gap-2">
        <p className="font-heading text-sm font-bold uppercase tracking-widest text-muted-foreground">
          Filter by topic
        </p>
        <FilterDisclosure
          items={FILTER_ITEMS}
          defaultActiveId="all"
          onChange={(id) => {
            setCategory(id);
            setPage(1);
          }}
        />
      </div>

      <Blog2
        className="!py-6"
        header={{
          heading:
            category === "all"
              ? "Every article"
              : FILTER_ITEMS.find((f) => f.id === category)?.label ?? "Articles",
          description:
            "Educational reading only — never medical advice, never a substitute for care from a licensed clinician.",
          ctaText: "Get new articles by email",
          ctaHref: "/contact",
        }}
        posts={pagePosts.map((p) => ({
          meta: `${p.category} · ${formatDate(p.date)} · ${p.readMinutes} min`,
          title: p.title,
          href: `/blog/${p.slug}`,
          author: p.author,
        }))}
        renderCtaLink={({ href, children }) => (
          <Link key={href} href={href}>
            {children}
          </Link>
        )}
        renderCardLink={({ href, children }) => (
          <Link
            key={href}
            href={href}
            className="block rounded-[1.5rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            {children}
          </Link>
        )}
      />

      {totalPages > 1 && (
        <div className="pb-4 pt-2">
          <ContinuousPagination
            key={category}
            totalPages={totalPages}
            defaultPage={1}
            onPageChange={setPage}
          />
        </div>
      )}
    </div>
  );
}
