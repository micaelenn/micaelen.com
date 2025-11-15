import { formatTrackInfo } from '@/utils/helpers/mappings';

const getAccessToken = async () => {
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${process.env.SPOTIFY_KEYS}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refresh_token ?? "",
    }),
  });
  
  return response.json();
};
  
const defaulFetchRequest = async (endpoint: string) => {
  const { access_token } = await getAccessToken();

  const response = await fetch(endpoint, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  const status = response.status
  const data = status !== 204 ? await response.json() : null
  return { status, data }
}

const getCurrentlyPlaying = async () => { 
  const endpoint = "https://api.spotify.com/v1/me/player/currently-playing"
  return await defaulFetchRequest(endpoint)
}


const getLatestTopTrack = async () => { 
  const endpoint = "https://api.spotify.com/v1/me/top/tracks?limit=1&time_range=short_term"
  return await defaulFetchRequest(endpoint)
};

export const getTrackInformation = async () => {
  const currentlyPlaying = await getCurrentlyPlaying();
  const isTrackPlaying = currentlyPlaying.status === 200;
  
  let trackInfo

  if( isTrackPlaying ) {
    trackInfo = currentlyPlaying.data.item
  }
  else {
    const latestTopTrack = await getLatestTopTrack();
    trackInfo = latestTopTrack.data.items[0]
  }
  
  return formatTrackInfo(trackInfo)
};
