import { describe, it, expect } from "vitest";
import { PlaylistTrack } from "@/types";
import { playlistTracksAreEqualByOrder } from "./playlistTracksAreEqualByOrder";

const playlistTracksOne: PlaylistTrack[] = [
  {
    id: "1",
    index: 0,
    track: {
      title: "",
      artists: [],
      album: "",
      albumURL: "",
      trackNumber: 0,
      releaseDate: "",
      dateAdded: "",
      timeAdded: ""
    },
    isLocal: false,
    rearranged: true
  },
  {
    id: "2",
    index: 1,
    track: {
      title: "",
      artists: [],
      album: "",
      albumURL: "",
      trackNumber: 0,
      releaseDate: "",
      dateAdded: "",
      timeAdded: ""
    },
    isLocal: false,
    rearranged: true
  },
  {
    id: "3",
    index: 2,
    track: {
      title: "",
      artists: [],
      album: "",
      albumURL: "",
      trackNumber: 0,
      releaseDate: "",
      dateAdded: "",
      timeAdded: ""
    },
    isLocal: false,
    rearranged: true
  }
];

describe(playlistTracksAreEqualByOrder, () => {
  describe("playlistTracks lengths are unequal", () => {
    it(`returns false`, () => {
      const playlistTracksTwo = [playlistTracksOne[1], playlistTracksOne[2]];
      const isEqual = playlistTracksAreEqualByOrder(playlistTracksOne, playlistTracksTwo);
      expect(isEqual).toBeFalsy();
    });
  });

  describe("playlistTracks lengths are equal", () => {
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
