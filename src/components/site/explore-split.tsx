"use client";

import { useRouter } from "next/navigation";
import SplitButton from "@/components/watermelon-ui/split-button";

const DESTINATIONS: Record<string, string> = {
  Services: "/services",
  Technology: "/technology",
  Careers: "/careers",
};

/** Home-hero quick nav built on the watermelon "split-button" module. */
export function ExploreSplit() {
  const router = useRouter();
  return (
    <SplitButton
      mainButton="Explore Wellthrivea"
      buttons={Object.keys(DESTINATIONS)}
      onSelect={(name) => {
        const href = DESTINATIONS[name];
        if (href) router.push(href);
      }}
    />
  );
}
