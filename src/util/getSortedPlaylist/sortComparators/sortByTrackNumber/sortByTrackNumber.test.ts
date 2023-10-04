import { describe, it, expect } from "vitest";
import { mockPlaylistTracks } from "@/util/mockPlaylistTracks";
import { sortByTrackNumber } from "./sortByTrackNumber";

describe(sortByTrackNumber, () => {
  const playlistTracks = [
    ...mockPlaylistTracks.map((playlistTrack) => {
      return { ...playlistTrack, track: { ...playlistTrack.track } };
    })
  ];
  playlistTracks[0].track.trackNumber = 1;
  playlistTracks[1].track.trackNumber = 1;
  playlistTracks[2].track.trackNumber = 2;

  describe("when track numbers are the same", () => {
    it("returns 0", () => {
      const returnVal = sortByTrackNumber(playlistTracks[0], playlistTracks[1]);
      expect(returnVal).toBe(0);
    });
  });

  describe("when track numbers are different", () => {
    it("returns -1 if a < b", () => {
      const returnVal = sortByTrackNumber(playlistTracks[1], playlistTracks[2]);
      expect(returnVal).toBe(-1);
    });

    it("returns 1 if a > b", () => {
      const returnVal = sortByTrackNumber(playlistTracks[2], playlistTracks[1]);
      expect(returnVal).toBe(1);
    });
  });
});
