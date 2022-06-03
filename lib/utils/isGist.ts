const GIST_PATTERN =
  /^https:\/\/gist\.github\.com\/[a-zA-Z0-9]+\/[a-zA-Z0-9]+$/;

export function isGist(html) {
  return GIST_PATTERN.test(html);
}
