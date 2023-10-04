import { PlaylistTrack } from "@/types";

export function markRearrangedTracks(playlistTracks: PlaylistTrack[]) {
  const newPlaylistTracks = [...playlistTracks];

  let realIndex = 0;
  const indexStack: number[] = [];

  return newPlaylistTracks.map((playlistTrack) => {
    playlistTrack.rearranged = false;

    while (indexStack.includes(realIndex)) {
      indexStack.splice(indexStack.indexOf(realIndex), 1);
      realIndex++;
    }

    if (playlistTrack.index !== realIndex) {
      indexStack.push(playlistTrack.index);
      playlistTrack.rearranged = true;
    } else {
      realIndex++;
    }

    return playlistTrack;
  });
}
