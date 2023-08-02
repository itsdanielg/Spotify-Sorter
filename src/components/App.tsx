import { useToken } from "../api/hooks/useToken";
import { Login } from "./Pages/Login";
import { Navigation } from "./Pages/Navigation/";
import { AppRoutes } from "./AppRoutes";

export function App() {
  const { token, removeToken } = useToken();

  if (!token) return <Login />;
  return (
    <div className="w-full h-screen flex flex-col">
      <Navigation removeToken={removeToken} />
      <div className="w-full h-screen overflow-y-auto overflow-x-hidden">
        <AppRoutes />
      </div>
    </div>
  );
}
