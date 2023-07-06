/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import { PlaylistTrack, Track } from "../../types";
import { getSortedPlaylist } from "../../util/getSortedPlaylist";
import { markChangedSongs } from "../../util/markChangedSongs";
import { unmarkSongs } from "../../util/unmarkSongs";
import { fetchPlaylist } from "../calls/fetchPlaylist";
import { updatePlaylist } from "../calls/updatePlaylist";
import { useToken } from "./useToken";

export function usePlaylist(playlistId: string) {
  const { token } = useToken();

  const [playlist, setPlaylist] = useState<PlaylistTrack[]>([]);
  const [unorderedPlaylist, setUnorderedPlaylist] = useState<PlaylistTrack[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isModified, setIsModified] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const moveTrack = (sourceIndex: number, destinationIndex: number) => {
    const newPlaylist = [...playlist];
    const [track] = newPlaylist.splice(sourceIndex, 1);
    newPlaylist.splice(destinationIndex, 0, track);
    markChangedSongs(newPlaylist);
    setPlaylist(newPlaylist);
  };

  const sortPlaylist = async (field: string) => {
    const sortedPlaylist = getSortedPlaylist(playlist, field);
    markChangedSongs(sortedPlaylist);
    setPlaylist(sortedPlaylist);
  };

  const cancelChanges = () => {
    const oldPlaylist = [...unorderedPlaylist].map((song) => {
      song.rearranged = false;
      return song;
    });
    setPlaylist(oldPlaylist);
  };

  const saveChanges = async () => {
    setIsSaving(true);
    const { data, error } = await updatePlaylist(token, playlistId, unorderedPlaylist, playlist);
    if (error) {
      return;
    }
    const newPlaylist = unmarkSongs(playlist);
    setPlaylist(newPlaylist);
    setUnorderedPlaylist(newPlaylist);
    setIsSaving(false);
  };

  useEffect(() => {
    for (let i = 0; i < playlist.length; i++) {
      if (playlist[i].id !== unorderedPlaylist[i].id) {
        setIsModified(true);
        return;
      }
    }
    setIsModified(false);
  }, [playlist, unorderedPlaylist]);

  useEffect(() => {
    const getPlaylist = async () => {
      const { data, error } = await fetchPlaylist(token, playlistId);
      if (error) {
        setPlaylist([]);
        setIsLoading(false);
        setIsError(true);
        return;
      }
      const dataPlaylist = data.map((playlistTrack: any, index: number) => {
        return {
          id: playlistTrack.track.id,
          index: index,
          track: {
            title: playlistTrack.track.name,
            artists: playlistTrack.track.artists.map((artist: any) => artist.name),
            album: playlistTrack.track.album.name,
            albumURL: playlistTrack.track.album.images[0].url,
            releaseDate: playlistTrack.track.album.release_date,
            dateAdded: new Date(playlistTrack.added_at).toLocaleDateString(),
            timeAdded: new Date(playlistTrack.added_at).toLocaleTimeString(),
            trackNumber: playlistTrack.track.track_number
          } as Track,
          rearranged: false
        } as PlaylistTrack;
      });
      setPlaylist(dataPlaylist);
      setUnorderedPlaylist(dataPlaylist);
      setIsLoading(false);
    };
    getPlaylist();
  }, []);

  return { playlist, isLoading, isError, isModified, isSaving, moveTrack, sortPlaylist, cancelChanges, saveChanges };
}
