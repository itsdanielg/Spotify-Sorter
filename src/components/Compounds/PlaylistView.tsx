import { usePlaylistSongs } from "../../api/Playlists/usePlaylistSongs";
import { SongRow } from "../Atoms/SongRow";

interface PlaylistViewProps {
  playlistId: string;
}

export function PlaylistView({ playlistId }: PlaylistViewProps) {
  const playlistSongs = usePlaylistSongs(playlistId);

  return (
    <table className="border-2 w-4/6">
      <thead>
        <tr className="[&>*]:p-2 [&>*]:border-2 text-left">
          <th className="w-[1px] whitespace-nowrap">#</th>
          <th className="w-[1px] whitespace-nowrap">Release Date</th>
          <th>Title</th>
          <th className="w-[1px] whitespace-nowrap">Artist</th>
          <th colSpan={2}>Album</th>
          <th className="w-[1px] whitespace-nowrap">Date Added</th>
        </tr>
      </thead>
      <tbody>
        {playlistSongs.map(({ id, index, song }) => (
          <SongRow
            key={id}
            index={index + 1}
            song={song}
          />
        ))}
      </tbody>
    </table>
  );
}
