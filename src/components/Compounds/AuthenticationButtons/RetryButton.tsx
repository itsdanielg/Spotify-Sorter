import { useToken, authURL } from "@/api";
import { Button } from "@/components/Atoms";

export function RetryButton() {
  const { removeToken } = useToken();

  const retryAuthentication = () => {
    removeToken();
    window.location.href = authURL;
  };

  return (
    <Button
      label="Retry"
      onClick={() => retryAuthentication()}
    />
  );
}
