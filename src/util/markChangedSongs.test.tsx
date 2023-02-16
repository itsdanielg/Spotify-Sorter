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
    console.log(finalPlaylist);

    const expectedResult = mockPlaylistSongs.map((song) => {
      song.leftChanged = false;
      song.rightChanged = false;
      song.rearranged = false;
      return song;
    });
    expectedResult[0].leftChanged = true;
    expectedResult[0].rightChanged = true;
    expectedResult[0].rearranged = true;
    expectedResult[1].leftChanged = true;
    expectedResult[1].rearranged = true;
    expectedResult[2].rightChanged = true;
    expectedResult[2].rearranged = true;
    expectedResult[3].leftChanged = true;

    console.log(expectedResult);

    expect(finalPlaylist).toEqual(expectedResult);
  });
});
