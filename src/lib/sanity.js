import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || "4keuk6ac",
  dataset: import.meta.env.VITE_SANITY_DATASET || "p1roduction",
  apiVersion: "2026-07-27",
  useCdn: true,
});

//  News page query: Fetches all press releases newest first
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


// Gallery page query
export const GALLERY_QUERY = `
  *[_type == "galleryItem"] | order(order asc, publishedAt desc) {
    _id,
    title,
    caption,
    type,
    category,
    videoUrl,
    duration,
    "img":   image.asset->url,
    "thumb": image.asset->url
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
