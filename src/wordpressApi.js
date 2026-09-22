const WORDPRESS_API = "https://www.lander.vivirgros.com/wp-json/wp/v2";
const CATEGORY_CACHE_PREFIX = "wordpress-category:";

const getCachedCategory = (slug) => {
  try {
    const cachedCategory = sessionStorage.getItem(
      `${CATEGORY_CACHE_PREFIX}${slug}`,
    );
    return cachedCategory ? JSON.parse(cachedCategory) : null;
  } catch {
    return null;
  }
};

const cacheCategory = (slug, category) => {
  try {
    sessionStorage.setItem(
      `${CATEGORY_CACHE_PREFIX}${slug}`,
      JSON.stringify(category),
    );
  } catch {
    // Session storage can be unavailable in restricted browser contexts.
  }
};

export const getWordPressCategory = async (slug, signal) => {
  const cachedCategory = getCachedCategory(slug);

  if (cachedCategory) {
    return cachedCategory;
  }

  const response = await fetch(
    `${WORDPRESS_API}/categories?slug=${encodeURIComponent(slug)}&_fields=id,name,slug`,
    { signal },
  );

  if (!response.ok) {
    throw new Error("Unable to load WordPress category.");
  }

  const categories = await response.json();
  const category = categories[0] ?? null;

  if (category) {
    cacheCategory(slug, category);
  }

  return category;
};

export const WORDPRESS_API_URL = WORDPRESS_API;
