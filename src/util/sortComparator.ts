import { PlaylistTrack } from "../types";

export function sortComparator(playlistSongOne: PlaylistTrack, playlistSongTwo: PlaylistTrack) {
  const releaseDateOne = new Date(playlistSongOne.track.releaseDate);
  const releaseDateTwo = new Date(playlistSongTwo.track.releaseDate);
  if (releaseDateOne < releaseDateTwo) return -1;
  if (releaseDateOne > releaseDateTwo) return 1;

  const albumOne = playlistSongOne.track.album;
  const albumTwo = playlistSongTwo.track.album;
  if (albumOne < albumTwo) return -1;
  if (albumOne > albumTwo) return 1;

  const albumTracknumberOne = playlistSongOne.track.trackNumber;
  const albumTracknumberTwo = playlistSongTwo.track.trackNumber;
  if (albumTracknumberOne < albumTracknumberTwo) return -1;
  if (albumTracknumberOne > albumTracknumberTwo) return 1;

  return 0;
}
