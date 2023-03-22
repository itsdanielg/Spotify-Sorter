import { PlaylistTrack } from "../types";
import { markChangedSongs } from "./markChangedSongs";
import { sortByRelease } from "./sortByRelease";

export async function sortAndMarkPlaylist(
  playlistSongs: PlaylistTrack[]
): Promise<{ sortedPlaylist: PlaylistTrack[]; error: boolean }> {
  const sortedPlaylist = await sortByRelease(playlistSongs);
  await markChangedSongs(sortedPlaylist);
  return { sortedPlaylist, error: false };
}
