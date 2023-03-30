import { PlaylistTrack } from "../../types";

export function sortByAlbum(playlistSongOne: PlaylistTrack, playlistSongTwo: PlaylistTrack) {
  const trackOne = playlistSongOne.track;
  const trackTwo = playlistSongTwo.track;

  if (trackOne.album < trackTwo.album) return -1;
  if (trackOne.album > trackTwo.album) return 1;

  return 0;
}
