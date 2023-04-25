import { PlaylistTrack } from "../../../types";
import { DraggablePlaylistSongs } from "./DraggablePlaylistSongs";
import { PlaylistViewHeader } from "./PlaylistViewHeader";

interface PlaylistViewProps {
  playlist: PlaylistTrack[];
  isCompact: boolean;
  sortPlaylist: (field: string) => void;
  moveTrack: (sourceIndex: number, destinationIndex: number) => void;
}

export function PlaylistView({ playlist, isCompact, moveTrack, sortPlaylist }: PlaylistViewProps) {
  return (
    <div className="flex flex-col items-center gap-2 w-5/6">
      <PlaylistViewHeader sortPlaylist={sortPlaylist} />
      <DraggablePlaylistSongs
        playlistSongs={playlist}
        isCompact={isCompact}
        moveTrack={moveTrack}
      />
    </div>
  );
}
