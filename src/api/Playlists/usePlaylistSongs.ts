import { useEffect, useState } from "react";
import { PlaylistSong, Song } from "../../types/index.t";
import { useToken } from "../useToken";
import { fetchPlaylistSongs } from "./fetchPlaylistSongs";

export function usePlaylistSongs(playlistId: string) {
  const [playlistSongs, setPlaylist] = useState<PlaylistSong[]>([]);
  const [token] = useToken();

  console.log(playlistSongs);

  useEffect(() => {
    const getPlaylist = async () => {
      const { data, error } = await fetchPlaylistSongs(token, playlistId);

      if (error || !data) {
        setPlaylist([]);
        return;
      }

      const dataPlaylistSongs = data.map((playlistSong: any, index: number) => {
        return {
          id: playlistSong.track.id,
          index: index,
          song: {
            title: playlistSong.track.name,
            artist: playlistSong.track.artists[0].name,
            album: playlistSong.track.album.name,
            albumURL: playlistSong.track.album.images[0].url,
            releaseDate: playlistSong.track.album.release_date,
            dateAdded: new Date(playlistSong.added_at).toLocaleDateString(),
          } as Song,
          rearranged: false,
        } as PlaylistSong;
      });
      setPlaylist(dataPlaylistSongs);
    };

    getPlaylist();
  }, []);

  return playlistSongs;
}
