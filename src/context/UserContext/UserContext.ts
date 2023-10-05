import { createContext } from "react";
import { useCurrentUserReturn } from "@/api";

const initUser: useCurrentUserReturn = {
  id: "",
  name: "",
  images: []
};

export const UserContext = createContext(initUser);
