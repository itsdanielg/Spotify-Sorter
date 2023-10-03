import { useEffect, useReducer, useState } from "react";
import { HookReturn, PlaylistTrack, SpotifyArtist, SpotifyError, SpotifyPlaylistTrack, Track } from "../../types";
import { playlistTracksAreEqualByOrder, unmarkPlaylistTracks } from "@/util";
import { getSortedPlaylist } from "../../util/getSortedPlaylist";
import { markChangedSongs } from "../../util/markChangedSongs";
import { fetchPlaylistTracks } from "../calls";
import { updatePlaylist } from "../calls/updatePlaylist";
import { useToken } from "./useToken";

enum PlaylistActions {
  INITIALIZE,
  INITIALIZE_SUCCESS,
  INITIALIZE_ERROR,
  SAVE,
  SAVE_SUCCESS,
  SAVE_ERROR,
  CANCEL
}
interface PlaylistAction {
  type: PlaylistActions;
}

export interface usePlaylistTracksStateTypes {
  initializing: boolean;
  initError: boolean;
  saving: boolean;
  savingError: boolean;
}

const initialState: usePlaylistTracksStateTypes = {
  initializing: false,
  initError: false,
  saving: false,
  savingError: false
};

function usePlaylistTracksReducer(
  state: usePlaylistTracksStateTypes,
  action: PlaylistAction
): usePlaylistTracksStateTypes {
  switch (action.type) {
    case PlaylistActions.INITIALIZE:
      return { ...state, initializing: true };
    case PlaylistActions.INITIALIZE_SUCCESS:
      return { ...state, initializing: false, initError: false };
    case PlaylistActions.INITIALIZE_ERROR:
      return { ...state, initializing: false, initError: true };
    case PlaylistActions.SAVE:
      return { ...state, saving: true };
    case PlaylistActions.SAVE_SUCCESS:
      return { ...state, saving: true };
    case PlaylistActions.SAVE:
      return { ...state, saving: true };
    case PlaylistActions.CANCEL:
      return { ...state, saving: false };
    default:
      return state;
  }
}

export type usePlaylistTracksReturn = {
  playlist: PlaylistTrack[];
  playlistState: usePlaylistTracksStateTypes;
  isModified: boolean;
  moveTrack: (sourceIndex: number, destinationIndex: number) => void;
  sortPlaylist: (field: string) => Promise<void>;
  cancelChanges: () => void;
  saveChanges: () => Promise<void>;
};

export function usePlaylistTracks(playlistId: string): HookReturn<usePlaylistTracksReturn> {
  const { token } = useToken();

  const [error, setError] = useState<SpotifyError | null>(null);

  const [playlist, setPlaylist] = useState<PlaylistTrack[]>([]);
  const [unorderedPlaylist, setUnorderedPlaylist] = useState<PlaylistTrack[]>([]);
  const [isModified, setIsModified] = useState(false);

  const [playlistState, dispatch] = useReducer(usePlaylistTracksReducer, initialState);

  const moveTrack = (sourceIndex: number, destinationIndex: number) => {
    const newPlaylist = [...playlist];
    const [track] = newPlaylist.splice(sourceIndex, 1);
    newPlaylist.splice(destinationIndex, 0, track);
    markChangedSongs(newPlaylist);
    setPlaylist(newPlaylist);
  };

  const sortPlaylist = async (field: string) => {
    const sortedPlaylist = getSortedPlaylist(playlist, field);
    markChangedSongs(sortedPlaylist);
    setPlaylist(sortedPlaylist);
  };

  const cancelChanges = () => {
    const oldPlaylist = [...unorderedPlaylist].map((song) => {
      song.rearranged = false;
      return song;
    });
    setPlaylist(oldPlaylist);
  };

  const saveChanges = async () => {
    dispatch({ type: PlaylistActions.SAVE });
    const { data, error } = await updatePlaylist(token, playlistId, unorderedPlaylist, playlist);
    if (error) {
      dispatch({ type: PlaylistActions.SAVE_ERROR });
      return;
    }
    const newPlaylist = unmarkPlaylistTracks(playlist);
    setPlaylist(newPlaylist);
    setUnorderedPlaylist(newPlaylist);
    dispatch({ type: PlaylistActions.SAVE_SUCCESS });
  };

  useEffect(() => {
    setIsModified(!playlistTracksAreEqualByOrder(playlist, unorderedPlaylist));
  }, [playlist, unorderedPlaylist]);

  useEffect(() => {
    const getPlaylist = async () => {
      dispatch({ type: PlaylistActions.INITIALIZE });
      const { data, errorResponse } = await fetchPlaylistTracks(token, playlistId);
      if (errorResponse) {
        setPlaylist([]);
        setError(errorResponse);
        dispatch({ type: PlaylistActions.INITIALIZE_ERROR });
        return;
      }

      const dataPlaylistTracks = data as SpotifyPlaylistTrack[];
      const playlistTracks: PlaylistTrack[] = dataPlaylistTracks.map(
        (playlistTrack: SpotifyPlaylistTrack, index: number) => {
          return {
            id: playlistTrack.track.id,
            index: index,
            isLocal: playlistTrack.is_local,
            track: {
              title: playlistTrack.track.name,
              artists: playlistTrack.track.artists.map((artist: SpotifyArtist) => artist.name),
              album: playlistTrack.track.album.name,
              albumURL: playlistTrack.track.album.images[0]?.url ?? "",
              releaseDate: playlistTrack.track.album.release_date,
              dateAdded: new Date(playlistTrack.added_at).toLocaleDateString(),
              timeAdded: new Date(playlistTrack.added_at).toLocaleTimeString(),
              trackNumber: playlistTrack.track.track_number
            } as Track,
            rearranged: false
          } as PlaylistTrack;
        }
      );

      setPlaylist(playlistTracks);
      setUnorderedPlaylist(playlistTracks);
      dispatch({ type: PlaylistActions.INITIALIZE_SUCCESS });
    };
    getPlaylist();
  }, []);

  return { data: { playlist, playlistState, isModified, moveTrack, sortPlaylist, cancelChanges, saveChanges }, error };
}
