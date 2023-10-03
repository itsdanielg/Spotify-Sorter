import { useUser, useUserReturn } from "../../../api/hooks/useUser";
import { AppRoutes } from "../../AppRoutes";
import { Footer } from "../../Molecules";
import { TokenErrorPage } from "../ErrorPage";
import { Navigation } from "../Navigation";

export function AuthenticatedPage() {
  const { data, error } = useUser();

  if (error) return <TokenErrorPage />;

  const { name } = data as useUserReturn;
  return (
    <div className="relative w-full h-screen flex flex-col">
      <Navigation name={name} />
      <div className="w-full h-screen overflow-y-auto overflow-x-hidden">
        <AppRoutes />
      </div>
    </div>
  );
}
