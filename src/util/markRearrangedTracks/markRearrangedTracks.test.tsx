import { describe, it, expect } from "vitest";
import { mockPlaylistTracks } from "@/util/mockPlaylistTracks";
import { markRearrangedTracks } from "./markRearrangedTracks";

describe(markRearrangedTracks, () => {
  const playlistTracks = [
    ...mockPlaylistTracks.map((playlistTrack) => {
      return { ...playlistTrack, track: playlistTrack.track };
    })
  ];

  it("rearranges tracks", () => {
    const finalPlaylist = markRearrangedTracks(playlistTracks);

    const expectedResult = [...playlistTracks];
    expectedResult[0].rearranged = true;
    expectedResult[1].rearranged = true;
    expectedResult[2].rearranged = true;

    expect(finalPlaylist).toEqual(expectedResult);
  });
});
