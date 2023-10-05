import { authURL } from "@/api";
import { LinkButton } from "@/components/Atoms";
import { Page } from "@/components/Templates";

export function LoginPage() {
  return (
    <Page className="flex items-center justify-center">
      <LinkButton
        label={"Login To Spotify".toUpperCase()}
        to={authURL}
      />
    </Page>
  );
}
