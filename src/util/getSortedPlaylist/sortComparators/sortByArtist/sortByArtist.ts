import { PlaylistTrack } from "@/types";

export function sortByArtist(playlistTrackOne: PlaylistTrack, playlistTrackTwo: PlaylistTrack) {
  const artistsOne = playlistTrackOne.track.artists;
  const artistsTwo = playlistTrackTwo.track.artists;

  if (!artistsOne.length || !artistsTwo.length) return artistsTwo.length - artistsOne.length;

  if (artistsOne[0] < artistsTwo[0]) return -1;
  if (artistsOne[0] > artistsTwo[0]) return 1;

  return 0;
}
