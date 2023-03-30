import { PlaylistTrack } from "../types";
import {
  sortByAlbum,
  sortByAlbumTrack,
  sortByArtist,
  sortByDateAdded,
  sortByReleaseDate,
  sortByTitle
} from "./sortComparators";

export function getSortedPlaylist(unorderedPlaylist: PlaylistTrack[], field: string): PlaylistTrack[] {
  const orderedPlaylist = [...unorderedPlaylist];
  switch (field) {
    case "Release Date":
      orderedPlaylist.sort(sortByReleaseDate);
      break;
    case "Title":
      orderedPlaylist.sort(sortByTitle);
      break;
    case "Artist":
      orderedPlaylist.sort(sortByArtist);
      break;
    case "Album":
      orderedPlaylist.sort(sortByAlbum);
      break;
    case "Track":
      orderedPlaylist.sort(sortByAlbumTrack);
      break;
    case "Date Added":
      orderedPlaylist.sort(sortByDateAdded);
      break;
    default:
      break;
  }
  return orderedPlaylist;
}
