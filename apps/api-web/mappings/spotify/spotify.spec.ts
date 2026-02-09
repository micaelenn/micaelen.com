import { Endpoints } from "@/configs/endpoints";
import { client } from "@/configs/client";
import { spotify } from "@/mappings/spotify/spotify.mapping";
import { authorizedGETRequest } from "@/utils/helpers/fetch";
import { getFunctionSource } from "@/utils/helpers/specs";

jest.mock("@/utils/helpers/fetch", () => ({
  authorizedGETRequest: jest.fn(),
}));

const mockedFetch = client.fetch as jest.Mock;
global.fetch = jest.fn();

describe("SpotifyMapping", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // spotify.getAccessToken()
  describe("getAccessToken", () => {
    beforeEach(() => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ access_token: "mock_token" }),
      });
    });

    // test correct endpoint, method and content type
    it("should use the correct endpoint, method and content type", async () => {
      const expectedUrl = `${Endpoints.spotify.token}`;
      await spotify.getAccessToken();
      const [url, options] = (global.fetch as jest.Mock).mock.calls[0];
      const headers = options.headers;
      const method = options.method;
      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(url).toBe(expectedUrl);
      expect(method).toBe("POST");
      expect(headers["Content-Type"]).toBe("application/x-www-form-urlencoded");
    });

    // test if private keys are exposed
    it("should ensure Authorization and refresh_token use .env variables and are not hardcoded", async () => {
      const functionSource = getFunctionSource(spotify.getAccessToken);
      const usesAppSpotifyKeys = functionSource.includes("App.variables.spotifyKeys");
      const usesAppRefreshToken = functionSource.includes("App.variables.spotifyRefreshTokens");
      expect(usesAppSpotifyKeys).toBe(true);
      expect(usesAppRefreshToken).toBe(true);
    });
  });

  // spotify.getTrackData()
  describe("getTrackData", () => {
    it("should return a string in 'song - artist' format", async () => {
      const mockAccessToken = "mock_token";
      jest.spyOn(spotify, "getAccessToken").mockResolvedValue(mockAccessToken);

      (authorizedGETRequest as unknown as jest.Mock).mockResolvedValueOnce({
        status: 200,
        data: {
          item: {
            name: "Bohemian Rhapsody",
            artists: [{ name: "Queen" }],
          },
        },
      });

      const result = await spotify.getTrackData();
      expect(typeof result).toBe("string");
      expect(result).toMatch(/^.+ - .+$/);
    });
  });
});
