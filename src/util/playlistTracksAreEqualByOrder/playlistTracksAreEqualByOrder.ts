import { PlaylistTrack } from "@/types";

export function playlistTracksAreEqualByOrder(playlistTracksOne: PlaylistTrack[], playlistTracksTwo: PlaylistTrack[]) {
  if (playlistTracksOne.length !== playlistTracksTwo.length) return false;

  for (let i = 0; i < playlistTracksOne.length; i++) {
    if (playlistTracksOne[i].id !== playlistTracksTwo[i].id) {
      return false;
    }
  }

  return true;
}
