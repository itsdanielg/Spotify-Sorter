import { useEffect, useState } from "react";
import { SpotifyError, SpotifyUser, HookReturn } from "@/types";
import { fetchCurrentUser } from "../calls";
import { useToken } from "./useToken";

export type useCurrentUserReturn = {
  name: string;
  images: string[];
};

export function useCurrentUser(): HookReturn<useCurrentUserReturn> {
  const { token } = useToken();

  const [name, setName] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [error, setError] = useState<SpotifyError | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const { data, errorResponse } = await fetchCurrentUser(token);
      if (errorResponse) {
        setError(errorResponse.error as SpotifyError);
        return;
      }

      const dataUser = data as SpotifyUser;
      const name = dataUser.display_name ?? "";

      setName(name.split(" ")[0]);
      setImages(dataUser.images.map((image) => image.url));
    };

    getUser();
  }, []);

  return { data: { name, images }, error: error };
}
