// Pure helpers: no React, no side effects. Same input -> same output, so they are easy to test.

/** Returns a NEW array sorted by date, newest first. Does not mutate the input. */
export function sortNewestFirst(posts) {
  return [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
}

/** Case-insensitive search on title and author. An empty query returns every post. */
export function searchPosts(posts, query) {
  const q = query.trim().toLowerCase();
  if (!q) return posts;
  return posts.filter(
    (post) =>
      post.title.toLowerCase().includes(q) ||
      post.author.toLowerCase().includes(q)
  );
}

/** Cuts text to `max` characters on a word boundary and adds an ellipsis. */
export function makeExcerpt(text, max = 100) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(' ');
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : max)}…`;
}

/** Formats an ISO date string ("2026-11-18") as "Nov 18, 2026". */
export function formatDate(isoDate) {
  return new Date(`${isoDate}T00:00:00`).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}
