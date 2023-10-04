import axios, { AxiosError } from "axios";
import { APIReturn, SpotifyUser, SpotifyResponseError } from "@/types";

export async function fetchCurrentUser(token: string): APIReturn<SpotifyUser> {
  return axios
    .get(`https://api.spotify.com/v1/me/`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })
    .then(({ data }: { data: SpotifyUser }) => {
      return { data: data, errorResponse: null };
    })
    .catch((error: AxiosError) => {
      return { data: null, errorResponse: error.response?.data as SpotifyResponseError };
    });
}
