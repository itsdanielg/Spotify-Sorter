import { Dispatch, SetStateAction } from "react";

interface HeaderCellProps {
  label: string;
  currentSort: string;
  setCurrentSort: Dispatch<SetStateAction<string>>;
  sortPlaylist: (field: string) => void;
  width?: string;
  textAlignment?: string;
}

export function HeaderCell({
  label,
  currentSort,
  setCurrentSort,
  sortPlaylist,
  width = "w-[5%]",
  textAlignment = ""
}: HeaderCellProps) {
  const currentSortStyle = label === currentSort ? "bg-green-1" : "";

  const sortByLabel = () => {
    setCurrentSort(label);
    sortPlaylist(label);
  };
  return (
    <button
      className={`${width} ${textAlignment} ${currentSortStyle} p-4 hover:bg-green-1 transition-all duration-300`}
      onClick={() => sortByLabel()}>
      {label}
    </button>
  );
}
