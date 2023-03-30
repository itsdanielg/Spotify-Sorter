import { PlaylistTrack } from "../../types";

export function sortByAlbumTrack(playlistSongOne: PlaylistTrack, playlistSongTwo: PlaylistTrack) {
  const trackOne = playlistSongOne.track;
  const trackTwo = playlistSongTwo.track;

  if (trackOne.trackNumber < trackTwo.trackNumber) return -1;
  if (trackOne.trackNumber > trackTwo.trackNumber) return 1;

  return 0;
}
