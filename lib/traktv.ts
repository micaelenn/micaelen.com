import { replaceDots } from "@/utils/helpers/string";

export const getLastWatched = async (type: 'movies' | 'shows') => {
  const historyEndpoint = `https://api.trakt.tv/users/micaelennn/history/${type}?limit=1`

  try {
    const response = await fetch(historyEndpoint, {
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

    const mediaTitle = mediaJSON?.[0]?.[map[type]]?.title ?? ''
    return replaceDots(mediaTitle)
  }
  catch {
    return ''
  }
}
