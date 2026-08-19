import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog";

const BASE = "https://wellthrivea.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const core = [
    "",
    "/about",
    "/mission",
    "/services",
    "/home-care",
    "/behavioral-health",
    "/wellness",
    "/technology",
    "/locations",
    "/careers",
    "/insurance",
    "/faq",
    "/contact",
    "/blog",
  ].map((path) => ({
    url: `${BASE}${path}`,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const legal = [
    "/legal/digital-privacy-policy",
    "/legal/no-surprises-act",
    "/legal/notice-of-privacy-practices",
    "/legal/sms-terms",
    "/legal/non-discrimination",
    "/legal/patient-rights",
    "/legal/anonymous-hotline",
    "/legal/accessibility",
    "/legal/terms-of-use",
  ].map((path) => ({
    url: `${BASE}${path}`,
    changeFrequency: "monthly" as const,
    priority: 0.4,
  }));

  const posts = BLOG_POSTS.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(`${p.date}T12:00:00Z`),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...core, ...legal, ...posts];
}
