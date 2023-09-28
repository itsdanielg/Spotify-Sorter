import { useEffect, useState } from "react";
import { HookReturn, Playlist, SpotifyError, SpotifyPlaylist, SpotifySimplifiedPlaylist } from "../../types";
import { fetchPlaylists } from "../calls/fetchPlaylists";
import { useToken } from "./useToken";

export type usePlaylistsReturn = {
  playlists: Playlist[];
};

export function usePlaylists(): HookReturn<usePlaylistsReturn> {
  const { token } = useToken();

  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [error, setError] = useState<SpotifyError | null>(null);

  useEffect(() => {
    const getPlaylists = async () => {
      const { data, error, errorResponse } = await fetchPlaylists(token);
      if (error) {
        setError(errorResponse as SpotifyError);
        return;
      }

      const dataPlaylists = data as SpotifySimplifiedPlaylist[];
      const newPlaylists: Playlist[] = dataPlaylists.map((playlist: SpotifySimplifiedPlaylist) => {
        return {
          id: playlist.id,
          name: playlist.name,
          imageURL: playlist.images[0]?.url ?? "",
          owner: playlist.owner.display_name,
          description: playlist.description,
          collaborative: playlist.collaborative,
          isPublic: playlist.public
        } as Playlist;
      });

      setPlaylists(newPlaylists);
    };

    getPlaylists();
  }, []);

  return { data: { playlists }, error };
}
