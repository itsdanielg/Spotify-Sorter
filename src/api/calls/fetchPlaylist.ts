import axios from "axios";

export async function fetchPlaylist(token: string, playlistId: string): Promise<{ data: any; error: boolean }> {
  const data: any = [];

  const getPlaylist = async (href: string) => {
    await axios
      .get(href, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      })
      .then(async (response) => {
        data.push(...response.data.items);
        if (response.data.limit === 100) {
          await getPlaylist(response.data.next);
        }
      })
      .catch(() => {
        return null;
      });
    return true;
  };

  return axios
    .get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })
    .then(async (response) => {
      const loopResponse = await getPlaylist(response.data.href);
      if (!loopResponse) return { data: null, error: true };
      return { data: data, error: false };
    })
    .catch(() => {
      return { data: null, error: true };
    });
}
