import { PlaylistTrack } from "@/types";
import { unmarkPlaylistTrack } from "../unmarkPlaylistTrack";

export function unmarkPlaylistTracks(playlistTracks: PlaylistTrack[]): PlaylistTrack[] {
  return playlistTracks.map((playlistTrack, index) => {
    return unmarkPlaylistTrack(playlistTrack, index);
  });
}
