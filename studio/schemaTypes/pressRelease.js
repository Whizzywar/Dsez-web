
export default {
  name:  "pressRelease",
  title: "Press Release",
  type:  "document",

  fields: [
    {
      name:  "headline",
      title: "Headline",
      type:  "string",
      validation: (R) => R.required(),
    },
    {
      name:  "tag",
      title: "Category",
      type:  "string",
      options: {
        list: [
          { title: "News",           value: "NEWS"           },
          { title: "Policy",         value: "POLICY"         },
          { title: "Investment",     value: "INVESTMENT"     },
          { title: "Events",         value: "EVENTS"         },
          { title: "Infrastructure", value: "INFRASTRUCTURE" },
          { title: "Partnerships",   value: "PARTNERSHIPS"   },
        ],
        layout: "radio",
      },
      validation: (R) => R.required(),
    },
    {
      name:    "publishedAt",
      title:   "Published Date",
      type:    "date",
      validation: (R) => R.required(),
    },
    {
      name:    "summary",
      title:   "Summary",
      type:    "text",
      rows:    3,
      validation: (R) => R.required().max(300),
    },
    {
      name:    "coverImage",
      title:   "Cover Image",
      type:    "image",
      options: { hotspot: true },
      validation: (R) => R.required(),
    },
  ],

  // Shows image thumbnail + headline in the Studio sidebar
  preview: {
    select: {
      title:  "headline",
      subtitle: "tag",
      media:  "coverImage",
    },
  },
};