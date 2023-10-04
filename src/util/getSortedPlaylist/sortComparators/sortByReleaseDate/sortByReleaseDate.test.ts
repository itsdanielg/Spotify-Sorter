import { describe, it, expect } from "vitest";
import { mockPlaylistTracks } from "@/util/mockPlaylistTracks";
import { sortByReleaseDate } from "./sortByReleaseDate";

describe("sortByReleaseDate", () => {
  const playlistTracks = [
    ...mockPlaylistTracks.map((playlistTrack) => {
      return { ...playlistTrack, track: { ...playlistTrack.track } };
    })
  ];

  describe("when release dates are different", () => {
    it("returns -1 if a < b", () => {
      playlistTracks[0].track.releaseDate = new Date(1696436210);
      playlistTracks[1].track.releaseDate = new Date(1696436211);

      const returnVal = sortByReleaseDate(playlistTracks[0], playlistTracks[1]);
      expect(returnVal).toEqual(-1);
    });

    it("returns 1 if a > b", () => {
      const returnVal = sortByReleaseDate(playlistTracks[1], playlistTracks[0]);
      expect(returnVal).toEqual(1);
    });
  });

  describe("when release dates are the same", () => {
    playlistTracks[2].addedAt = new Date(1696436211);

    describe("when albums are different", () => {
      playlistTracks[1].track.album = "abc";
      playlistTracks[2].track.album = "abd";

      it("returns -1 if a < b", () => {
        const returnVal = sortByReleaseDate(playlistTracks[1], playlistTracks[2]);
        expect(returnVal).toEqual(-1);
      });

      it("returns 1 if a > b", () => {
        const returnVal = sortByReleaseDate(playlistTracks[2], playlistTracks[1]);
        expect(returnVal).toEqual(1);
      });
    });

    describe("when albums are the same", () => {
      playlistTracks[3].track.album = "abd";

      describe("when track numbers are different", () => {
        playlistTracks[2].track.trackNumber = 1;
        playlistTracks[3].track.trackNumber = 2;

        it("returns -1 if a < b", () => {
          const returnVal = sortByReleaseDate(playlistTracks[2], playlistTracks[3]);
          expect(returnVal).toEqual(-1);
        });

        it("returns 1 if a > b", () => {
          const returnVal = sortByReleaseDate(playlistTracks[3], playlistTracks[2]);
          expect(returnVal).toEqual(1);
        });

        it("returns 0 otherwise", () => {
          const newPlaylistTrack = { ...playlistTracks[3], track: { ...playlistTracks[3].track } };
          newPlaylistTrack.track.trackNumber = 2;
          const returnVal = sortByReleaseDate(playlistTracks[3], newPlaylistTrack);
          expect(returnVal).toEqual(0);
        });
      });
    });
  });
});
