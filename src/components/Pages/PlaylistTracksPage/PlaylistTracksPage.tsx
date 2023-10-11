import { useState } from "react";
import { useLocation } from "react-router-dom";
import { usePlaylistTracks, usePlaylistTracksReturn } from "@/api";
import { PlaylistTracksContext } from "@/context";
import { LoaderModal, SaveSnackbar } from "@/components/Compounds";
import { Page } from "@/components/Templates";
import { PlaylistBar } from "./PlaylistBar";
import { PlaylistView } from "./PlaylistView";

export function PlaylistTracksPage() {
  const [isCompact, setIsCompact] = useState(true);
  const [currentSort, setCurrentSort] = useState("");

  const location = useLocation();
  const { data, error } = usePlaylistTracks(location.pathname.substring(1));

  const playlistHook = data as usePlaylistTracksReturn;

  return (
    <Page
      isLoading={playlistHook.playlistState.isInit}
      error={error}>
      <PlaylistTracksContext.Provider value={{ playlistHook, isCompact, currentSort, setIsCompact, setCurrentSort }}>
        <div className="flex flex-col items-center gap-4 mt-4">
          <PlaylistBar />
          <PlaylistView />
        </div>
        <LoaderModal isLoading={playlistHook.playlistState.saving === "ongoing"} />
        <SaveSnackbar />
      </PlaylistTracksContext.Provider>
    </Page>
  );
}
