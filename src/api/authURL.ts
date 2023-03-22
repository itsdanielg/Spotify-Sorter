const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
  "playlist-read-collaborative",
  "playlist-read-private",
  "playlist-modify-private",
  "playlist-modify-public"
];

const authURL =
  import.meta.env.VITE_AUTH_ENDPOINT +
  "?client_id=" +
  import.meta.env.VITE_CLIENT_ID +
  "&redirect_uri=" +
  import.meta.env.VITE_REDIRECT_URI +
  "&scope=" +
  scopes.join("%20") +
  "&response_type=" +
  import.meta.env.VITE_RESPONSE_TYPE;

export { authURL };
