import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Playlist } from "./Pages/Playlist";

export function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path=":id"
        element={<Playlist />}
      />
    </Routes>
  );
}
