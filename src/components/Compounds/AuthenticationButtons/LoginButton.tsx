import { authURL } from "@/api";
import { LinkButton } from "@/components/Atoms";

export function LoginButton() {
  return (
    <LinkButton
      label={"Login To Spotify".toUpperCase()}
      to={authURL}
    />
  );
}
