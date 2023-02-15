import { useEffect, useState } from "react";
import { Playlist } from "../types/index.t";

export function usePlaylists() {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);

  useEffect(() => {
    const fetchPlaylists = async () => {
      setPlaylists([{ name: "Wild Youth" }]);
    };
    fetchPlaylists();
  }, []);

  return playlists;
}
