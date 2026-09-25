const WORDPRESS_API = "https://www.lander.vivirgros.com/wp-json/wp/v2";
const CATEGORY_CACHE_PREFIX = "wordpress-category:";
const POSTS_CACHE_PREFIX = "wordpress-posts:";

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

const getCachedPosts = (cacheKey) => {
  try {
    const cachedPosts = sessionStorage.getItem(
      `${POSTS_CACHE_PREFIX}${cacheKey}`,
    );
    return cachedPosts ? JSON.parse(cachedPosts) : null;
  } catch {
    return null;
  }
};

const cachePosts = (cacheKey, posts) => {
  try {
    sessionStorage.setItem(`${POSTS_CACHE_PREFIX}${cacheKey}`, JSON.stringify(posts));
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

export const getWordPressPostsByCategory = async (
  categoryId,
  fields,
  signal,
) => {
  const cacheKey = `${categoryId}:${fields}`;
  const cachedPosts = getCachedPosts(cacheKey);

  if (cachedPosts) {
    return cachedPosts;
  }

  const response = await fetch(
    `${WORDPRESS_API}/posts?categories=${categoryId}&_embed=wp:featuredmedia&per_page=20&_fields=${fields}`,
    { signal },
  );

  if (!response.ok) {
    throw new Error("Unable to load WordPress posts.");
  }

  const posts = await response.json();
  cachePosts(cacheKey, posts);

  return posts;
};

export const WORDPRESS_API_URL = WORDPRESS_API;
