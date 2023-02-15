const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
  "playlist-read-collaborative",
  "playlist-read-private",
];

const authURL =
  process.env.REACT_APP_AUTH_ENDPOINT +
  "?client_id=" +
  process.env.REACT_APP_CLIENT_ID +
  "&redirect_uri=" +
  process.env.REACT_APP_REDIRECT_URI +
  "&scope=" +
  scopes.join("%20") +
  "&response_type=" +
  process.env.REACT_APP_RESPONSE_TYPE;

export { authURL };
