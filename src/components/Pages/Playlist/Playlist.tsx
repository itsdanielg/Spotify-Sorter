import { Dispatch, SetStateAction, createContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { usePlaylistTracks, usePlaylistTracksReturn } from "../../../api/hooks/usePlaylistTracks";
import { LoaderModal, SaveSnackbar } from "../../Compounds";
import { Loading } from "../Loading";
import { ErrorPage } from "../ErrorPage";
import { PlaylistBar } from "./PlaylistBar/";
import { PlaylistView } from "./PlaylistView/";
import { PageLayout } from "../../Molecules";

interface PlaylistContext {
  playlistHook: usePlaylistTracksReturn;
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
  const { data, error } = usePlaylistTracks(location.pathname.substring(1));

  if (error) return <></>;
  const playlistHook = data as usePlaylistTracksReturn;

  if (playlistHook.playlistState.initializing) return <Loading />;

  return (
    <PageLayout>
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
    </PageLayout>
  );
}
