import { describe, it, expect } from "vitest";
import { mockPlaylistTracks } from "../mockPlaylistTracks";
import { unmarkPlaylistTrack } from "./unmarkPlaylistTrack";

describe(unmarkPlaylistTrack, () => {
  const playlistTrack = mockPlaylistTracks[0];

  describe("rearrange value", () => {
    const oldPlaylistTrack = { ...playlistTrack, rearranged: true };

    it("initial rearranged value is true", () => {
      expect(oldPlaylistTrack.rearranged).toBeTruthy();
    });

    it("sets the rearranged value to false", () => {
      const newPlaylistTrack = unmarkPlaylistTrack(oldPlaylistTrack);
      expect(newPlaylistTrack.rearranged).toBeFalsy();
    });
  });

  describe("index value", () => {
    const oldIndex = 1;
    const newIndex = 5;
    const oldPlaylistTrack = { ...playlistTrack, index: oldIndex };

    describe("when new index is not passed", () => {
      it("retains the old index value", () => {
        const newPlaylistTrack = unmarkPlaylistTrack(oldPlaylistTrack);
        expect(newPlaylistTrack.index).not.toBe(newIndex);
      });
    });

    describe("when new index is passed", () => {
      it("initial index value is unchanged", () => {
        expect(oldPlaylistTrack.index).not.toBe(newIndex);
      });

      it("sets the old index value to the new index passed", () => {
        const newPlaylistTrack = unmarkPlaylistTrack(oldPlaylistTrack, newIndex);
        expect(newPlaylistTrack.index).toBe(newIndex);
      });

      it("sets the old index value to 0 if new index passed is 0", () => {
        const newPlaylistTrack = unmarkPlaylistTrack(oldPlaylistTrack, 0);
        expect(newPlaylistTrack.index).toBe(0);
      });
    });
  });
});
