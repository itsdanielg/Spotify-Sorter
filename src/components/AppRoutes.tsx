import { Routes, Route } from "react-router-dom";
import { ErrorPage, PlaylistTracksPage, PlaylistsPage } from "./Pages";

export function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<PlaylistsPage />}
      />
      <Route
        path="/error"
        element={<ErrorPage />}
      />
      <Route
        path=":id"
        element={<PlaylistTracksPage />}
      />
    </Routes>
  );
}
