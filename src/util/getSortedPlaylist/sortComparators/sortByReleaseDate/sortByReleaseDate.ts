import { PlaylistTrack } from "@/types";

export function sortByReleaseDate(playlistTrackOne: PlaylistTrack, playlistTrackTwo: PlaylistTrack) {
  const trackOne = playlistTrackOne.track;
  const trackTwo = playlistTrackTwo.track;

  const releaseDateOne = trackOne.releaseDate;
  const releaseDateTwo = trackTwo.releaseDate;
  if (releaseDateOne < releaseDateTwo) return -1;
  if (releaseDateOne > releaseDateTwo) return 1;

  if (trackOne.album < trackTwo.album) return -1;
  if (trackOne.album > trackTwo.album) return 1;

  if (trackOne.trackNumber < trackTwo.trackNumber) return -1;
  if (trackOne.trackNumber > trackTwo.trackNumber) return 1;

  return 0;
}
