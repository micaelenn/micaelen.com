import dotenv from "dotenv";
import { fromEnv } from "@/utils/helpers/env";
dotenv.config({ path: ".env", quiet: true });

export class App {
  static variables = {
    port: fromEnv('PORT'),
    spotifyKeys: fromEnv('SPOTIFY_KEYS'),
    spotifyRefreshTokens: fromEnv('SPOTIFY_REFRESH_TOKEN'),
    traktClientID: fromEnv('TRAKT_CLIENT_ID'),
    sanityProjectdID: fromEnv('SANITY_PROJECT_ID'),
    sanityDataset: fromEnv('SANITY_DATASET'),
  }
}

export const setEndpoint = (endpoint: string) => {
  return `/api/v1/${endpoint}`;
};
