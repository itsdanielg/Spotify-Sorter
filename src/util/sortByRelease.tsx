import { PlaylistSong } from "../types/index.t";
import { sortComparator } from "./sortComparator";

export function sortByRelease(unorderedPlaylist: PlaylistSong[]): PlaylistSong[] {
  const orderedPlaylist = [...unorderedPlaylist];
  orderedPlaylist.sort(sortComparator);
  return orderedPlaylist;
}
