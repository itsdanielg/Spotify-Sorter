import { PlaylistTrack } from "@/types";
import {
  sortByAlbum,
  sortByTrackNumber,
  sortByArtist,
  sortByAddedAt,
  sortByReleaseDate,
  sortByTitle
} from "./sortComparators";

export function getSortedPlaylist(unorderedPlaylist: PlaylistTrack[], field: string): PlaylistTrack[] {
  const orderedPlaylist = [...unorderedPlaylist];
  switch (field) {
    case "Date Added":
      orderedPlaylist.sort(sortByAddedAt);
      break;
    case "Album":
      orderedPlaylist.sort(sortByAlbum);
      break;
    case "Artist":
      orderedPlaylist.sort(sortByArtist);
      break;
    case "Release Date":
      orderedPlaylist.sort(sortByReleaseDate);
      break;
    case "Title":
      orderedPlaylist.sort(sortByTitle);
      break;
    case "Track":
      orderedPlaylist.sort(sortByTrackNumber);
      break;
    default:
      break;
  }
  return orderedPlaylist;
}
