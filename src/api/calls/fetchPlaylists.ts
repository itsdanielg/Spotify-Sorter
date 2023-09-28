import axios, { AxiosError } from "axios";
import {
  APIReturn,
  SpotifySimplifiedPlaylist,
  SpotifyError,
  SpotifyUserPlaylists,
  SpotifyResponseError
} from "../../types";

export async function fetchPlaylists(token: string): Promise<APIReturn> {
  const simplifiedPlaylists: SpotifySimplifiedPlaylist[] = [];

  let loopResponseError: SpotifyError;
  const getPlaylists = async (href: string) => {
    await axios
      .get(href, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      })
      .then(async ({ data }: { data: SpotifyUserPlaylists }) => {
        simplifiedPlaylists.push(...data.items);
        if (data.next) {
          await getPlaylists(data.next);
        }
      })
      .catch((error: AxiosError) => {
        loopResponseError = (error.response?.data as SpotifyResponseError).error;
      });
  };

  return axios
    .get("https://api.spotify.com/v1/me/playlists/", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })
    .then(async ({ data }: { data: SpotifyUserPlaylists }) => {
      await getPlaylists(data.href);
      if (loopResponseError) return { data: null, error: true, errorResponse: loopResponseError };
      return { data: simplifiedPlaylists, error: false };
    })
    .catch((error: AxiosError) => {
      const responseError: SpotifyResponseError = error.response?.data as SpotifyResponseError;
      return { data: null, error: true, errorResponse: responseError.error as SpotifyError };
    });
}
