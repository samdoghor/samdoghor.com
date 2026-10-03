import WordPressPost from "../pages/WordPressPost";
import { createPageMeta } from "../seo";

// eslint-disable-next-line react-refresh/only-export-components
export function meta() {
  return createPageMeta(
    "Insight | Samuel Doghor",
    "Read insights, knowledge, and news from Samuel Doghor.",
    "/insights",
  );
}

export default function InsightPost() {
  return <WordPressPost categorySlug="samdoghor" label="Insight" />;
}