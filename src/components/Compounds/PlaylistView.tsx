import { useState } from "react";
import { PlaylistSong } from "../../types/index.t";
import { SongRow } from "../Atoms/SongRow";

interface PlaylistViewProps {
  url: string;
}

export function PlaylistView() {
  const [songs, setSongs] = useState<PlaylistSong[]>([]);

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Release Date</th>
            <th>Title</th>
            <th>Artist</th>
            <th>Image</th>
            <th>Album</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song) => {
            return <SongRow song={song} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
