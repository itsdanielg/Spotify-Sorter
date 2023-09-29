import { useToken } from "../../../api/hooks/useToken";
import { Button } from "../../Atoms";
import { authURL } from "../../../api/authURL";

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
