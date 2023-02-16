import { useLocation } from "react-router-dom";
import { PlaylistView } from "../Compounds/PlaylistView";

export function PlaylistPage() {
  const location = useLocation();

  return (
    <div className="flex flex-col items-center p-8">
      <PlaylistView playlistId={location.pathname.substring(1)} />
    </div>
  );
}
