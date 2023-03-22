import { PlaylistSong } from "../types";

export function unmarkSongs(playlistSongs: PlaylistSong[]) {
  return playlistSongs.map((orderedSong) => {
    orderedSong.rearranged = false;
    return orderedSong;
  });
}
