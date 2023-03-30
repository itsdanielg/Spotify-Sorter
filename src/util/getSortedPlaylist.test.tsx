import { describe, it, expect } from "vitest";
import { mockPlaylistSongs } from "./mockPlaylistSongs";
import { getSortedPlaylist } from "./getSortedPlaylist";

describe("getSortedPlaylist", () => {
  describe("when release dates are different", () => {
    it("sorts by earliest to latest dates", () => {
      const unorderedPlaylist = [mockPlaylistSongs[1], mockPlaylistSongs[0]];
      const orderedPlaylist = getSortedPlaylist(unorderedPlaylist, "Release Date");
      expect(orderedPlaylist).toEqual([mockPlaylistSongs[0], mockPlaylistSongs[1]]);
    });
  });

  describe("when release dates are the same", () => {
    describe("when albums are different", () => {
      it("doesn't sort", () => {
        const unorderedPlaylist = [mockPlaylistSongs[2], mockPlaylistSongs[1]];
        const orderedPlaylist = getSortedPlaylist(unorderedPlaylist, "Release Date");
        expect(orderedPlaylist).toEqual([mockPlaylistSongs[2], mockPlaylistSongs[1]]);
      });
    });

    describe("when albums are the same", () => {
      describe("when track numbers are different", () => {
        it("sorts by earliest to latest trackNumbers", () => {
          const unorderedPlaylist = [mockPlaylistSongs[3], mockPlaylistSongs[2]];
          const orderedPlaylist = getSortedPlaylist(unorderedPlaylist, "Release Date");
          expect(orderedPlaylist).toEqual([mockPlaylistSongs[2], mockPlaylistSongs[3]]);
        });
      });
    });
  });

  it("correctly sorts everything", () => {
    const unorderedPlaylist = [
      mockPlaylistSongs[1],
      mockPlaylistSongs[2],
      mockPlaylistSongs[0],
      mockPlaylistSongs[3],
      mockPlaylistSongs[4]
    ];
    const orderedPlaylist = getSortedPlaylist(unorderedPlaylist, "Release Date");
    expect(orderedPlaylist).toEqual(mockPlaylistSongs);
  });
});
