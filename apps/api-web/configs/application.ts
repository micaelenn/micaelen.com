import dotenv from "dotenv";
dotenv.config({ path: ".env", quiet: true });

export class App {
  static port: string | undefined = process.env.PORT;
  static spotifyKeys: string | undefined = process.env.SPOTIFY_KEYS;
  static spotifyRefreshTokens: string | undefined = process.env.SPOTIFY_REFRESH_TOKEN;
  static traktClientID: string | undefined = process.env.TRAKT_CLIENT_ID;
  static sanityProjectdID: string | undefined = process.env.SANITY_PROJECT_ID;
  static sanityDataset: string | undefined = process.env.SANITY_DATASET;
}

export const setEndpoint = (endpoint: string) => {
  return `/api/v1/${endpoint}`;
};
