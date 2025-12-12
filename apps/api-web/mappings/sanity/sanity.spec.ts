import { sanity } from "./sanity.mapping";
import { client } from "@/configs/client";
import { getImageURL } from "@/utils/helpers/assets";
import { formatDateToEnGB } from "@/utils/helpers/string";

jest.mock("@/configs/client", () => ({
  client: { fetch: jest.fn() },
}));

jest.mock("@/utils/helpers/string", () => ({
  formatDateToEnGB: jest.fn(() => "formatted-date"),
}));

jest.mock("@/utils/helpers/assets", () => ({
  getImageURL: jest.fn(() => "mocked-image-url"),
}));

const mockedFetch = client.fetch as jest.Mock;

beforeEach(() => {
  mockedFetch.mockReset();
});

// sanity.getMetadata()
describe("getMetadata", () => {
  it("should return metadata data correctly", async () => {
    const mockData = {
      title: "Personal Website",
      updates: ["learning", "playing"],
      menu: [
        { icon: "<svg></svg>", name: "Home", url: "/" },
        { icon: "<svg></svg>", name: "About", url: "/about" },
      ],
    };

    mockedFetch.mockResolvedValue(mockData);
    const result = await sanity.getMetadata();
    expect(result).toEqual(mockData);
  });
});

// sanity.getHomepageData()
describe("getHomepageData", () => {
  it("should return homepage data correctly", async () => {
    const mockData = {
      title: "Homepage Title",
      stack: ["React", "Node"],
      description: "Welcome!",
    };

    mockedFetch.mockResolvedValue(mockData);
    const result = await sanity.getHomepageData();
    expect(result).toEqual(mockData);
  });
});

// sanity.getAboutData()
describe("getAboutData", () => {
  it("should return about data correctly", async () => {
    const mockData = {
      title: "About",
      description: "Lorem ipsum",
    };

    mockedFetch.mockResolvedValue(mockData);
    const result = await sanity.getAboutData();
    expect(result).toEqual(mockData);
  });
});

// sanity.getNotesData()
describe("getNotesData", () => {
  it("should format notes correctly", async () => {
    mockedFetch.mockResolvedValue([
      {
        title: "Hello World",
        slug: { current: "hello-world" },
        excerpt: "Some text",
        topics: ["Typescript", "Node"],
        _createdAt: "2024-01-01",
      },
    ]);

    const result = await sanity.getNotesData();

    expect(result).toEqual([
      {
        title: "Hello World",
        slug: "/notes/hello-world",
        excerpt: "Some text",
        topics: ["Typescript", "Node"],
        createdAt: "formatted-date",
      },
    ]);

    expect(formatDateToEnGB).toHaveBeenCalledWith("2024-01-01");
  });
});

// sanity.getNoteData()
describe("getNoteData", () => {
  it("should return a formatted note", async () => {
    mockedFetch.mockResolvedValue({
      title: "My Note",
      slug: { current: "my-note" },
      thumbnail: { asset: "my-asset" },
      excerpt: "Some excerpt",
      content: [{ type: "block" }],
      _createdAt: "2024-01-01",
    });

    const result = await sanity.getNoteData("my-note");

    expect(result).toEqual({
      title: "My Note",
      slug: "/notes/my-note",
      thumbnail: "mocked-image-url",
      excerpt: "Some excerpt",
      createdAt: "formatted-date",
      content: [{ type: "block" }],
    });

    expect(getImageURL).toHaveBeenCalled();
    expect(formatDateToEnGB).toHaveBeenCalledWith("2024-01-01");
  });
});

// sanity.getSocialsData()
describe("getSocialsData", () => {
  it("should return socials data correctly", async () => {
    const mockData = {
      title: "Socials",
      socialMedias: [{ icon: "<svg></svg>", name: "GitHub", url: "https://github.com" }],
    };

    mockedFetch.mockResolvedValue(mockData);
    const result = await sanity.getSocialsData();
    expect(result).toEqual(mockData);
  });
});
