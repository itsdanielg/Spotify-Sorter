import { describe, it, expect } from "vitest";
import { mockPlaylistTracks } from "@/util/mockPlaylistTracks";
import { sortByAlbum } from "./sortByAlbum";

describe(sortByAlbum, () => {
  const playlistTracks = [
    ...mockPlaylistTracks.map((playlistTrack) => {
      return { ...playlistTrack, track: { ...playlistTrack.track } };
    })
  ];
  playlistTracks[0].track.album = "abc";
  playlistTracks[1].track.album = "abc";
  playlistTracks[2].track.album = "abd";

  describe("when albums are the same", () => {
    it("returns 0", () => {
      const returnVal = sortByAlbum(playlistTracks[0], playlistTracks[1]);
      expect(returnVal).toBe(0);
    });
  });

  describe("when albums are different", () => {
    it("returns -1 if a < b", () => {
      const returnVal = sortByAlbum(playlistTracks[1], playlistTracks[2]);
      expect(returnVal).toBe(-1);
    });

    it("returns 1 if a > b", () => {
      const returnVal = sortByAlbum(playlistTracks[2], playlistTracks[1]);
      expect(returnVal).toBe(1);
    });
  });
});
