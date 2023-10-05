import { useCurrentUser, useCurrentUserReturn } from "@/api";
import { UserContext } from "@/context";
import { AppRoutes } from "./AppRoutes";
import { Navigation } from "./Layouts";
import { Page } from "./Templates";

export function AppAuthenticated() {
  const { data, error } = useCurrentUser();

  if (error) return <Page error={error} />;

  return (
    <UserContext.Provider value={data as useCurrentUserReturn}>
      <div className="flex flex-col w-full h-screen overflow-x-hidden">
        <Navigation />
        <AppRoutes />
      </div>
    </UserContext.Provider>
  );
}
