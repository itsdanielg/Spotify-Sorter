import { PlaylistSong } from "../../types";
import { mockUpdatePlaylistItem } from "../../util/mockApi/mockUpdatePlaylistItem";
import { updatePlaylistSong } from "./updatePlaylistSong";

export async function updatePlaylist(
  token: string,
  playlistId: string,
  unorderedPlaylistSongs: PlaylistSong[],
  playlistSongs: PlaylistSong[]
): Promise<{ data: any; error: boolean }> {
  let tempUnorderedSongs = [...unorderedPlaylistSongs];
  let songsSwitched = 0;
  for (let i = 0; i < playlistSongs.length; i++) {
    const song = playlistSongs[i];
    const startIndex = tempUnorderedSongs.indexOf(
      tempUnorderedSongs.find((uneditedSong) => uneditedSong.id === song.id)!
    );
    mockUpdatePlaylistItem(tempUnorderedSongs, startIndex, i);
    const { hasSwitched, error } = await updatePlaylistSong(token, playlistId, startIndex, i);
    if (error) {
      break;
    }
    if (hasSwitched) songsSwitched++;
  }
  return {
    data: {
      songsSwitched: songsSwitched
    },
    error: false
  };
}
