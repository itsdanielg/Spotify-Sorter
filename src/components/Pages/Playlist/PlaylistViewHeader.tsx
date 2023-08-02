import { Dispatch, SetStateAction } from "react";
import { HeaderCell } from "./HeaderCell";

interface PlaylistViewHeaderProps {
  setCurrentSort: Dispatch<SetStateAction<string>>;
  sortPlaylist: (field: string) => void;
}

export function PlaylistViewHeader({ setCurrentSort, sortPlaylist }: PlaylistViewHeaderProps) {
  return (
    <div className="sticky top-0 flex items-center w-full h-20 rounded-md bg-gray-3 text-white overflow-x-auto md:overflow-hidden">
      <div className="md:w-[5%] p-4 text-center select-none">#</div>
      <HeaderCell
        label="Release Date"
        setCurrentSort={setCurrentSort}
        sortPlaylist={sortPlaylist}
        width="md:w-[10%]"
      />
      <HeaderCell
        label="Title"
        setCurrentSort={setCurrentSort}
        sortPlaylist={sortPlaylist}
        width="md:w-[35%]"
      />
      <HeaderCell
        label="Artist"
        setCurrentSort={setCurrentSort}
        sortPlaylist={sortPlaylist}
        width="md:w-[15%]"
      />
      <HeaderCell
        label="Album"
        setCurrentSort={setCurrentSort}
        sortPlaylist={sortPlaylist}
        width="md:w-[20%]"
      />
      <HeaderCell
        label="Track"
        setCurrentSort={setCurrentSort}
        sortPlaylist={sortPlaylist}
        width="md:w-[5%]"
      />
      <HeaderCell
        label="Date Added"
        setCurrentSort={setCurrentSort}
        sortPlaylist={sortPlaylist}
        width="md:w-[10%]"
      />
    </div>
  );
}
