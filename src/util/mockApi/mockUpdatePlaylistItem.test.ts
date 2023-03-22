import { describe, it, expect } from "vitest";
import { mockPlaylistSong, mockUpdatePlaylistItem } from "./mockUpdatePlaylistItem";

let playlist = [
  {
    id: "a",
    index: 0
  },
  {
    id: "c",
    index: 2
  },
  {
    id: "b",
    index: 1
  }
] as unknown as mockPlaylistSong[];

describe("mockUpdatePlaylistItem", () => {
  it("it returns 0", () => {
    const songSwitched = mockUpdatePlaylistItem(playlist, 2, 2);
    expect(songSwitched).toBeFalsy();
  });

  it("it returns 1", () => {
    const songSwitched = mockUpdatePlaylistItem(playlist, 2, 1);
    const expectedPlaylist = [
      {
        id: "a",
        index: 0
      },
      {
        id: "b",
        index: 1
      },
      {
        id: "c",
        index: 2
      }
    ] as unknown as mockPlaylistSong[];
    expect(playlist).toEqual(expectedPlaylist);
    expect(songSwitched).toBeTruthy();
  });
});
