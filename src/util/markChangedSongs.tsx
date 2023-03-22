import { PlaylistTrack } from "../types";

export function markChangedSongs(playlist: PlaylistTrack[]) {
  const finalPlaylist = [...playlist];

  let realIndex = 0;
  const indexStack: number[] = [];

  return finalPlaylist.map((orderedSong) => {
    orderedSong.rearranged = false;
    while (indexStack.includes(realIndex)) {
      indexStack.splice(indexStack.indexOf(realIndex), 1);
      realIndex++;
    }
    if (orderedSong.index !== realIndex) {
      indexStack.push(orderedSong.index);
      orderedSong.rearranged = true;
    } else {
      realIndex++;
    }
    return orderedSong;
  });
}
