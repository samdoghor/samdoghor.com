import WordPressPost from "../pages/WordPressPost";
import { createPageMeta } from "../seo";

// eslint-disable-next-line react-refresh/only-export-components
export function meta() {
  return createPageMeta(
    "Project | Samuel Doghor",
    "Explore software and engineering projects by Samuel Doghor.",
    "/projects",
  );
}

export default function ProjectPost() {
  return <WordPressPost categorySlug="samdoghor-projects" label="Project" />;
}