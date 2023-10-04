import { PlaylistTrack } from "@/types";

export function sortByAlbum(playlistTrackOne: PlaylistTrack, playlistTrackTwo: PlaylistTrack) {
  const albumOne = playlistTrackOne.track.album;
  const albumTwo = playlistTrackTwo.track.album;

  if (albumOne < albumTwo) return -1;
  if (albumOne > albumTwo) return 1;

  return 0;
}
