import { describe, it, expect } from "vitest";
import { mockPlaylistSong, mockUpdatePlaylist } from "./mockUpdatePlaylist";

const uneditedPlaylist = [
  { id: "a", index: 0 },
  { id: "b", index: 1 },
  { id: "c", index: 2 },
  { id: "d", index: 3 },
  { id: "e", index: 4 },
  { id: "f", index: 5 },
  { id: "g", index: 6 }
] as unknown as mockPlaylistSong[];

describe("mockUpdatePlaylistItem", () => {
  it("test 1", () => {
    const playlist = [...uneditedPlaylist];
    const targetPlaylist = [
      { id: "a", index: 0 },
      { id: "d", index: 3 },
      { id: "e", index: 4 },
      { id: "b", index: 1 },
      { id: "f", index: 5 },
      { id: "g", index: 6 },
      { id: "c", index: 2 }
    ] as unknown as mockPlaylistSong[];
    mockUpdatePlaylist(targetPlaylist, playlist);
    expect(playlist).toEqual(targetPlaylist);
  });

  it("test 2", () => {
    const playlist = [...uneditedPlaylist];
    const targetPlaylist = [
      { id: "b", index: 1 },
      { id: "c", index: 2 },
      { id: "g", index: 6 },
      { id: "a", index: 0 },
      { id: "e", index: 4 },
      { id: "f", index: 5 },
      { id: "d", index: 3 }
    ] as unknown as mockPlaylistSong[];
    mockUpdatePlaylist(targetPlaylist, playlist);
    expect(playlist).toEqual(targetPlaylist);
  });

  it("test 3", () => {
    const playlist = [...uneditedPlaylist];
    const targetPlaylist = [
      { id: "e", index: 4 },
      { id: "f", index: 5 },
      { id: "d", index: 3 },
      { id: "a", index: 0 },
      { id: "b", index: 1 },
      { id: "g", index: 6 },
      { id: "c", index: 2 }
    ] as unknown as mockPlaylistSong[];
    mockUpdatePlaylist(targetPlaylist, playlist);
    expect(playlist).toEqual(targetPlaylist);
  });

  it("test 4", () => {
    const playlist = [...uneditedPlaylist];
    const targetPlaylist = [
      { id: "a", index: 0 },
      { id: "c", index: 2 },
      { id: "g", index: 6 },
      { id: "b", index: 1 },
      { id: "e", index: 4 },
      { id: "d", index: 3 },
      { id: "f", index: 5 }
    ] as unknown as mockPlaylistSong[];
    mockUpdatePlaylist(targetPlaylist, playlist);
    expect(playlist).toEqual(targetPlaylist);
  });

  it("test 5", () => {
    const playlist = [...uneditedPlaylist];
    const targetPlaylist = [
      { id: "e", index: 4 },
      { id: "c", index: 2 },
      { id: "g", index: 6 },
      { id: "f", index: 5 },
      { id: "b", index: 1 },
      { id: "a", index: 0 },
      { id: "d", index: 3 }
    ] as unknown as mockPlaylistSong[];
    mockUpdatePlaylist(targetPlaylist, playlist);
    expect(playlist).toEqual(targetPlaylist);
  });
});
