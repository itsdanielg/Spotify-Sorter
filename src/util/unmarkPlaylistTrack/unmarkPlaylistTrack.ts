import { PlaylistTrack } from "@/types";

export function unmarkPlaylistTrack(playlistTrack: PlaylistTrack, newIndex?: number): PlaylistTrack {
  const newPlaylistTrack = { ...playlistTrack };
  if (newIndex !== undefined) newPlaylistTrack.index = newIndex;
  newPlaylistTrack.rearranged = false;
  return newPlaylistTrack;
}
