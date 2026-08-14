// studio/schemaTypes/galleryItem.js
export default {
  name:  "galleryItem",
  title: "Gallery Item",
  type:  "document",

  fields: [
    {
      name:  "title",
      title: "Title",
      type:  "string",
      validation: (R) => R.required(),
    },
    {
      name:  "caption",
      title: "Caption / Description",
      type:  "text",
      rows:  3,
      validation: (R) => R.required(),
    },
    {
      name:  "type",
      title: "Type",
      type:  "string",
      options: {
        list: [
          { title: "Photo", value: "photo" },
          { title: "Video", value: "video" },
        ],
        layout: "radio",
      },
      validation: (R) => R.required(),
    },
    {
      name:  "category",
      title: "Category",
      type:  "string",
      options: {
        list: [
          { title: "Infrastructure",  value: "Infrastructure"  },
          { title: "Operations",      value: "Operations"      },
          { title: "Events",          value: "Events"          },
          { title: "Manufacturing",   value: "Manufacturing"   },
          { title: "Zone Overview",   value: "Zone Overview"   },
        ],
        layout: "radio",
      },
      validation: (R) => R.required(),
    },
    {
      name:    "image",
      title:   "Photo / Video Thumbnail",
      type:    "image",
      options: { hotspot: true },
      description: "Upload the photo here. For videos, upload a thumbnail image.",
      validation: (R) => R.required(),
    },
    {
      name:  "videoUrl",
      title: "Video URL",
      type:  "url",
      description: "For videos only — paste a YouTube, Vimeo or direct .mp4 URL.",
      hidden: ({ document }) => document?.type !== "video",
    },
    {
      name:  "duration",
      title: "Video Duration",
      type:  "string",
      description: "e.g. 3:42 — shown on the video card badge.",
      placeholder: "3:42",
      hidden: ({ document }) => document?.type !== "video",
    },
    {
      name:  "order",
      title: "Display Order",
      type:  "number",
      description: "Lower numbers appear first in the gallery.",
      initialValue: 99,
    },
    {
      name:         "publishedAt",
      title:        "Published Date",
      type:         "datetime",
      initialValue: () => new Date().toISOString(),
    },
  ],

  // Shows thumbnail + title in Studio sidebar
  preview: {
    select: {
      title:    "title",
      subtitle: "category",
      media:    "image",
    },
    prepare({ title, subtitle, media }) {
      return { title, subtitle: `${subtitle}`, media };
    },
  },

  orderings: [
    {
      title: "Display Order",
      name:  "orderAsc",
      by:    [{ field: "order", direction: "asc" }],
    },
  ],
};