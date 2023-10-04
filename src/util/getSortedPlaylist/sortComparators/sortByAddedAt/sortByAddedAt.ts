import { PlaylistTrack } from "@/types";

export function sortByAddedAt(playlistTrackOne: PlaylistTrack, playlistTrackTwo: PlaylistTrack) {
  const addedAtOne = playlistTrackOne.addedAt;
  const addedAtTwo = playlistTrackTwo.addedAt;

  if (addedAtOne < addedAtTwo) return -1;
  if (addedAtOne > addedAtTwo) return 1;

  return 0;
}
