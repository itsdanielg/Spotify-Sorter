import { useContext } from "react";
import { twMerge } from "tailwind-merge";
import { PlaylistTracksContext } from "@/context";

interface PlaylistViewHeaderCellProps {
  label: string;
  unsortable?: boolean;
  className?: string;
}

export function PlaylistViewHeaderCell({ label, unsortable = false, className = "" }: PlaylistViewHeaderCellProps) {
  const {
    playlistHook: { sortPlaylist },
    setCurrentSort
  } = useContext(PlaylistTracksContext);

  const sortByLabel = () => {
    setCurrentSort(label);
    sortPlaylist(label);
  };

  const unSortableStyle = unsortable ? "" : "hover:bg-green transition-all duration-300";

  return (
    <button
      className={twMerge("h-full text-center p-4", unSortableStyle, className)}
      onClick={() => sortByLabel()}
      disabled={unsortable}>
      {label}
    </button>
  );
}
