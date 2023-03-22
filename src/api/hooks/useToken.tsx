/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";

export function useToken(): { token: string; removeToken: () => void } {
  const [token, setToken] = useState(() => {
    return window.localStorage.getItem("token") ?? "";
  });

  const removeToken = () => {
    setToken("");
    window.localStorage.removeItem("token");
    window.location.href = "/";
  };

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

  return { token, removeToken };
}
