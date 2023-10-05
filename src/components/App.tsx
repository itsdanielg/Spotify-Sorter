import { useToken } from "@/api";
import { AppAuthenticated } from "./AppAuthenticated";
import { LoginPage } from "./Pages";

export function App() {
  const { token } = useToken();

  if (!token) return <LoginPage />;
  return <AppAuthenticated />;
}
