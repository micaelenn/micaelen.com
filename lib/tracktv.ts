export const getLastWatched = async (type: string) => {
  const response = await fetch(`https://api.trakt.tv/users/micaelenn/watched/${type}`, {
    headers: {
      "Content-Type": "application/json",
      "trakt-api-version": "2",
      "trakt-api-key": `${process.env.TRACKT_CLIENT_ID}`
    },
  });

  return response.json();
}

export const getMediaInformation = async (type: string) => {
  const media = await getLastWatched(type)

  if ( type === 'movies') {
    return `${media[0].movie.title} (${media[0].movie.year})`
  }

  if ( type === 'shows' ) {
    return `${media[0].show.title}`
  }

  return ''
}