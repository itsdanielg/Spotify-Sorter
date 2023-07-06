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
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center w-full p-4">
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
      </div>
      <div className="flex items-center justify-center w-full p-4 pt-0">
        <PlaylistView
          setCurrentSort={setCurrentSort}
          playlist={playlist}
          isCompact={isCompact}
          moveTrack={moveTrack}
          sortPlaylist={sortPlaylist}
        />
      </div>
    </div>
  );
}
