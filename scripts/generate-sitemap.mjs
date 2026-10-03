import { readdirSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";

const SITE_URL = "https://www.samdoghor.com";
const BUILD_DIR = "build/client";

const findHtmlFiles = (directory) =>
  readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const filePath = join(directory, entry.name);
    if (entry.isDirectory()) return findHtmlFiles(filePath);
    return entry.isFile() && entry.name.endsWith(".html") ? [filePath] : [];
  });

const routeFromHtmlFile = (filePath) => {
  const relativePath = relative(BUILD_DIR, filePath).split(sep).join("/");
  if (relativePath === "__spa-fallback.html") return null;
  if (relativePath === "index.html") return "/";

  const route = relativePath
    .replace(/\/index\.html$/, "")
    .replace(/\.html$/, "");

  return route ? `/${route}` : "/";
};

const escapeXml = (value) =>
  value.replace(/[<>&"']/g, (character) => {
    const entities = {
      "<": "&lt;",
      ">": "&gt;",
      "&": "&amp;",
      '"': "&quot;",
      "'": "&apos;",
    };
    return entities[character];
  });

const routes = [
  ...new Set(findHtmlFiles(BUILD_DIR).map(routeFromHtmlFile).filter(Boolean)),
].sort();
const urls = routes
  .map((route) => {
    const encodedRoute = route
      .split("/")
      .map((segment) => encodeURIComponent(segment))
      .join("/");
    return `  <url>\n    <loc>${escapeXml(`${SITE_URL}${encodedRoute}`)}</loc>\n  </url>`;
  })
  .join("\n");
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

writeFileSync("public/sitemap.xml", sitemap);
writeFileSync(join(BUILD_DIR, "sitemap.xml"), sitemap);
console.log(`Generated sitemap.xml with ${routes.length} prerendered URLs.`);
