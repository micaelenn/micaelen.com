// internal modules
import { App } from "@/configs/application";
import { Endpoints } from "@/configs/endpoints";
import { authorizedGETRequest } from "@/utils/helpers/fetch";
import { formatTrackInfo } from "@/utils/helpers/string";

class SpotifyMapping {
  getTrackData = async () => {
    const accessToken = await this.getAccessToken();
    const currentlyPlaying = await authorizedGETRequest(Endpoints.spotify.playing, accessToken);
    const isTrackPlaying = currentlyPlaying.status === 200;

    let trackInfo;

    if (isTrackPlaying) {
      trackInfo = currentlyPlaying.data.item;
    } else {
      const latestTopTrack = await authorizedGETRequest(Endpoints.spotify.topTrack, accessToken);
      trackInfo = latestTopTrack.data.items[0];
    }

    return formatTrackInfo(trackInfo);
  };

  getAccessToken = async () => {
    const response = await fetch(Endpoints.spotify.token, {
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
