import { useToken } from "../api/hooks/useToken";
import { Login } from "./Pages/Login";
import { AuthenticatedPage } from "./Pages/AuthenticatedPage";

export function App() {
  const { token } = useToken();

  if (!token) return <Login />;
  return <AuthenticatedPage />;
}
