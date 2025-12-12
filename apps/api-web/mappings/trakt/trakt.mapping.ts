import { App } from "@/configs/application";

class TraktMapping {
  static historyEndpoint = "https://api.trakt.tv/users/micaelennn/history?type=";

  getMediaData = async (type: string) => {
    const media = await this.getLastWatched(type);
    const latestMovie = media[0].movie;
    const latestShow = media[0].show;

    if (type === "movies") {
      return `${latestMovie.title}`;
    }

    if (type === "shows") {
      return `${latestShow.title}`;
    }

    return "";
  };

  getLastWatched = async (type: string) => {
    const response = await fetch(`${TraktMapping.historyEndpoint}${type}`, {
      headers: {
        "Content-Type": "application/json",
        "trakt-api-version": "2",
        "trakt-api-key": `${App.traktClientID}`,
      },
    });

    return response.json();
  };
}

export const trakt = new TraktMapping();
