const SITE_URL = "https://www.samdoghor.com";
const DEFAULT_IMAGE = `${SITE_URL}/img/doghs.jpg`;

export const createPageMeta = (title, description, path) => [
  { title },
  { name: "description", content: description },
  { property: "og:type", content: "website" },
  { property: "og:title", content: title },
  { property: "og:description", content: description },
  { property: "og:url", content: `${SITE_URL}${path}` },
  { property: "og:image", content: DEFAULT_IMAGE },
  { name: "twitter:card", content: "summary_large_image" },
];
