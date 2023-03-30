import axios from "axios";

export function fetchTrack(token: string, trackId: string) {
  return axios
    .get(`	https://api.spotify.com/v1/me/tracks`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })
    .then(async (response) => {
      console.log(response.data);
    })
    .catch(() => {
      return;
    });
}
