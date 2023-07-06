import { Dispatch, SetStateAction } from "react";
import { PlaylistTrack } from "../../../types";
import { DraggablePlaylistSongs } from "./DraggablePlaylistSongs";
import { PlaylistViewHeader } from "./PlaylistViewHeader";

interface PlaylistViewProps {
  setCurrentSort: Dispatch<SetStateAction<string>>;
  playlist: PlaylistTrack[];
  isCompact: boolean;
  sortPlaylist: (field: string) => void;
  moveTrack: (sourceIndex: number, destinationIndex: number) => void;
}

export function PlaylistView({ setCurrentSort, playlist, isCompact, moveTrack, sortPlaylist }: PlaylistViewProps) {
  return (
    <div className="flex flex-col items-center gap-2 w-full md:w-5/6">
      <PlaylistViewHeader
        setCurrentSort={setCurrentSort}
        sortPlaylist={sortPlaylist}
      />
      <DraggablePlaylistSongs
        playlistSongs={playlist}
        isCompact={isCompact}
        moveTrack={moveTrack}
      />
    </div>
  );
}
