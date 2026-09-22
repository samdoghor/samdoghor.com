import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
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
      try {
        const category = await getWordPressCategory(categorySlug, controller.signal);

        if (!category) {
          throw new Error(`Unable to find the ${label.toLowerCase()} category.`);
        }

        const postResponse = await fetch(
          `${WORDPRESS_API_URL}/posts?slug=${encodeURIComponent(slug)}&_embed&_fields=id,date,title,content,categories,_embedded`,
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
        setIsLoading(false);
      }
    };

    loadPost();

    return () => controller.abort();
  }, [categorySlug, label, slug]);

  const image = post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Header />
      <Helmet>
        <title>{post ? `${post.title.rendered} | Samuel Doghor` : `${label} | Samuel Doghor`}</title>
      </Helmet>
      <main className="mx-auto w-full max-w-4xl px-6 pb-10 pt-32 md:px-8">
        {isLoading ? (
          <p className="text-slate-500 dark:text-slate-400">Loading {label.toLowerCase()}...</p>
        ) : error ? (
          <p className="text-red-600 dark:text-red-400">{error}</p>
        ) : (
          <article>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">
              {label}
            </p>
            <h1
              className="mt-4 max-w-3xl font-genos text-5xl font-black leading-[0.95] tracking-tight text-slate-900 dark:text-white md:text-7xl"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
            <p className="mt-5 text-sm text-slate-500 dark:text-slate-400">
              {new Date(post.date).toLocaleDateString()}
            </p>
            {image ? (
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
