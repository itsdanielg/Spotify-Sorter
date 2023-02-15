import { useEffect } from "react";
import { useToken } from "../api/useToken";
import { Login } from "./Pages/Login";
import { Home } from "./Pages/Home";
import { NavBar } from "./Compounds/NavBar";
import { Route, Routes } from "react-router-dom";

export function App() {
  useEffect(() => {
    localStorage.clear();
  }, []);

  const [token, setToken] = useToken();

  if (!token) return <Login />;
  return (
    <div className="w-full h-screen flex flex-col bg-stone-300">
      <NavBar setToken={setToken} />
      <div className="w-full h-full overflow-y-auto overflow-x-hidden">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
        </Routes>
      </div>
    </div>
  );
}
