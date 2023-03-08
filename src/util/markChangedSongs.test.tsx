import { describe, it, expect } from "vitest";
import { markChangedSongs } from "./markChangedSongs";
import { mockPlaylistSongs } from "./mockPlaylistSongs";

describe("markChangedSongs", () => {
  it("test 1", () => {
    const finalPlaylist = markChangedSongs(mockPlaylistSongs);

    const expectedResult = [...mockPlaylistSongs];
    expectedResult[0].rearranged = true;
    expectedResult[1].rearranged = true;
    expectedResult[2].rearranged = true;

    expect(finalPlaylist).toEqual(expectedResult);
  });
});
