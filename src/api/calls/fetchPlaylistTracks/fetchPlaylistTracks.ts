import axios, { AxiosError } from "axios";
import { APIReturn, SpotifyPlaylistTrack, SpotifyPlaylistTracks, SpotifyResponseError } from "@/types";
import { fetchNextRecursive } from "../fetchNextRecursive";

export async function fetchPlaylistTracks(token: string, playlistId: string): APIReturn<SpotifyPlaylistTrack[]> {
  return axios
    .get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })
    .then(async ({ data }: { data: SpotifyPlaylistTracks }) => {
      return await fetchNextRecursive(data.href, token, [] as SpotifyPlaylistTrack[]);
    })
    .catch((error: AxiosError) => {
      return { data: null, errorResponse: error.response?.data as SpotifyResponseError };
    });
}
