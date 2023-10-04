import axios, { AxiosError } from "axios";
import { APIReturn, SpotifyPlaylistTracks, SpotifyResponseError, SpotifyUserPlaylists } from "@/types";

export type FetchNextRecursiveData = SpotifyUserPlaylists | SpotifyPlaylistTracks;

export async function fetchNextRecursive<T extends FetchNextRecursiveData, V>(
  href: string,
  token: string,
  dataArray: V[]
): APIReturn<V[]> {
  try {
    const { data }: { data: T } = await axios.get(href, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });

    dataArray.push(...(data.items as V[]));
    if (data.next) {
      return await fetchNextRecursive(data.next, token, dataArray);
    }

    return { data: dataArray, errorResponse: null };
  } catch (error: unknown) {
    return { data: null, errorResponse: (error as AxiosError).response?.data as SpotifyResponseError };
  }
}
