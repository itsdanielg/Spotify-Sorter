import { useToken } from "../api/useToken";
import { Login } from "./Pages/Login";
import { Home } from "./Pages/Home";
import { NavBar } from "./Compounds/NavBar";
import { Route, Routes } from "react-router-dom";
import { PlaylistPage } from "./Pages/PlaylistPage";

export function App() {
  const [token, setToken] = useToken();

  if (!token) return <Login />;
  return (
    <div className="w-full h-screen flex flex-col bg-gray-2">
      <NavBar setToken={setToken} />
      <div className="w-full h-full overflow-y-auto overflow-x-hidden">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path=":id"
            element={<PlaylistPage />}
          />
        </Routes>
      </div>
    </div>
  );
}
