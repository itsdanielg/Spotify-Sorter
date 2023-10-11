export interface usePlaylistTracksStateTypes {
  isInit: boolean;
  isModified: boolean;
  saving: "idle" | "ongoing" | "complete";
  hasSavingError: boolean;
  playlistTracksUpdated: number;
}

export const initialState: usePlaylistTracksStateTypes = {
  isInit: true,
  isModified: false,
  saving: "idle",
  hasSavingError: false,
  playlistTracksUpdated: 0
};

export interface PlaylistAction {
  type: PlaylistActions;
  payload?: number;
}

export enum PlaylistActions {
  INITIALIZE,
  INITIALIZE_SUCCESS,
  MODIFY,
  UNMODIFY,
  SAVE,
  SAVE_SUCCESS,
  SAVE_ERROR,
  SAVE_RESET
}

export function PlaylistTracksReducer(
  state: usePlaylistTracksStateTypes,
  action: PlaylistAction
): usePlaylistTracksStateTypes {
  switch (action.type) {
    case PlaylistActions.INITIALIZE:
      return { ...state, isInit: true };
    case PlaylistActions.INITIALIZE_SUCCESS:
      return { ...state, isInit: false };
    case PlaylistActions.MODIFY:
      return { ...state, isModified: true };
    case PlaylistActions.UNMODIFY:
      return { ...state, isModified: false };
    case PlaylistActions.SAVE:
      return { ...state, saving: "ongoing" };
    case PlaylistActions.SAVE_SUCCESS:
      return { ...state, saving: "complete", hasSavingError: false, playlistTracksUpdated: action.payload! };
    case PlaylistActions.SAVE_ERROR:
      return { ...state, saving: "complete", hasSavingError: true, playlistTracksUpdated: action.payload! };
    case PlaylistActions.SAVE_RESET:
      return { ...state, saving: "idle" };
    default:
      return state;
  }
}
