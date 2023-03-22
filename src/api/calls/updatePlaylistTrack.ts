import axios from "axios";

export async function updatePlaylistTrack(
  token: string,
  playlistId: string,
  startIndex: number,
  endIndex: number
): Promise<{ hasSwitched: boolean | null; error: boolean }> {
  if (startIndex === endIndex) return { hasSwitched: false, error: false };
  return axios
    .put(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
      {
        range_start: startIndex,
        insert_before: endIndex
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      }
    )
    .then(() => {
      return { hasSwitched: true, error: false };
    })
    .catch(() => {
      return { hasSwitched: null, error: true };
    });
}
