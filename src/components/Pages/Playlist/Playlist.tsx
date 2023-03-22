import { useLocation } from "react-router-dom";
import { usePlaylist } from "../../../api/hooks/usePlaylist";
import { PlaylistEdit } from "./PlaylistEdit";
import { PlaylistView } from "./PlaylistView";
import { Loading } from "../Loading";

export function Playlist() {
  const location = useLocation();
  const { playlist, isLoading, isModified, moveTrack, sortPlaylist, cancelChanges, saveChanges } = usePlaylist(
    location.pathname.substring(1)
  );

  if (playlist.length === 0) return <Loading />;
  return (
    <div className="relative flex flex-col items-center p-8 gap-8">
      <PlaylistEdit
        totalTracks={playlist.length}
        isLoading={isLoading}
        isModified={isModified}
        sortPlaylist={sortPlaylist}
        cancelChanges={cancelChanges}
        saveChanges={saveChanges}
      />
      <PlaylistView
        playlist={playlist}
        moveTrack={moveTrack}
      />
    </div>
  );
}
