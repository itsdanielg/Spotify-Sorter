import { describe, it, expect, vi } from "vitest";
import axios, { AxiosError } from "axios";
import { SpotifyResponseError, SpotifySimplifiedPlaylist, SpotifyUserPlaylists } from "@/types";
import * as helpers from "../fetchNextRecursive";
import { fetchCurrentUserPlaylists } from "./fetchCurrentUserPlaylists";

describe(fetchCurrentUserPlaylists, () => {
  const mockGet = vi.spyOn(axios, "get");

  describe("when fetch is unsuccessful", async () => {
    vi.resetAllMocks();

    mockGet.mockRejectedValue({
      response: {
        data: {
          error: {
            status: 401,
            message: "error caught"
          }
        } as unknown as SpotifyResponseError
      }
    } as AxiosError);
    const { data, errorResponse } = await fetchCurrentUserPlaylists("token");

    it("data is null", () => {
      expect(data).toBeNull();
    });

    it("errorResponse is non-null", () => {
      expect(errorResponse).not.toBeNull();
    });

    it("errorResponse is a SpotifyResponseError object", () => {
      expect(errorResponse).toHaveProperty("error");
    });

    it("errorResponse.error has status", () => {
      expect(errorResponse.error.status).toBe(401);
    });

    it("errorResponse.error has message", () => {
      expect(errorResponse.error.message).toBe("error caught");
    });
  });

  describe("when fetch is successful", async () => {
    vi.resetAllMocks();
    const mockFetchNextRecursive = vi.spyOn(helpers, "fetchNextRecursive");

    mockGet.mockResolvedValue({
      data: {} as SpotifyUserPlaylists
    });

    it("recursion is called", () => {
      expect(mockFetchNextRecursive).toHaveBeenCalled();
    });

    describe("when fetchNextRecursive is unsuccessful", async () => {
      mockFetchNextRecursive.mockResolvedValue({
        data: null,
        errorResponse: {
          error: {
            status: 401,
            message: "error caught"
          }
        } as unknown as SpotifyResponseError
      });

      const { data, errorResponse } = await fetchCurrentUserPlaylists("token");

      it("data is null", () => {
        expect(data).toBeNull();
      });

      it("errorResponse is non-null", () => {
        expect(errorResponse).not.toBeNull();
      });

      it("errorResponse is a SpotifyResponseError object", () => {
        expect(errorResponse).toHaveProperty("error");
      });

      it("errorResponse.error has status", () => {
        expect(errorResponse.error.status).toBe(401);
      });

      it("errorResponse.error has message", () => {
        expect(errorResponse.error.message).toBe("error caught");
      });
    });

    describe("when fetchNextRecursive is successful", async () => {
      mockFetchNextRecursive.mockResolvedValue({
        data: [
          {
            id: "",
            name: "",
            collaborative: false,
            description: null,
            href: "",
            images: [],
            owner: {
              id: "",
              display_name: null,
              images: [],
              type: "user"
            },
            public: false,
            tracks: {
              href: "",
              total: 0
            },
            type: "playlist"
          }
        ] as unknown as SpotifySimplifiedPlaylist[],
        errorResponse: null
      });
      const { data, errorResponse } = await fetchCurrentUserPlaylists("token");

      it("errorResponse is null", () => {
        expect(errorResponse).toBeNull();
      });

      it("data is non-null", () => {
        expect(data).not.toBeNull();
      });

      describe("data is a SpotifySimplifiedPlaylist array", () => {
        const mockedPlaylists: SpotifySimplifiedPlaylist[] = [
          {
            id: "",
            name: "",
            collaborative: false,
            description: null,
            href: "",
            images: [],
            owner: {
              id: "",
              display_name: null,
              images: [],
              type: "user"
            },
            public: false,
            tracks: {
              href: "",
              total: 0
            },
            type: "playlist"
          }
        ];

        Object.keys(mockedPlaylists[0]).forEach((key) => {
          it(`data element has ${key} property`, () => {
            expect((data as SpotifySimplifiedPlaylist[])[0]).toHaveProperty(key);
          });
        });
      });
    });
  });
});
