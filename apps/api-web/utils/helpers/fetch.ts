export async function authorizedGETRequest(endpoint: string, accessToken: string) {
  const response = await fetch(endpoint, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const status = response.status;
  const data = status !== 204 ? await response.json() : null;
  return { status, data };
}

export async function defaultGETRquest(endpoint: string) {
  const response = await fetch(endpoint);
  const status = response.status;
  const data = status !== 204 ? await response.json() : null;
  return { status, data };
}
