import { usePlaylists } from "../../api/usePlaylists";
import { Playlist } from "../../types/index.t";
import { PlaylistLink } from "../Atoms/PlaylistLink";

export function Home() {
  const playlists: Playlist[] = usePlaylists();

  return (
    <div className="flex flex-col p-6 gap-4">
      <div className="flex justify-center">
        <span className="text-[3rem] font-bold">Playlists</span>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-12 p-2">
        {playlists.map((playlist: Playlist) => {
          return (
            <PlaylistLink
              url={playlist.name}
              image={playlist.name}
            />
          );
        })}
      </div>
    </div>
  );
}
