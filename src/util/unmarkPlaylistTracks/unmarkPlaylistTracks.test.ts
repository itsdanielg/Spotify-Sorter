import { describe, it, expect } from "vitest";
import { PlaylistTrack } from "@/types";
import { unmarkPlaylistTracks } from "./unmarkPlaylistTracks";

const playlistTracks: PlaylistTrack[] = [
  {
    id: "",
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
    rearranged: true
  },
  {
    id: "",
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
    rearranged: true
  },
  {
    id: "",
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
    rearranged: true
  }
];

describe(unmarkPlaylistTracks, () => {
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
