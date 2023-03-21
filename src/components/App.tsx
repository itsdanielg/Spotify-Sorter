import { useToken } from "../api/useToken";
import { Login } from "./Pages/Login";
import { NavBar } from "./Compounds/NavBar";
import { AppRoutes } from "./AppRoutes";

export function App() {
  const { token, removeToken } = useToken();

  if (!token) return <Login />;
  return (
    <div className="w-full h-screen flex flex-col bg-gray-2">
      <NavBar removeToken={removeToken} />
      <div className="w-full h-full overflow-y-auto overflow-x-hidden">
        <AppRoutes />
      </div>
    </div>
  );
}
