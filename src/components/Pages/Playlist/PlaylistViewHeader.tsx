import { Dispatch, SetStateAction } from "react";
import { HeaderCell } from "./HeaderCell";

interface PlaylistViewHeaderProps {
  setCurrentSort: Dispatch<SetStateAction<string>>;
  sortPlaylist: (field: string) => void;
}

export function PlaylistViewHeader({ setCurrentSort, sortPlaylist }: PlaylistViewHeaderProps) {
  return (
    <div className="sticky top-0 flex items-center w-full rounded-md bg-gray-3 text-white-1 overflow-hidden">
      <div className="w-[5%] p-4 text-center select-none">#</div>
      <HeaderCell
        label="Release Date"
        setCurrentSort={setCurrentSort}
        sortPlaylist={sortPlaylist}
        width="w-[10%]"
      />
      <HeaderCell
        label="Title"
        setCurrentSort={setCurrentSort}
        sortPlaylist={sortPlaylist}
        width="w-[35%]"
      />
      <HeaderCell
        label="Artist"
        setCurrentSort={setCurrentSort}
        sortPlaylist={sortPlaylist}
        width="w-[15%]"
      />
      <HeaderCell
        label="Album"
        setCurrentSort={setCurrentSort}
        sortPlaylist={sortPlaylist}
        width="w-[20%]"
      />
      <HeaderCell
        label="Track"
        setCurrentSort={setCurrentSort}
        sortPlaylist={sortPlaylist}
      />
      <HeaderCell
        label="Date Added"
        setCurrentSort={setCurrentSort}
        sortPlaylist={sortPlaylist}
        width="w-[10%]"
      />
    </div>
  );
}
