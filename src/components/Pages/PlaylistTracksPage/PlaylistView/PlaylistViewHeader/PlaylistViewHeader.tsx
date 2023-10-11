import { PlaylistViewHeaderCell } from "./PlaylistViewHeaderCell";

export function PlaylistViewHeader() {
  return (
    <div className="sticky top-0 flex items-center w-full h-20 md:rounded-md bg-gray-3 text-white overflow-x-auto md:overflow-hidden">
      <PlaylistViewHeaderCell
        className="md:w-[5%]"
        label="#"
        unsortable
      />
      <PlaylistViewHeaderCell
        className="md:w-[10%]"
        label="Release Date"
      />
      <PlaylistViewHeaderCell
        className="md:w-[35%]"
        label="Title"
      />
      <PlaylistViewHeaderCell
        className="md:w-[15%]"
        label="Artist"
      />
      <PlaylistViewHeaderCell
        className="md:w-[20%]"
        label="Album"
      />
      <PlaylistViewHeaderCell
        className="md:w-[5%]"
        label="Track"
      />
      <PlaylistViewHeaderCell
        className="md:w-[10%]"
        label="Date Added"
      />
    </div>
  );
}
