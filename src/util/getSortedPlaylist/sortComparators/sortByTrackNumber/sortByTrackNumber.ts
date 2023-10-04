import { PlaylistTrack } from "@/types";

export function sortByTrackNumber(playlistTrackOne: PlaylistTrack, playlistTrackTwo: PlaylistTrack) {
  const trackNumberOne = playlistTrackOne.track.trackNumber;
  const trackNumberTwo = playlistTrackTwo.track.trackNumber;

  if (trackNumberOne < trackNumberTwo) return -1;
  if (trackNumberOne > trackNumberTwo) return 1;

  return 0;
}
