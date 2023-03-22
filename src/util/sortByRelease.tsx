import { PlaylistTrack } from "../types";
import { sortComparator } from "./sortComparator";

export function sortByRelease(unorderedPlaylist: PlaylistTrack[]): PlaylistTrack[] {
  const orderedPlaylist = [...unorderedPlaylist];
  orderedPlaylist.sort(sortComparator);
  return orderedPlaylist;
}
