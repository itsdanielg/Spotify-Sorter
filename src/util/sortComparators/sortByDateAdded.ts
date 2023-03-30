import { PlaylistTrack } from "../../types";

export function sortByDateAdded(playlistSongOne: PlaylistTrack, playlistSongTwo: PlaylistTrack) {
  const trackOne = playlistSongOne.track;
  const trackTwo = playlistSongTwo.track;

  const dateAddedOne = new Date(`${trackOne.dateAdded} ${trackOne.timeAdded}`);
  const dateAddedTwo = new Date(`${trackTwo.dateAdded} ${trackTwo.timeAdded}`);
  if (dateAddedOne < dateAddedTwo) return -1;
  if (dateAddedOne > dateAddedTwo) return 1;

  return 0;
}
