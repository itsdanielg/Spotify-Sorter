/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import { PlaylistSong, Song } from "../../types/index.t";
import { markChangedSongs } from "../../util/markChangedSongs";
import { sortByRelease } from "../../util/sortByRelease";
import { useToken } from "../useToken";
import { fetchPlaylistSongs } from "./fetchPlaylistSongs";

export function usePlaylistSongs(playlistId: string) {
  const [playlistSongs, setPlaylist] = useState<PlaylistSong[]>([]);
  const [unorderedPlaylistSongs, setUnorderedPlaylistSongs] = useState<PlaylistSong[]>([]);
  const [isChanged, setIsChanged] = useState<boolean>(false);

  useEffect(() => {
    for (let i = 0; i < playlistSongs.length; i++) {
      if (playlistSongs[i].id !== unorderedPlaylistSongs[i].id) {
        setIsChanged(true);
        return;
      }
    }
    setIsChanged(false);
  }, [playlistSongs, unorderedPlaylistSongs]);

  const [token] = useToken();

  const moveSong = (sourceIndex: number, destinationIndex: number) => {
    const newPlaylist = [...playlistSongs];
    const [movedSong] = newPlaylist.splice(sourceIndex, 1);
    movedSong.rearranged = true;
    newPlaylist.splice(destinationIndex, 0, movedSong);
    const finalPlaylist = markChangedSongs(newPlaylist, unorderedPlaylistSongs);
    setPlaylist(finalPlaylist);
  };

  const sortPlaylist = () => {
    const newPlaylist = [...playlistSongs];
    const orderedPlaylist = sortByRelease(newPlaylist);
    const finalPlaylist = markChangedSongs(orderedPlaylist, unorderedPlaylistSongs);
    setPlaylist(finalPlaylist);
  };

  const resetChanges = () => {
    const oldPlaylistSongs = [...unorderedPlaylistSongs].map((song) => {
      song.leftChanged = false;
      song.rightChanged = false;
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
          leftChanged: false,
          rightChanged: false,
        } as PlaylistSong;
      });
      setPlaylist(dataPlaylistSongs);
      setUnorderedPlaylistSongs(dataPlaylistSongs);
    };

    getPlaylist();
  }, []);

  return { playlistSongs, isChanged, moveSong, sortPlaylist, resetChanges };
}
