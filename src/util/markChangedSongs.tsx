import { PlaylistSong } from "../types/index.t";

export function markChangedSongs(orderedPlaylist: PlaylistSong[], unorderedPlaylist: PlaylistSong[]) {
  const finalPlaylist = [...orderedPlaylist];
  return finalPlaylist.map((orderedSong, index) => {
    const unorderedSongIndex = unorderedPlaylist.findIndex((song) => song.id === orderedSong.id);
    orderedSong.leftChanged = !!(unorderedPlaylist[unorderedSongIndex - 1] !== orderedPlaylist[index - 1]);
    orderedSong.rightChanged = !!(unorderedPlaylist[unorderedSongIndex + 1] !== orderedPlaylist[index + 1]);
    // if (orderedSong.leftChanged || orderedSong.rightChanged) orderedSong.rearranged = true;
    return orderedSong;
  });
}
