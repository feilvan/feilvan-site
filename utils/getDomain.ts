export default (url: string | URL) => {
  const domain = new URL(url).hostname.replace('www.', '');
  return domain;
}
