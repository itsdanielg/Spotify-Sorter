import { authURL } from "../../../api/authURL";
import { LinkButton } from "../../Atoms";

export function LoginButton() {
  return (
    <LinkButton
      label={"Login To Spotify".toUpperCase()}
      to={authURL}
    />
  );
}
