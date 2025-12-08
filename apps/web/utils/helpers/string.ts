export function getMainPath(pathname: string) {
  return `/${pathname.split("/")[1]}`;
}

export function formatPath(pathname: string) {
  const path = pathname.replace(/^\//, "");
  return path.charAt(0).toUpperCase() + path.slice(1);
}
