import axios from "axios";

export function fetchUser(token: string) {
  return axios
    .get(`	https://api.spotify.com/v1/me/`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })
    .then(async (response) => {
      return response.data;
    })
    .catch(() => {
      return;
    });
}
