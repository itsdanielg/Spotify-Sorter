import { usePlaylistTracksReturn } from "@/api";
import { PlaylistAction, initialState } from "@/api/reducers";
import { Dispatch, SetStateAction, createContext } from "react";

interface PlaylistContext {
  playlistHook: usePlaylistTracksReturn;
  isCompact: boolean;
  currentSort: string;
  setIsCompact: Dispatch<SetStateAction<boolean>>;
  setCurrentSort: Dispatch<SetStateAction<string>>;
}

const initPlaylistTracks: PlaylistContext = {
  playlistHook: {
    playlistTracks: [],
    playlistState: initialState,
    dispatch: function (value: PlaylistAction): void {
      return;
    },
    moveTrack: function (sourceIndex: number, destinationIndex: number): void {
      return;
    },
    sortPlaylist: function (field: string): Promise<void> {
      return Promise.resolve();
    },
    cancelChanges: function (): void {
      return;
    },
    saveChanges: function (): Promise<void> {
      return Promise.resolve();
    }
  },
  isCompact: false,
  currentSort: "",
  setIsCompact: function (value: SetStateAction<boolean>): void {
    return;
  },
  setCurrentSort: function (value: SetStateAction<string>): void {
    return;
  }
};

export const PlaylistTracksContext = createContext<PlaylistContext>(initPlaylistTracks);
