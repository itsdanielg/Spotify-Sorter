import { Dispatch, SetStateAction } from "react";

interface HeaderCellProps {
  label: string;
  setCurrentSort: Dispatch<SetStateAction<string>>;
  sortPlaylist: (field: string) => void;
  width?: string;
}

export function HeaderCell({ label, setCurrentSort, sortPlaylist, width = "w-[5%]" }: HeaderCellProps) {
  const sortByLabel = () => {
    setCurrentSort(label);
    sortPlaylist(label);
  };
  return (
    <button
      className={`${width} p-4 hover:bg-green-1 transition-all duration-300`}
      onClick={() => sortByLabel()}>
      {label}
    </button>
  );
}
