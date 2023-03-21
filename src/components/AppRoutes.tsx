import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { PlaylistPage } from "./Pages/PlaylistPage";

export function AppRoutes() {
  return (
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
  );
}
