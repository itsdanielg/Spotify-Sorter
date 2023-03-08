import { PlaylistSong } from "../types";
import { markChangedSongs } from "./markChangedSongs";
import { sortByRelease } from "./sortByRelease";

export async function sortAndMarkPlaylist(
  playlistSongs: PlaylistSong[]
): Promise<{ sortedPlaylist: PlaylistSong[]; error: boolean }> {
  const sortedPlaylist = await sortByRelease(playlistSongs);
  await markChangedSongs(sortedPlaylist);
  return { sortedPlaylist, error: false };
}
