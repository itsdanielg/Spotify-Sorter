import { PlaylistTrack } from "../../types";

export function sortByTitle(playlistSongOne: PlaylistTrack, playlistSongTwo: PlaylistTrack) {
  const trackOne = playlistSongOne.track;
  const trackTwo = playlistSongTwo.track;

  if (trackOne.title < trackTwo.title) return -1;
  if (trackOne.title > trackTwo.title) return 1;

  return 0;
}
