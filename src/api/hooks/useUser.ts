import { useEffect, useState } from "react";
import { useToken } from "./useToken";
import { fetchUser } from "../calls/fetchUser";

export function useUser() {
  const { token } = useToken();

  const [name, setName] = useState("");

  useEffect(() => {
    const getUser = async () => {
      const data = await fetchUser(token);
      setName(data.display_name.split(" ")[0]);
    };
    getUser();
  }, []);

  return name;
}
