import { useEffect, useState } from "react";
import { getWordPressCategory, getWordPressPostsByCategory } from "../wordpressApi";

const projectFilters = ["Software Development", "Engineering Design"];

const getProjectTerms = (project) =>
  (project._embedded?.["wp:term"] ?? [])
    .flat()
    .filter((term) => term.slug !== "samdoghor-projects");

const WordPressProjects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const controller = new AbortController();

    const loadProjects = async () => {
      try {
        const category = await getWordPressCategory(
          "samdoghor-projects",
          controller.signal
        );

        if (!category) {
          setProjects([]);
          return;
        }

        setProjects(
          await getWordPressPostsByCategory(
            category.id,
            "id,title,excerpt,slug,categories,_links,_embedded",
            controller.signal,
            "wp:featuredmedia,wp:term",
          ),
        );
      } catch (fetchError) {
        if (fetchError.name === "AbortError") {
          return;
        }

        setError(fetchError.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadProjects();

    return () => controller.abort();
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

  const visibleProjects = projects.filter((project) =>
    activeFilter === "All" ||
    getProjectTerms(project).some(
      (term) => term.name.toLowerCase() === activeFilter.toLowerCase(),
    ),
  );

  return (
    <>
      <div className="mt-10 flex flex-wrap gap-3" aria-label="Filter projects">
        {["All", ...projectFilters].map((filter) => (
          <button
            key={filter}
            type="button"
            aria-pressed={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
              activeFilter === filter
                ? "border-cyan-600 bg-cyan-600 text-white dark:border-cyan-300 dark:bg-cyan-300 dark:text-slate-950"
                : "border-slate-200 text-slate-600 hover:border-cyan-500 hover:text-cyan-600 dark:border-white/20 dark:text-slate-200 dark:hover:border-cyan-300 dark:hover:text-cyan-300"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      {visibleProjects.length === 0 ? (
        <p className="mt-8 text-slate-500 dark:text-slate-400">
          No projects found in this category.
        </p>
      ) : (
        <div className="mt-8 grid gap-8">
          {visibleProjects.map((project) => {
        const image = project._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
        const terms = getProjectTerms(project);

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
                href={`/projects/${project.slug}`}
              >
                View project
              </a>
              {terms.length > 0 ? (
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Project tags">
                  {terms.map((term) => (
                    <li
                      key={`${term.taxonomy}-${term.id}`}
                      className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/20 dark:text-slate-300"
                    >
                      {term.name}
                    </li>
                  ))}
                </ul>
              ) : null}
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
      )}
    </>
  );
};

export default WordPressProjects;
