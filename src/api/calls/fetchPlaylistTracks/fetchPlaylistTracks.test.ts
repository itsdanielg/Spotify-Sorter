import { describe, it, expect, vi } from "vitest";
import axios, { AxiosError } from "axios";
import { SpotifyPlaylistTrack, SpotifyPlaylistTracks, SpotifyResponseError, SpotifySimplifiedPlaylist } from "@/types";
import * as helpers from "../fetchNextRecursive";
import { fetchPlaylistTracks } from "./fetchPlaylistTracks";

describe(fetchPlaylistTracks, () => {
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
    const { data, errorResponse } = await fetchPlaylistTracks("token", "id");

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
      data: {} as SpotifyPlaylistTracks
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

      const { data, errorResponse } = await fetchPlaylistTracks("token", "id");

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
            added_at: "",
            added_by: undefined,
            is_local: false,
            track: {
              id: "",
              name: "",
              album: {
                id: "",
                name: "",
                album_type: "album",
                artists: [],
                href: "",
                images: [],
                release_date: "",
                release_date_precision: "year",
                restrictions: {
                  reason: "market"
                },
                total_tracks: 0,
                type: "album"
              },
              artists: [],
              duration_ms: 0,
              explicit: false,
              href: "",
              is_local: false,
              is_playable: false,
              popularity: 0,
              preview_url: null,
              restrictions: {
                reason: "market"
              },
              track_number: 0,
              type: "track"
            }
          }
        ] as unknown as SpotifyPlaylistTrack[],
        errorResponse: null
      });
      const { data, errorResponse } = await fetchPlaylistTracks("token", "id");

      it("errorResponse is null", () => {
        expect(errorResponse).toBeNull();
      });

      it("data is non-null", () => {
        expect(data).not.toBeNull();
      });

      describe("data is a SpotifySimplifiedPlaylist array", () => {
        const mockPlaylistTracks: SpotifyPlaylistTrack[] = [
          {
            added_at: "",
            added_by: {
              id: "",
              type: "user"
            },
            is_local: false,
            track: {
              id: "",
              name: "",
              album: {
                id: "",
                name: "",
                album_type: "album",
                artists: [],
                href: "",
                images: [],
                release_date: "",
                release_date_precision: "year",
                restrictions: {
                  reason: "market"
                },
                total_tracks: 0,
                type: "album"
              },
              artists: [],
              duration_ms: 0,
              explicit: false,
              href: "",
              is_local: false,
              is_playable: false,
              popularity: 0,
              preview_url: null,
              restrictions: {
                reason: "market"
              },
              track_number: 0,
              type: "track"
            }
          }
        ];

        Object.keys(mockPlaylistTracks[0]).forEach((key) => {
          it(`data element has ${key} property`, () => {
            expect((data as SpotifyPlaylistTrack[])[0]).toHaveProperty(key);
          });
        });
      });
    });
  });
});
