/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import { PlaylistSong, Song } from "../../types/index.t";
import { markChangedSongs } from "../../util/markChangedSongs";
import { sortByRelease } from "../../util/sortByRelease";
import { useToken } from "../useToken";
import { fetchPlaylistSongs } from "./fetchPlaylistSongs";

export function usePlaylistSongs(playlistId: string) {
  const [playlistSongs, setPlaylist] = useState<PlaylistSong[]>([]);
  const [token] = useToken();

  const sortPlaylist = () => {
    const newPlaylist = [...playlistSongs];
    const orderedPlaylist = sortByRelease(newPlaylist);
    const finalPlaylist = markChangedSongs(orderedPlaylist, newPlaylist);
    setPlaylist(finalPlaylist);
  };

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
            artists: playlistSong.track.artists.map((artist: any) => artist.name),
            album: playlistSong.track.album.name,
            albumURL: playlistSong.track.album.images[0].url,
            releaseDate: playlistSong.track.album.release_date,
            dateAdded: new Date(playlistSong.added_at).toLocaleDateString(),
            timeAdded: new Date(playlistSong.added_at).toLocaleTimeString(),
            trackNumber: playlistSong.track.track_number,
          } as Song,
          rearranged: false,
        } as PlaylistSong;
      });
      setPlaylist(dataPlaylistSongs);
    };

    getPlaylist();
  }, []);

  return { playlistSongs, sortPlaylist };
}
