import axios, { AxiosError } from "axios";
import { APIReturn, SpotifyUser, SpotifyResponseError, SpotifyError } from "../../types";

export async function fetchUser(token: string): Promise<APIReturn> {
  return axios
    .get(`https://api.spotify.com/v1/me/`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })
    .then(({ data }: { data: SpotifyUser }) => {
      return { data: data, error: false };
    })
    .catch((error: AxiosError) => {
      const responseError: SpotifyResponseError = error.response?.data as SpotifyResponseError;
      return { data: null, error: true, errorResponse: responseError.error as SpotifyError };
    });
}
