import axios, { AxiosError } from "axios";
import { APIReturn, SpotifySimplifiedPlaylist, SpotifyUserPlaylists, SpotifyResponseError } from "@/types";
import { fetchNextRecursive } from "../fetchNextRecursive";

export async function fetchCurrentUserPlaylists(token: string): APIReturn<SpotifySimplifiedPlaylist[]> {
  return axios
    .get("https://api.spotify.com/v1/me/playlists/", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })
    .then(async ({ data }: { data: SpotifyUserPlaylists }) => {
      return await fetchNextRecursive(data.href, token, [] as SpotifySimplifiedPlaylist[]);
    })
    .catch((error: AxiosError) => {
      return { data: null, errorResponse: error.response?.data as SpotifyResponseError };
    });
}
