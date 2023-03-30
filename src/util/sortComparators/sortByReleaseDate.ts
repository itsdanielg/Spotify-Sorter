import { PlaylistTrack } from "../../types";

export function sortByReleaseDate(playlistSongOne: PlaylistTrack, playlistSongTwo: PlaylistTrack) {
  const trackOne = playlistSongOne.track;
  const trackTwo = playlistSongTwo.track;

  const releaseDateOne = new Date(trackOne.releaseDate);
  const releaseDateTwo = new Date(trackTwo.releaseDate);
  if (releaseDateOne < releaseDateTwo) return -1;
  if (releaseDateOne > releaseDateTwo) return 1;

  if (trackOne.album < trackTwo.album) return -1;
  if (trackOne.album > trackTwo.album) return 1;

  if (trackOne.trackNumber < trackTwo.trackNumber) return -1;
  if (trackOne.trackNumber > trackTwo.trackNumber) return 1;

  return 0;
}
