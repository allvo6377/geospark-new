// Prefix a root-relative path with the configured base path so links and
// assets work when the site is served from a sub-path (GitHub Pages).
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return path.startsWith('/') ? base + path : path;
}
