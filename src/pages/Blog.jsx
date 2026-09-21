import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Footer, Header, ScrollToTop } from "../Index";

const WORDPRESS_API = "https://www.lander.vivirgros.com/wp-json/wp/v2";

const Insights = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const categoryResponse = await fetch(
          `${WORDPRESS_API}/categories?slug=samdoghor`
        );

        if (!categoryResponse.ok) {
          throw new Error("Unable to find the insights category.");
        }

        const categories = await categoryResponse.json();
        const category = categories[0];

        if (!category) {
          setPosts([]);
          return;
        }

        const postsResponse = await fetch(
          `${WORDPRESS_API}/posts?categories=${category.id}&_embed&per_page=20`
        );

        if (!postsResponse.ok) {
          throw new Error("Unable to load insight posts.");
        }

        setPosts(await postsResponse.json());
      } catch (fetchError) {
        setError(fetchError.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Header />
      <Helmet>
        <title>Insights | Samuel Doghor</title>
        <meta property="title" content="Insights | Samuel Doghor" />
        <meta property="og:title" content="Insights | Samuel Doghor" />
        <meta property="description" content="Insights, knowledge, and news from Samuel Doghor." />
        <meta property="og:description" content="Insights, knowledge, and news from Samuel Doghor." />
        <meta property="image" content="/img/doghs.jpg" />
        <meta property="og:image" content="/img/doghs.jpg" />
      </Helmet>

      <main className="mx-auto w-full max-w-6xl px-6 pb-10 pt-32 md:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">
          Insights
        </p>
        <h1 className="mt-4 text-5xl font-black text-slate-900 dark:text-white md:text-6xl">
          Ideas and news worth sharing.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          Writing, news, and practical ideas on software, design, engineering, and building useful things.
        </p>

        {isLoading ? (
          <p className="mt-16 text-slate-500 dark:text-slate-400">Loading insights...</p>
        ) : error ? (
          <p className="mt-16 text-red-600 dark:text-red-400">{error}</p>
        ) : posts.length === 0 ? (
          <p className="mt-16 text-slate-500 dark:text-slate-400">
            New insights and news posts will appear here soon.
          </p>
        ) : (
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {posts.map((post) => {
              const image = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

              return (
                <article
                  key={post.id}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-slate-900/60"
                >
                  {image ? <img className="h-56 w-full object-cover" src={image} alt="" /> : null}
                  <div className="p-6">
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {new Date(post.date).toLocaleDateString()}
                    </p>
                    <h2
                      className="mt-3 text-2xl font-bold text-slate-900 dark:text-white"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                    <div
                      className="mt-4 leading-7 text-slate-600 dark:text-slate-300"
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                    />
                    <a
                      className="mt-6 inline-block font-semibold text-cyan-600 hover:text-cyan-500 dark:text-cyan-300"
                      href={post.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Read article
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </main>
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Insights;
