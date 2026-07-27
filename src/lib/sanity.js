import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || "4keuk6ac",
  dataset: import.meta.env.VITE_SANITY_DATASET || "p1roduction",
  apiVersion: "2026-07-27",
  useCdn: true,
});

// Fetches all press releases newest first
// "img" resolves the Sanity image reference to a real CDN URL
export const PRESS_RELEASES_QUERY = `
  *[_type == "pressRelease"] | order(publishedAt desc) {
    _id,
    headline,
    tag,
    summary,
    "date": publishedAt,
    "img":  coverImage.asset->url
  }
`;

// Converts "2026-06-30" → "JUN 30, 2026" to match your card UI
export const formatDate = (dateStr) => {
  if (!dateStr) return "";
  return new Date(dateStr + "T00:00:00")
    .toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    })
    .toUpperCase();
};
