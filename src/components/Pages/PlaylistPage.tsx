import { useLocation } from "react-router-dom";
import { usePlaylistSongs } from "../../api/Playlists/usePlaylistSongs";
import { Loading } from "../Atoms/Loading";
import { PlaylistEditBar } from "../Compounds/PlaylistEditBar";
import { PlaylistView } from "../Compounds/PlaylistView";

export function PlaylistPage() {
  const location = useLocation();
  const { playlistSongs, loading, isChanged, moveSong, sortPlaylist, resetChanges } = usePlaylistSongs(
    location.pathname.substring(1)
  );

  if (playlistSongs.length === 0) return <Loading />;
  return (
    <div className="relative flex flex-col items-center p-8 gap-8">
      <PlaylistEditBar
        totalTracks={playlistSongs.length}
        isChanged={isChanged}
        sortPlaylist={sortPlaylist}
        resetChanges={resetChanges}
        loading={loading}
      />
      <PlaylistView
        playlistSongs={playlistSongs}
        moveSong={moveSong}
      />
    </div>
  );
}
