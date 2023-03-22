import { PlaylistTrack, Track } from "../types";

export const mockPlaylistSongs: PlaylistTrack[] = [
  {
    id: "0",
    index: 0,
    track: {
      title: "title",
      artists: ["artist"],
      album: "album one",
      albumURL: "url",
      trackNumber: 1,
      releaseDate: "2022-01-01",
      dateAdded: "2022-01-01",
      timeAdded: "2022-01-01"
    } as unknown as Track,
    rearranged: false
  },
  {
    id: "1",
    index: 1,
    track: {
      title: "title",
      artists: ["artist"],
      album: "album one",
      albumURL: "url",
      trackNumber: 1,
      releaseDate: "2022-01-02",
      dateAdded: "2022-01-01",
      timeAdded: "2022-01-01"
    } as unknown as Track,
    rearranged: false
  },
  {
    id: "2",
    index: 2,
    track: {
      title: "title",
      artists: ["artist"],
      album: "album two",
      albumURL: "url",
      trackNumber: 1,
      releaseDate: "2022-01-02",
      dateAdded: "2022-01-01",
      timeAdded: "2022-01-01"
    } as unknown as Track,
    rearranged: false
  },
  {
    id: "3",
    index: 3,
    track: {
      title: "title",
      artists: ["artist"],
      album: "album two",
      albumURL: "url",
      trackNumber: 2,
      releaseDate: "2022-01-02",
      dateAdded: "2022-01-01",
      timeAdded: "2022-01-01"
    } as unknown as Track,
    rearranged: false
  },
  {
    id: "4",
    index: 4,
    track: {
      title: "title",
      artists: ["artist"],
      album: "album two",
      albumURL: "url",
      trackNumber: 2,
      releaseDate: "2022-01-02",
      dateAdded: "2022-01-01",
      timeAdded: "2022-01-01"
    } as unknown as Track,
    rearranged: false
  }
];
