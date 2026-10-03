import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";
import PropTypes from "prop-types";
import { Footer, Header, ScrollToTop } from "../Index";
import { getWordPressCategory, WORDPRESS_API_URL } from "../wordpressApi";

const WordPressPost = ({ categorySlug, label }) => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const loadPost = async () => {
      setIsLoading(true);
      setError("");
      setPost(null);

      try {
        const category = await getWordPressCategory(categorySlug, controller.signal);

        if (!category) {
          throw new Error(`Unable to find the ${label.toLowerCase()} category.`);
        }

        const postResponse = await fetch(
          `${WORDPRESS_API_URL}/posts?slug=${encodeURIComponent(slug)}&_embed=wp:featuredmedia,wp:term&_fields=id,date,title,content,categories,tags,_links,_embedded`,
          { signal: controller.signal }
        );

        if (!postResponse.ok) {
          throw new Error(`Unable to load this ${label.toLowerCase()}.`);
        }

        const posts = await postResponse.json();
        const matchingPost = posts.find((item) =>
          item.categories?.includes(category.id)
        );

        if (!matchingPost) {
          throw new Error(`This ${label.toLowerCase()} could not be found.`);
        }

        setPost(matchingPost);
      } catch (fetchError) {
        if (fetchError.name === "AbortError") {
          return;
        }

        setError(fetchError.message);
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    loadPost();

    return () => controller.abort();
  }, [categorySlug, label, slug]);

  const image = post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const tags = (post?._embedded?.["wp:term"] ?? [])
    .flat()
    .filter((term) => term.taxonomy === "post_tag");

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Header />
      <Helmet>
        <title>{post ? `${post.title.rendered} | Samuel Doghor` : `${label} | Samuel Doghor`}</title>
      </Helmet>
      <main className="mx-auto w-full max-w-4xl px-6 pb-10 pt-32 md:px-8">
        {label === "Project" ? (
          <Link
            to="/#projects"
            className="mb-8 inline-flex items-center gap-2 font-semibold text-cyan-600 transition hover:text-cyan-500 dark:text-cyan-300 dark:hover:text-cyan-200"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            Back to projects
          </Link>
        ) : null}
        {isLoading ? (
          <p className="text-slate-500 dark:text-slate-400">Loading {label.toLowerCase()}...</p>
        ) : error ? (
          <p className="text-red-600 dark:text-red-400">{error}</p>
        ) : !post ? (
          <p className="text-slate-500 dark:text-slate-400">
            Unable to display this {label.toLowerCase()} right now.
          </p>
        ) : (
          <article>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">
              {label}
            </p>
            <h1
              className="mt-4 max-w-3xl font-genos text-4xl font-black leading-tight tracking-tight text-slate-900 dark:text-white md:text-5xl"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
            {tags.length > 0 ? (
              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Project tags">
                {tags.map((tag) => (
                  <li
                    key={tag.id}
                    className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/20 dark:text-slate-300"
                  >
                    {tag.name}
                  </li>
                ))}
              </ul>
            ) : null}
            {label !== "Project" && image ? (
              <img className="mt-10 max-h-[32rem] w-full rounded-2xl object-cover" src={image} alt="" />
            ) : null}
            <div
              className="wordpress-content mt-12 max-w-3xl"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </article>
        )}
      </main>
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
};

WordPressPost.propTypes = {
  categorySlug: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default WordPressPost;
