import { PlaylistSong } from "../../types";
import { DraggablePlaylistSongs } from "./DraggablePlaylistSongs";

interface PlaylistViewProps {
  playlistSongs: PlaylistSong[];
  moveSong: (sourceIndex: number, destinationIndex: number) => void;
}

export function PlaylistView({ playlistSongs, moveSong }: PlaylistViewProps) {
  return (
    <div className="flex flex-col items-center gap-2 w-5/6">
      <div className="sticky top-0 flex items-center w-full rounded-md bg-gray-3 text-white-1 [&>*]:p-4">
        <span className="w-[5%] text-center">#</span>
        <span className="w-[10%] text-center">Release Date</span>
        <span className="w-[35%]">Title</span>
        <span className="w-[15%]">Artist</span>
        <span className="w-[20%]">Album</span>
        <span className="w-[5%]">Track</span>
        <span className="w-[10%] text-center">Date Added</span>
      </div>
      <DraggablePlaylistSongs
        playlistSongs={playlistSongs}
        moveSong={moveSong}
      />
    </div>
  );
}
