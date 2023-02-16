/* eslint-disable react-hooks/exhaustive-deps */

import { Dispatch, SetStateAction, useEffect, useState } from "react";

export function useToken(): [string, Dispatch<SetStateAction<string>>] {
  const [token, setToken] = useState(() => {
    return window.localStorage.getItem("token") ?? "";
  });

  useEffect(() => {
    const hash: string = window.location.hash;
    if (!token && hash) {
      if (!hash) return;
      const newToken = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        ?.split("=")[1];
      window.location.hash = "";
      window.localStorage.setItem("token", newToken as string);
      setToken(newToken as string);
    }
  }, []);

  return [token, setToken];
}
