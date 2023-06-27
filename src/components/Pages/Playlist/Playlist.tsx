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
  const { playlist, isLoading, isModified, moveTrack, sortPlaylist, cancelChanges, saveChanges } = usePlaylist(
    location.pathname.substring(1)
  );

  if (isLoading) return <Loading />;
  if (!isLoading && playlist.length === 0) return <ErrorPage />;

  return (
    <div className="relative flex flex-col items-center md:p-8 gap-8">
      {isLoading && (
        <div className="w-12">
          <LoadingAnimation width="w-full" />
        </div>
      )}
      <PlaylistEdit
        totalTracks={playlist.length}
        currentSort={currentSort}
        isModified={isModified}
        cancelChanges={() => {
          setCurrentSort("");
          cancelChanges();
        }}
        saveChanges={saveChanges}
        isCompact={isCompact}
        setIsCompact={setIsCompact}
      />
      <PlaylistView
        setCurrentSort={setCurrentSort}
        playlist={playlist}
        isCompact={isCompact}
        sortPlaylist={sortPlaylist}
        moveTrack={moveTrack}
      />
    </div>
  );
}
