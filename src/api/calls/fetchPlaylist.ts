import axios, { AxiosError } from "axios";
import {
  APIReturn,
  SpotifyError,
  SpotifyPlaylistTrack,
  SpotifyPlaylistTracks,
  SpotifyResponseError
} from "../../types";

export async function fetchPlaylist(token: string, playlistId: string): Promise<APIReturn> {
  const playlistTracks: SpotifyPlaylistTrack[] = [];

  let loopResponseError: SpotifyError;
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
        loopResponseError = (error.response?.data as SpotifyResponseError).error;
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
      if (loopResponseError) return { data: null, error: true, errorResponse: loopResponseError };
      return { data: playlistTracks, error: false };
    })
    .catch((error: AxiosError) => {
      const responseError: SpotifyResponseError = error.response?.data as SpotifyResponseError;
      return { data: null, error: true, errorResponse: responseError.error as SpotifyError };
    });
}
