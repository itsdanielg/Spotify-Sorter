import { markChangedSongs } from "./markChangedSongs";
import { mockPlaylistSongs } from "./mockPlaylistSongs";

describe("markChangedSongs", () => {
  it("test 1", () => {
    const unorderedPlaylist = [
      mockPlaylistSongs[1],
      mockPlaylistSongs[2],
      mockPlaylistSongs[0],
      mockPlaylistSongs[3],
      mockPlaylistSongs[4],
    ];
    const finalPlaylist = markChangedSongs(mockPlaylistSongs, unorderedPlaylist);

    const expectedResult = [...mockPlaylistSongs];
    expectedResult[0].leftChanged = true;
    expectedResult[0].rightChanged = true;
    expectedResult[0].rearranged = true;
    expectedResult[1].leftChanged = true;
    expectedResult[1].rearranged = true;
    expectedResult[2].rightChanged = true;
    expectedResult[2].rearranged = true;
    expectedResult[3].leftChanged = true;

    expect(finalPlaylist).toEqual(expectedResult);
  });
});
