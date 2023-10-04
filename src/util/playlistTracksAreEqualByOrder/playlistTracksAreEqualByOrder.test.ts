import { describe, it, expect } from "vitest";
import { mockPlaylistTracks } from "../mockPlaylistTracks";
import { playlistTracksAreEqualByOrder } from "./playlistTracksAreEqualByOrder";

describe(playlistTracksAreEqualByOrder, () => {
  const playlistTracksOne = [
    ...mockPlaylistTracks.map((track) => {
      return { ...track };
    })
  ];

  describe("playlistTracks lengths are unequal", () => {
    it(`returns false`, () => {
      const playlistTracksTwo = [playlistTracksOne[0], playlistTracksOne[1]];
      const isEqual = playlistTracksAreEqualByOrder(playlistTracksOne, playlistTracksTwo);
      expect(isEqual).toBeFalsy();
    });
  });

  describe("playlistTracks lengths are equal", () => {
    playlistTracksOne[0].id = "123";
    playlistTracksOne[1].id = "456";
    playlistTracksOne[2].id = "789";

    describe("playlist tracks ids do not match", () => {
      it(`returns false`, () => {
        const playlistTracksTwo = playlistTracksOne.map((track) => {
          return { ...track };
        });
        playlistTracksTwo[1].id = "99999";
        const isEqual = playlistTracksAreEqualByOrder(playlistTracksOne, playlistTracksTwo);
        expect(isEqual).toBeFalsy();
      });
    });

    describe("playlist tracks ids match", () => {
      it(`returns true`, () => {
        const playlistTracksTwo = [...playlistTracksOne];
        const isEqual = playlistTracksAreEqualByOrder(playlistTracksOne, playlistTracksTwo);
        expect(isEqual).toBeTruthy();
      });
    });
  });
});
