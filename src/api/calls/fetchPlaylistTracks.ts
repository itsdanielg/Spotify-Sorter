import axios, { AxiosError } from "axios";
import { APIReturn, SpotifyPlaylistTrack, SpotifyPlaylistTracks, SpotifyResponseError } from "@/types";

export async function fetchPlaylistTracks(token: string, playlistId: string): APIReturn<SpotifyPlaylistTrack[]> {
  const playlistTracks: SpotifyPlaylistTrack[] = [];

  let loopResponseError: SpotifyResponseError;
  const getPlaylist = async (href: string) => {
    await axios
      .get(href, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      })
      .then(async ({ data }: { data: SpotifyPlaylistTracks }) => {
        playlistTracks.push(...data.items);
        if (data.next) {
          await getPlaylist(data.next);
        }
      })
      .catch((error: AxiosError) => {
        loopResponseError = error.response?.data as SpotifyResponseError;
      });
  };

  return axios
    .get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })
    .then(async ({ data }: { data: SpotifyPlaylistTracks }) => {
      await getPlaylist(data.href);
      if (loopResponseError) return { data: null, errorResponse: loopResponseError };
      return { data: playlistTracks, errorResponse: null };
    })
    .catch((error: AxiosError) => {
      return { data: null, errorResponse: error.response?.data as SpotifyResponseError };
    });
}
