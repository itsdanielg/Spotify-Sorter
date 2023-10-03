import axios, { AxiosError } from "axios";
import { APIReturn, SpotifySimplifiedPlaylist, SpotifyUserPlaylists, SpotifyResponseError } from "@/types";

export async function fetchCurrentUserPlaylists(token: string): APIReturn<SpotifySimplifiedPlaylist[]> {
  const simplifiedPlaylists: SpotifySimplifiedPlaylist[] = [];

  let loopResponseError: SpotifyResponseError;
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
        loopResponseError = error.response?.data as SpotifyResponseError;
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
      if (loopResponseError) return { data: null, errorResponse: loopResponseError };
      return { data: simplifiedPlaylists, errorResponse: null };
    })
    .catch((error: AxiosError) => {
      return { data: null, errorResponse: error.response?.data as SpotifyResponseError };
    });
}
