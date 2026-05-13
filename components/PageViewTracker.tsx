"use client";

import { useEffect, useRef } from "react";
import { trackBlogView, trackServiceView } from "@/lib/analytics";

/**
 * Lightweight Client Component that fires a single analytics event on mount.
 * Used inside Server Components (blog posts, service pages) to track ViewContent
 * without converting the whole page to a Client Component.
 *
 * Usage:
 *   <PageViewTracker type="blog" identifier={post.slug} />
 *   <PageViewTracker type="service" identifier="services" />
 */
type Props =
  | { type: "blog"; identifier: string }
  | { type: "service"; identifier: string };

export default function PageViewTracker(props: Props) {
  // Guard against double-firing in React Strict Mode / dev hot-reload
  const firedRef = useRef(false);

  useEffect(() => {
    if (firedRef.current) return;
    firedRef.current = true;

    if (props.type === "blog") {
      trackBlogView(props.identifier);
    } else if (props.type === "service") {
      trackServiceView(props.identifier);
    }
  }, [props.type, props.identifier]);

  return null;
}
