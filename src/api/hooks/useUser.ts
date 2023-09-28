import { useEffect, useState } from "react";
import { SpotifyError, SpotifyUser, HookReturn } from "../../types";
import { fetchUser } from "../calls/fetchUser";
import { useToken } from "./useToken";

export type useUserReturn = {
  name: string;
};

export function useUser(): HookReturn<useUserReturn> {
  const { token } = useToken();

  const [name, setName] = useState("");
  const [error, setError] = useState<SpotifyError | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const { data, error, errorResponse } = await fetchUser(token);
      if (error) {
        setError(errorResponse as SpotifyError);
        return;
      }

      const dataUser = data as SpotifyUser;
      const name = dataUser.display_name ?? "";

      setName(name.split(" ")[0]);
    };

    getUser();
  }, []);

  return { data: { name }, error: error };
}
