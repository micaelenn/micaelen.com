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
  
export const getCurrentlyPlaying = async () => { 
  const { access_token } = await getAccessToken();

  return fetch("https://api.spotify.com/v1/me/player/currently-playing", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}

export const getTrackInformation = async () => {
  const currentlyPlaying = await getCurrentlyPlaying();
  const isTrackPlaying = ( currentlyPlaying.status === 200 )
  
  let trackInfo = {}

  if ( isTrackPlaying ) {
    trackInfo = await currentlyPlaying.json();
  }

  return isTrackPlaying ? formatTrackInfo(trackInfo) : ''
}