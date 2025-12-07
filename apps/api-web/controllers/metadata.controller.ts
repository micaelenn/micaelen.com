// modules
import { Request, Response, Router } from "express";
import { setEndpoint } from "configs/application";
import { tryCatch } from "@/utils/helpers/tryCatch";

// mappings
import { spotify } from "@/mappings/spotify/spotify.mapping";
import { trakt } from "@/mappings/trakt/trakt.mapping";
import { sanity } from "@/mappings/sanity/sanity.mapping";

export const metadata = Router();

// GET
metadata.get(
  setEndpoint("metadata"),
  tryCatch(async (req: Request, res: Response) => {
    const metadata = await sanity.getMetadata();
    const listening = await spotify.getTrackData();
    const watchedMovie = await trakt.getMediaData("movies");
    const watching = await trakt.getMediaData("shows");

    const content = {
      header: {
        title: metadata.title,
        updates: {
          listening: listening,
          learning: metadata.updates.learning,
          watching: watching,
          location: metadata.updates.location,
          watchedMovie: watchedMovie,
          playing: metadata.updates.playing,
          version: metadata.updates.version,
        },
      },
      menu: metadata.menu,
    };

    res.status(200).json(content);
  })
);
