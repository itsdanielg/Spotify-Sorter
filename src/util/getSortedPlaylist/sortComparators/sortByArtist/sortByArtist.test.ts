import { describe, it, expect } from "vitest";
import { mockPlaylistTracks } from "@/util/mockPlaylistTracks";
import { sortByArtist } from "./sortByArtist";

describe(sortByArtist, () => {
  const playlistTracks = [
    ...mockPlaylistTracks.map((playlistTrack) => {
      return { ...playlistTrack, track: { ...playlistTrack.track } };
    })
  ];
  playlistTracks[0].track.artists = [];
  playlistTracks[1].track.artists = ["a"];
  playlistTracks[2].track.artists = ["a"];
  playlistTracks[3].track.artists = ["b"];

  describe("when one track does not have artists listed", () => {
    it("returns track with non-empty artist", () => {
      const returnVal = sortByArtist(playlistTracks[0], playlistTracks[1]);
      expect(returnVal).toBe(1);
    });
  });

  describe("when main artists are the same", () => {
    it("returns 0", () => {
      const returnVal = sortByArtist(playlistTracks[1], playlistTracks[2]);
      expect(returnVal).toBe(0);
    });
  });

  describe("when main artists are different", () => {
    it("returns -1 if a < b", () => {
      const returnVal = sortByArtist(playlistTracks[2], playlistTracks[3]);
      expect(returnVal).toBe(-1);
    });

    it("returns 1 if a > b", () => {
      const returnVal = sortByArtist(playlistTracks[3], playlistTracks[2]);
      expect(returnVal).toBe(1);
    });
  });
});
