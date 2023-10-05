export interface usePlaylistTracksStateTypes {
  initializing: boolean;
  initError: boolean;
  saving: boolean;
  savingError: boolean;
}

export const initialState: usePlaylistTracksStateTypes = {
  initializing: false,
  initError: false,
  saving: false,
  savingError: false
};

export interface PlaylistAction {
  type: PlaylistActions;
}

export enum PlaylistActions {
  INITIALIZE,
  INITIALIZE_SUCCESS,
  INITIALIZE_ERROR,
  SAVE,
  SAVE_SUCCESS,
  SAVE_ERROR,
  CANCEL
}

export function PlaylistTracksReducer(
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
