import { PlaylistTrack } from "../types";

export function unmarkSongs(playlistSongs: PlaylistTrack[]) {
  return playlistSongs.map((orderedSong, index) => {
    orderedSong.rearranged = false;
    orderedSong.index = index;
    return orderedSong;
  });
}
