import { Dispatch, SetStateAction, createContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { usePlaylist, usePlaylistReturn } from "../../../api/hooks/usePlaylist";
import { LoaderModal, SaveSnackbar } from "../../Compounds";
import { Loading } from "../Loading";
import { ErrorPage } from "../ErrorPage";
import { PlaylistBar } from "./PlaylistBar/";
import { PlaylistView } from "./PlaylistView/";

interface PlaylistContext {
  playlistHook: usePlaylistReturn;
  isCompact: boolean;
  currentSort: string;
  setIsCompact: Dispatch<SetStateAction<boolean>>;
  setCurrentSort: Dispatch<SetStateAction<string>>;
}

export const PlaylistContext = createContext<PlaylistContext>({} as PlaylistContext);

export function Playlist() {
  const [isCompact, setIsCompact] = useState(true);
  const [currentSort, setCurrentSort] = useState("");
  const [showSnackbar, setShowSnackbar] = useState(false);

  const location = useLocation();
  const playlistHook = usePlaylist(location.pathname.substring(1));

  if (playlistHook.playlistState.initializing) return <Loading />;
  if (playlistHook.playlistState.initError) return <ErrorPage />;

  return (
    <PlaylistContext.Provider value={{ playlistHook, isCompact, currentSort, setIsCompact, setCurrentSort }}>
      <div className="flex flex-col items-center gap-4 mt-4">
        <PlaylistBar />
        <PlaylistView />
      </div>
      <LoaderModal isLoading={playlistHook.playlistState.saving} />
      <SaveSnackbar
        label={"Saving complete"}
        showSnackbar={showSnackbar}
        setShowSnackbar={setShowSnackbar}
      />
    </PlaylistContext.Provider>
  );
}
