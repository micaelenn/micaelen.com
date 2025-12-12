export class Endpoints {
  // Trakt
  static traktHistory = "https://api.trakt.tv/users/micaelennn/history?type=";

  // Spotify
  static spotify = {
    token: "https://accounts.spotify.com/api/token",
    playing: "https://api.spotify.com/v1/me/player/currently-playing",
    topTrack: "https://api.spotify.com/v1/me/top/tracks?limit=1&time_range=short_term",
  };
}
