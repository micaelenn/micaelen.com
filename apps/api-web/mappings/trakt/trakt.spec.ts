import { App } from "@/configs/application";
import { Endpoints } from "@/configs/endpoints";
import { setHardcodedKeyPatterns } from "@/utils/helpers/string";
import { getFunctionSource } from "@/utils/helpers/specs";
import { trakt } from "./trakt.mapping";

global.fetch = jest.fn();

describe("TraktMapping", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const traktClientID = App.variables.traktClientID

  // trakt.getLastWatched()
  describe("getLastWatched", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      (global.fetch as jest.Mock).mockResolvedValue({
        json: jest.fn().mockResolvedValue({ data: "mock data" }),
      });
    });

    // test correct endpoint
    it("should use the correct endpoint URL", async () => {
      const type = "movies";
      const expectedUrl = `${Endpoints.traktHistory}${type}`;
      await trakt.getLastWatched(type);
      expect(global.fetch).toHaveBeenCalledTimes(1);
      const [url] = (global.fetch as jest.Mock).mock.calls[0];
      expect(url).toBe(expectedUrl);
      expect(url).toContain(Endpoints.traktHistory);
    });

    // test required headers
    it("should include all required headers", async () => {
      const type = "episodes";
      await trakt.getLastWatched(type);
      const [, options] = (global.fetch as jest.Mock).mock.calls[0];
      const headers = options.headers;
      expect(headers).toHaveProperty("Content-Type");
      expect(headers).toHaveProperty("trakt-api-key");
      expect(headers).toHaveProperty("trakt-api-version");
      expect(headers["Content-Type"]).toBe("application/json");
      expect(headers["trakt-api-version"]).toBe("2");
      expect(Object.keys(headers)).toHaveLength(3);
    });

    // test if private api-key is exposed
    it("should ensure trakt-api-key uses .env variable and is not hardcoded", async () => {
      const type = "shows";
      const functionSource = getFunctionSource(trakt.getLastWatched);
      const hardcodedKeyPatterns = setHardcodedKeyPatterns("trakt-api-key");
      expect(hardcodedKeyPatterns.some((pattern) => pattern.test(functionSource))).toBe(false);
      const usesAppVariable = functionSource.includes("App.variables.traktClientID");
      expect(usesAppVariable).toBe(true);
      await trakt.getLastWatched(type);
      const [, options] = (global.fetch as jest.Mock).mock.calls[0];
      const apiKey = options.headers["trakt-api-key"];
      expect(apiKey).toBe(traktClientID);
      expect(traktClientID).toBeDefined();
      expect(typeof traktClientID).toBe("string");
      expect(traktClientID?.length).toBeGreaterThan(0);
    });
  });

  // trakt.getMediaData()
  describe("getMediaData", () => {
    async function getMedia(mockResponse: object, mediaType: string, expected: string) {
      jest.spyOn(trakt, "getLastWatched").mockResolvedValue(mockResponse);
      const result = await trakt.getMediaData(mediaType);
      expect(result).toBe(expected);
    }

    // test movie return
    it("should return the title of the last watched movie", async () => {
      const mockResponse = [{ movie: { title: "Interstellar" }, show: null }];
      getMedia(mockResponse, "movies", "Interstellar");
    });

    // test show return
    it("should return the title of the last watched show", async () => {
      const mockResponse = [{ movie: null, show: { title: "Severance" } }];
      getMedia(mockResponse, "shows", "Severance");
    });
  });
});
