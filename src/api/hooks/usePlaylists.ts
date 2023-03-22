/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import { Playlist } from "../../types";
import { fetchPlaylists } from "../calls/fetchPlaylists";
import { useToken } from "./useToken";

export function usePlaylists() {
  const { token } = useToken();

  const [playlists, setPlaylists] = useState<Playlist[]>([]);

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
          owner: playlist.owner.display_name,
          description: playlist.description,
          collaborative: playlist.collaborative,
          public: playlist.public
        } as Playlist;
      });
      setPlaylists(dataPlaylists);
    };
    getPlaylists();
  }, []);

  return playlists;
}
