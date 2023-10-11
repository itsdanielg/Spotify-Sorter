import { PlaylistViewTracks } from "./PlaylistViewTracks";
import { PlaylistViewHeader } from "./PlaylistViewHeader/PlaylistViewHeader";

export function PlaylistView() {
  return (
    <div className="flex flex-col items-center gap-2 w-full md:w-5/6">
      <PlaylistViewHeader />
      <PlaylistViewTracks />
    </div>
  );
}
