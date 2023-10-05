import { Navigate } from "react-router-dom";
import { useCurrentUser, useCurrentUserReturn } from "@/api";
import { UserContext } from "@/context";
import { AppRoutes } from "./AppRoutes";
import { Navigation } from "./Layouts";

export function AppAuthenticated() {
  const { data, error } = useCurrentUser();

  if (error) {
    return (
      <Navigate
        to="/error"
        state={error}
      />
    );
  }

  return (
    <UserContext.Provider value={data as useCurrentUserReturn}>
      <div className="flex flex-col w-full h-screen overflow-x-hidden">
        <Navigation />
        <AppRoutes />
      </div>
    </UserContext.Provider>
  );
}
