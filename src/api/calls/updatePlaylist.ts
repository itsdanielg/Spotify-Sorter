import { PlaylistTrack } from "../../types";
import { mockUpdatePlaylistItem } from "../../util/mockApi/mockUpdatePlaylistItem";
import { updatePlaylistTrack } from "./updatePlaylistTrack";

export async function updatePlaylist(
  token: string,
  playlistId: string,
  unorderedPlaylist: PlaylistTrack[],
  playlist: PlaylistTrack[]
): Promise<{ data: any; error: boolean }> {
  let tempUnorderedPlaylist = [...unorderedPlaylist];
  let tracksSwitched = 0;
  for (let i = 0; i < playlist.length; i++) {
    const track = playlist[i];
    const startIndex = tempUnorderedPlaylist.indexOf(
      tempUnorderedPlaylist.find((uneditedTrack) => uneditedTrack.id === track.id)!
    );
    mockUpdatePlaylistItem(tempUnorderedPlaylist, startIndex, i);
    const { hasSwitched, error } = await updatePlaylistTrack(token, playlistId, startIndex, i);
    if (error) {
      break;
    }
    if (hasSwitched) tracksSwitched++;
  }
  return {
    data: {
      tracksSwitched: tracksSwitched
    },
    error: false
  };
}
