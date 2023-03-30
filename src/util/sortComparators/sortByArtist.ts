import { PlaylistTrack } from "../../types";

export function sortByArtist(playlistSongOne: PlaylistTrack, playlistSongTwo: PlaylistTrack) {
  const trackOne = playlistSongOne.track;
  const trackTwo = playlistSongTwo.track;

  if (trackOne.artists[0] < trackTwo.artists[0]) return -1;
  if (trackOne.artists[0] > trackTwo.artists[0]) return 1;

  return 0;
}
