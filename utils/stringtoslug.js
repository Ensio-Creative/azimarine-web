export function stringToSlug(str) {
  return str
    .toLowerCase()                      // Convert to lowercase
    .trim()                             // Remove leading and trailing spaces
    .replace(/[^\w\s-]/g, '')           // Remove all non-word characters (punctuation, symbols)
    .replace(/\s+/g, '-')               // Replace spaces with hyphens
    .replace(/--+/g, '-')               // Replace multiple hyphens with a single hyphen
    .replace(/^-+|-+$/g, '');           // Remove hyphens from the start or end of the string
}