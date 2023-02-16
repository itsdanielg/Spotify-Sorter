import { PlaylistSong } from "../types/index.t";

export function sortComparator(playlistSongOne: PlaylistSong, playlistSongTwo: PlaylistSong) {
  const releaseDateOne = new Date(playlistSongOne.song.releaseDate);
  const releaseDateTwo = new Date(playlistSongTwo.song.releaseDate);
  if (releaseDateOne < releaseDateTwo) return -1;
  if (releaseDateOne > releaseDateTwo) return 1;

  const albumOne = playlistSongOne.song.album;
  const albumTwo = playlistSongTwo.song.album;
  if (albumOne !== albumTwo) return 0;

  const albumTracknumberOne = playlistSongOne.song.trackNumber;
  const albumTracknumberTwo = playlistSongTwo.song.trackNumber;
  if (albumTracknumberOne < albumTracknumberTwo) return -1;
  if (albumTracknumberOne > albumTracknumberTwo) return 1;

  return 0;
}
