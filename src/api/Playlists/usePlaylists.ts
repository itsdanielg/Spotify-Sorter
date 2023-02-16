import { useEffect, useState } from "react";
import { Playlist } from "../../types/index.t";
import { useToken } from "../useToken";
import { fetchPlaylists } from "./fetchPlaylists";

export function usePlaylists() {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [token] = useToken();

  useEffect(() => {
    const getPlaylists = async () => {
      const { data, error } = await fetchPlaylists(token);
      if (error || !data) {
        setPlaylists([]);
        return;
      }

      const dataPlaylists = data.map((playlist: any) => {
        return {
          id: playlist.id,
          name: playlist.name,
          imageURL: playlist.images[0]?.url ?? "",
          songs: [],
        } as Playlist;
      });
      setPlaylists(dataPlaylists);
    };
    getPlaylists();
  }, []);

  return playlists;
}
