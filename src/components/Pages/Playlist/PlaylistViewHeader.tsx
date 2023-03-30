import { useState } from "react";
import { HeaderCell } from "./HeaderCell";

interface PlaylistViewHeaderProps {
  sortPlaylist: (field: string) => void;
}

export function PlaylistViewHeader({ sortPlaylist }: PlaylistViewHeaderProps) {
  const [currentSort, setCurrentSort] = useState("");

  return (
    <div className="sticky top-0 flex items-center w-full rounded-md bg-gray-3 text-white-1 overflow-hidden">
      <HeaderCell
        label="#"
        currentSort={currentSort}
        setCurrentSort={setCurrentSort}
        sortPlaylist={sortPlaylist}
        textAlignment="text-center"
      />
      <HeaderCell
        label="Release Date"
        currentSort={currentSort}
        setCurrentSort={setCurrentSort}
        sortPlaylist={sortPlaylist}
        width="w-[10%]"
        textAlignment="text-center"
      />
      <HeaderCell
        label="Title"
        currentSort={currentSort}
        setCurrentSort={setCurrentSort}
        sortPlaylist={sortPlaylist}
        width="w-[35%]"
      />
      <HeaderCell
        label="Artist"
        currentSort={currentSort}
        setCurrentSort={setCurrentSort}
        sortPlaylist={sortPlaylist}
        width="w-[15%]"
      />
      <HeaderCell
        label="Album"
        currentSort={currentSort}
        setCurrentSort={setCurrentSort}
        sortPlaylist={sortPlaylist}
        width="w-[20%]"
      />
      <HeaderCell
        label="Track"
        currentSort={currentSort}
        setCurrentSort={setCurrentSort}
        sortPlaylist={sortPlaylist}
      />
      <HeaderCell
        label="Date Added"
        currentSort={currentSort}
        setCurrentSort={setCurrentSort}
        sortPlaylist={sortPlaylist}
        width="w-[10%]"
        textAlignment="text-center"
      />
    </div>
  );
}
