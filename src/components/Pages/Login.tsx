import { LinkButton } from "../Atoms/Button";
import { authURL } from "../../api/authURL";

export function Login() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <LinkButton
        label={"Login To Spotify".toUpperCase()}
        to={authURL}
      />
    </div>
  );
}
