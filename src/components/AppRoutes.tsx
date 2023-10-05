import { Routes, Route } from "react-router-dom";
import { PlaylistTracksPage, PlaylistsPage } from "./Pages";

export function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<PlaylistsPage />}
      />
      <Route
        path=":id"
        element={<PlaylistTracksPage />}
      />
    </Routes>
  );
}
