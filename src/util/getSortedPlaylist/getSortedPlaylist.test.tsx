import { describe, it, expect, vi } from "vitest";
import { mockPlaylistTracks } from "@/util/mockPlaylistTracks";
import { getSortedPlaylist } from "./getSortedPlaylist";
import * as sortComparators from "./sortComparators";

describe(getSortedPlaylist, () => {
  const playlistTracks = [
    ...mockPlaylistTracks.map((playlistTrack) => {
      return { ...playlistTrack, track: playlistTrack.track };
    })
  ];

  describe("when Date Added is passed", () => {
    const mockSort = vi.spyOn(sortComparators, "sortByAddedAt");
    getSortedPlaylist(playlistTracks, "Date Added");

    it("sortByAddedAt is called", () => {
      expect(mockSort).toHaveBeenCalled();
    });
  });

  describe("when Album is passed", () => {
    const mockSort = vi.spyOn(sortComparators, "sortByAlbum");
    getSortedPlaylist(playlistTracks, "Album");

    it("sortByAlbum is called", () => {
      expect(mockSort).toHaveBeenCalled();
    });
  });

  describe("when Artist is passed", () => {
    const mockSort = vi.spyOn(sortComparators, "sortByArtist");
    getSortedPlaylist(playlistTracks, "Artist");

    it("sortByArtist is called", () => {
      expect(mockSort).toHaveBeenCalled();
    });
  });

  describe("when Release Date is passed", () => {
    const mockSort = vi.spyOn(sortComparators, "sortByReleaseDate");
    getSortedPlaylist(playlistTracks, "Release Date");

    it("sortByReleaseDate is called", () => {
      expect(mockSort).toHaveBeenCalled();
    });
  });

  describe("when Title is passed", () => {
    const mockSort = vi.spyOn(sortComparators, "sortByTitle");
    getSortedPlaylist(playlistTracks, "Title");

    it("sortByTitle is called", () => {
      expect(mockSort).toHaveBeenCalled();
    });
  });

  describe("when Track is passed", () => {
    const mockSort = vi.spyOn(sortComparators, "sortByTrackNumber");
    getSortedPlaylist(playlistTracks, "Track");

    it("sortByTrackNumber is called", () => {
      expect(mockSort).toHaveBeenCalled();
    });
  });
});
