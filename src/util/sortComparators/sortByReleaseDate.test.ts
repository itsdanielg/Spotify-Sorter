import { describe, it, expect } from "vitest";
import { mockPlaylistSongs } from "../mockPlaylistSongs";
import { sortByReleaseDate } from "./sortByReleaseDate";

describe("sortByReleaseDate", () => {
  describe("when release dates are different", () => {
    it("returns -1 if a < b", () => {
      const returnVal = sortByReleaseDate(mockPlaylistSongs[0], mockPlaylistSongs[1]);
      expect(returnVal).toEqual(-1);
    });

    it("returns 1 if a > b", () => {
      const returnVal = sortByReleaseDate(mockPlaylistSongs[1], mockPlaylistSongs[0]);
      expect(returnVal).toEqual(1);
    });
  });

  describe("when release dates are the same", () => {
    describe("when albums are different", () => {
      it("returns 0 if a !== b", () => {
        const returnVal = sortByReleaseDate(mockPlaylistSongs[1], mockPlaylistSongs[2]);
        expect(returnVal).toEqual(0);
      });
    });

    describe("when albums are the same", () => {
      describe("when track numbers are different", () => {
        it("returns -1 if a < b", () => {
          const returnVal = sortByReleaseDate(mockPlaylistSongs[2], mockPlaylistSongs[3]);
          expect(returnVal).toEqual(-1);
        });

        it("returns 1 if a > b", () => {
          const returnVal = sortByReleaseDate(mockPlaylistSongs[3], mockPlaylistSongs[2]);
          expect(returnVal).toEqual(1);
        });

        it("returns 0 otherwise", () => {
          const returnVal = sortByReleaseDate(mockPlaylistSongs[3], mockPlaylistSongs[4]);
          expect(returnVal).toEqual(0);
        });
      });
    });
  });
});
