// internal modules
import { App } from "configs/application";
import { authorizedGETRequest } from "@/utils/helpers/fetch";
import { formatTrackInfo } from "@/utils/helpers/string";

class SpotifyMapping {
  static tokenEndpoint = "https://accounts.spotify.com/api/token";
  static playingEndpoint = "https://api.spotify.com/v1/me/player/currently-playing";
  static topTrackEndpoint = "https://api.spotify.com/v1/me/top/tracks?limit=1&time_range=short_term";

  getTrackData = async () => {
    const accessToken = await this.getAccessToken();
    const currentlyPlaying = await authorizedGETRequest(SpotifyMapping.playingEndpoint, accessToken);
    const isTrackPlaying = currentlyPlaying.status === 200;

    let trackInfo;

    if (isTrackPlaying) {
      trackInfo = currentlyPlaying.data.item;
    } else {
      const latestTopTrack = await authorizedGETRequest(SpotifyMapping.topTrackEndpoint, accessToken);
      trackInfo = latestTopTrack.data.items[0];
    }

    return formatTrackInfo(trackInfo);
  };

  getAccessToken = async () => {
    const response = await fetch(SpotifyMapping.tokenEndpoint, {
      method: "POST",
      headers: {
        Authorization: `Basic ${App.spotifyKeys}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: App.spotifyRefreshTokens ?? "",
      }),
    });

    const responseJSON = await response.json();
    return responseJSON.access_token;
  };
}

export const spotify = new SpotifyMapping();
