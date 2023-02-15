import axios from "axios";

export async function fetchPlaylists(token: string): Promise<{ data: any; error: boolean }> {
  return axios
    .get("https://api.spotify.com/v1/me/playlists/", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      return { data: response, error: false };
    })
    .catch(() => {
      return { data: null, error: true };
    });
}
