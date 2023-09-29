import { useToken } from "../../../api/hooks/useToken";
import { Button } from "../../Atoms";

export function LogoutButton() {
  const { removeToken } = useToken();

  return (
    <Button
      label="Log Out"
      onClick={() => removeToken()}
    />
  );
}
