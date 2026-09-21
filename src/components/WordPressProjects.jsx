import { useEffect, useState } from "react";

const WORDPRESS_API = "https://www.lander.vivirgros.com/wp-json/wp/v2";

const WordPressProjects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const categoryResponse = await fetch(
          `${WORDPRESS_API}/categories?slug=samdoghor-projects`
        );

        if (!categoryResponse.ok) {
          throw new Error("Unable to find the projects category.");
        }

        const categories = await categoryResponse.json();
        const category = categories[0];

        if (!category) {
          setProjects([]);
          return;
        }

        const postsResponse = await fetch(
          `${WORDPRESS_API}/posts?categories=${category.id}&_embed&per_page=20`
        );

        if (!postsResponse.ok) {
          throw new Error("Unable to load projects.");
        }

        setProjects(await postsResponse.json());
      } catch (fetchError) {
        setError(fetchError.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadProjects();
  }, []);

  if (isLoading) {
    return <p className="mt-10 text-slate-500 dark:text-slate-400">Loading projects...</p>;
  }

  if (error) {
    return <p className="mt-10 text-red-600 dark:text-red-400">{error}</p>;
  }

  if (projects.length === 0) {
    return (
      <p className="mt-10 text-slate-500 dark:text-slate-400">
        New projects will appear here soon.
      </p>
    );
  }

  return (
    <div className="mt-10 grid gap-8">
      {projects.map((project) => {
        const image = project._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

        return (
          <article
            className="grid gap-6 rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-slate-900/60 lg:grid-cols-[1.2fr,1fr]"
            key={project.id}
          >
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">
                Project
              </p>
              <h3
                className="mt-3 text-2xl font-bold text-slate-900 dark:text-white"
                dangerouslySetInnerHTML={{ __html: project.title.rendered }}
              />
              <div
                className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300"
                dangerouslySetInnerHTML={{ __html: project.excerpt.rendered }}
              />
              <a
                className="mt-5 inline-block font-semibold text-cyan-600 hover:text-cyan-500 dark:text-cyan-300"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                View project
              </a>
            </div>
            {image ? (
              <img
                src={image}
                alt=""
                className="h-64 w-full rounded-2xl border border-slate-200 object-cover dark:border-white/10"
              />
            ) : null}
          </article>
        );
      })}
    </div>
  );
};

export default WordPressProjects;
