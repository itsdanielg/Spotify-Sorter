import { useState } from "react";
import { useLocation } from "react-router-dom";
import { usePlaylist } from "../../../api/hooks/usePlaylist";
import { LoadingAnimation } from "../../Atoms/LoadingAnimation";
import { PlaylistEdit } from "./PlaylistEdit";
import { PlaylistView } from "./PlaylistView";
import { Loading } from "../Loading";
import { ErrorPage } from "../ErrorPage";

export function Playlist() {
  const [isCompact, setIsCompact] = useState(true);
  const [currentSort, setCurrentSort] = useState("");

  const location = useLocation();
  const { playlist, isLoading, isError, isModified, isSaving, moveTrack, sortPlaylist, cancelChanges, saveChanges } =
    usePlaylist(location.pathname.substring(1));

  if (isLoading) return <Loading />;
  if (!isLoading && isError) return <ErrorPage />;

  return (
    <div className="relative flex flex-col items-center p-4 md:p-8 gap-4 md:gap-8">
      <PlaylistEdit
        totalTracks={playlist.length}
        currentSort={currentSort}
        isSaving={isSaving}
        isModified={isModified}
        cancelChanges={cancelChanges}
        saveChanges={saveChanges}
        setCurrentSort={setCurrentSort}
        isCompact={isCompact}
        setIsCompact={setIsCompact}
      />
      <PlaylistView
        setCurrentSort={setCurrentSort}
        playlist={playlist}
        isCompact={isCompact}
        moveTrack={moveTrack}
        sortPlaylist={sortPlaylist}
      />
    </div>
  );
}
