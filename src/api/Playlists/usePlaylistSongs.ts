/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import { PlaylistSong, Song } from "../../types/index.t";
import { markChangedSongs } from "../../util/markChangedSongs";
import { sortAndMarkPlaylist } from "../../util/sortAndMarkPlaylist";
import { useToken } from "../useToken";
import { fetchPlaylistSongs } from "./fetchPlaylistSongs";

export function usePlaylistSongs(playlistId: string) {
  const [token] = useToken();

  const [playlistSongs, setPlaylist] = useState<PlaylistSong[]>([]);
  const [unorderedPlaylistSongs, setUnorderedPlaylistSongs] = useState<PlaylistSong[]>([]);
  const [isChanged, setIsChanged] = useState(false);
  const [loading, setLoading] = useState(false);

  const moveSong = (sourceIndex: number, destinationIndex: number) => {
    const newPlaylist = [...playlistSongs];
    const [movedSong] = newPlaylist.splice(sourceIndex, 1);
    newPlaylist.splice(destinationIndex, 0, movedSong);
    const finalPlaylist = markChangedSongs(newPlaylist);
    setPlaylist(finalPlaylist);
  };

  const sortPlaylist = async () => {
    const { sortedPlaylist, error } = await sortAndMarkPlaylist(playlistSongs);
    if (error) {
      setLoading(false);
    } else if (sortedPlaylist) {
      setPlaylist(sortedPlaylist);
      setLoading(false);
    }
  };

  const resetChanges = () => {
    const oldPlaylistSongs = [...unorderedPlaylistSongs].map((song) => {
      song.rearranged = false;
      return song;
    });
    setPlaylist(oldPlaylistSongs);
  };

  const saveChanges = async () => {
    const { data, error } = await fetchPlaylistSongs(token, playlistId);
    if (error || !data) {
      return;
    }
    setUnorderedPlaylistSongs(playlistSongs);
  };

  useEffect(() => {
    for (let i = 0; i < playlistSongs.length; i++) {
      if (playlistSongs[i].id !== unorderedPlaylistSongs[i].id) {
        setIsChanged(true);
        return;
      }
    }
    setIsChanged(false);
  }, [playlistSongs, unorderedPlaylistSongs]);

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
      setUnorderedPlaylistSongs(dataPlaylistSongs);
    };
    getPlaylist();
  }, []);

  return { playlistSongs, isChanged, loading, moveSong, sortPlaylist, resetChanges };
}
