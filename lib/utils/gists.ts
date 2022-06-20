const GIST_PATTERN =
  /^https:\/\/gist\.github\.com\/[a-zA-Z0-9]+\/[a-zA-Z0-9]+$/;

const GIST_ID_PATTERN =
  /^https:\/\/gist\.github\.com\/[a-zA-Z0-9]+\/([a-zA-Z0-9]+)$/;

export function isGist(html) {
  return GIST_PATTERN.test(html);
}

export function gistIdFromUrl(url) {
  const matches = url.match(GIST_ID_PATTERN);
  return matches[1];
}
