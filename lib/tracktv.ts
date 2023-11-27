export const getLastWatched = async (type: string) => {
  const response = await fetch(`https://api.trakt.tv/users/micaelenn/history?type=${type}`, {
  next: { revalidate: 10 },  
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
  const latestMovie = media[0].movie
  const latestShow = media[0].show

  if ( type === 'movies') {
    return `${latestMovie.title}`
  }

  if ( type === 'shows' ) {
    return `${latestShow.title}`
  }

  return ''
}