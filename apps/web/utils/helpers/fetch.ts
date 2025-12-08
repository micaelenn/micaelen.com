export async function defaultGETRequest(endpoint: string) {
  const response = await fetch(endpoint);
  const status = response.status;
  const content = status !== 204 ? await response.json() : null;
  return { status, content };
}
