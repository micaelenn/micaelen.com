export const getLastWatched = async (type: 'movies' | 'shows') => {
  try {
    const response = await fetch(`https://api.trakt.tv/users/micaelennn/history/${type}?limit=1`, {
      headers: {
        "Content-Type": "application/json",
        "trakt-api-version": "2",
        "trakt-api-key": `${process.env.TRAKT_CLIENT_ID}`,
        "User-Agent": "web-application"
      },
    });

    const mediaJSON = await response.json()

    const map = {
      movies: 'movie',
      shows: 'show',
    };

    return mediaJSON?.[0]?.[map[type]]?.title ?? '';
  }
  catch {
    return ''
  }
}
