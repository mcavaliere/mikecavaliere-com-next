export function isExternalUrl(url: string) {
  return /^(https?:)?\/\//.test(url);
}
