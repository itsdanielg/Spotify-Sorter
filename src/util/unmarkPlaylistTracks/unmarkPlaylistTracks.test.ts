import { describe, it, expect } from "vitest";
import { mockPlaylistTracks } from "../mockPlaylistTracks";
import { unmarkPlaylistTracks } from "./unmarkPlaylistTracks";

describe(unmarkPlaylistTracks, () => {
  const playlistTracks = [
    ...mockPlaylistTracks.map((track) => {
      return { ...track, rearranged: true };
    })
  ];
  playlistTracks[0].index = 2;
  playlistTracks[1].index = 0;
  playlistTracks[2].index = 1;

  describe("unmarks tracks", () => {
    const newPlaylistTracks = unmarkPlaylistTracks(playlistTracks);
    newPlaylistTracks.forEach((newPlaylistTrack, index) => {
      it(`playlistTrack's rearranged value at index ${index} is false`, () => {
        expect(newPlaylistTrack.rearranged).toBeFalsy();
      });
    });
  });

  describe("resets indeces", () => {
    const newPlaylistTracks = unmarkPlaylistTracks(playlistTracks);
    newPlaylistTracks.forEach((newPlaylistTrack, newIndex) => {
      it(`playlistTrack's index value at index ${newIndex} is ${newIndex}`, () => {
        expect(newPlaylistTrack.index).toBe(newIndex);
      });
    });
  });
});
