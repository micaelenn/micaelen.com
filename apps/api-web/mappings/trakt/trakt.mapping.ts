import { App } from "@/configs/application";
import { Endpoints } from "@/configs/endpoints";

class TraktMapping {
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
    const response = await fetch(`${Endpoints.traktHistory}${type}`, {
      headers: {
        "Content-Type": "application/json",
        "trakt-api-version": "2",
        "trakt-api-key": `${App.variables.traktClientID}`,
      },
    });

    return response.json();
  };
}

export const trakt = new TraktMapping();
