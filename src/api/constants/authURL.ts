import { scopes } from "./scopes";

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
