import { describe, it, expect } from "vitest";
import { mockPlaylistTracks } from "@/util/mockPlaylistTracks";
import { sortByTitle } from "./sortByTitle";

describe(sortByTitle, () => {
  const playlistTracks = [
    ...mockPlaylistTracks.map((playlistTrack) => {
      return { ...playlistTrack, track: { ...playlistTrack.track } };
    })
  ];
  playlistTracks[0].track.title = "abc";
  playlistTracks[1].track.title = "abc";
  playlistTracks[2].track.title = "abd";

  describe("when titles are the same", () => {
    it("returns 0", () => {
      const returnVal = sortByTitle(playlistTracks[0], playlistTracks[1]);
      expect(returnVal).toBe(0);
    });
  });

  describe("when titles are different", () => {
    it("returns -1 if a < b", () => {
      const returnVal = sortByTitle(playlistTracks[1], playlistTracks[2]);
      expect(returnVal).toBe(-1);
    });

    it("returns 1 if a > b", () => {
      const returnVal = sortByTitle(playlistTracks[2], playlistTracks[1]);
      expect(returnVal).toBe(1);
    });
  });
});
