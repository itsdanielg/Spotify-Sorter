import { PlaylistSong } from "../../types/index.t";
import { SongRow } from "../Atoms/SongRow";

interface PlaylistViewProps {
  playlistSongs: PlaylistSong[];
}

export function PlaylistView({ playlistSongs }: PlaylistViewProps) {
  return (
    <table className="border-2 w-4/6">
      <thead>
        <tr className="sticky top-0 bg-gray-3 text-white [&>*]:p-2 [&>*]:border-2 text-left">
          <th className="text-center">#</th>
          <th className="text-center">Release Date</th>
          <th colSpan={2}>Title</th>
          <th>Artist</th>
          <th colSpan={2}>Album</th>
          <th className="text-center">Date Added</th>
        </tr>
      </thead>
      <tbody>
        {playlistSongs.map(({ id, index, song, leftChanged, rightChanged, rearranged }) => (
          <SongRow
            key={id}
            index={index + 1}
            song={song}
            leftChanged={!!leftChanged}
            rightChanged={!!rightChanged}
            rearranged={!!rearranged}
          />
        ))}
      </tbody>
    </table>
  );
}
