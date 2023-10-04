import { PlaylistTrack } from "@/types";

export function sortByTitle(playlistTrackOne: PlaylistTrack, playlistTrackTwo: PlaylistTrack) {
  const titleOne = playlistTrackOne.track.title;
  const titleTwo = playlistTrackTwo.track.title;

  if (titleOne < titleTwo) return -1;
  if (titleOne > titleTwo) return 1;

  return 0;
}
