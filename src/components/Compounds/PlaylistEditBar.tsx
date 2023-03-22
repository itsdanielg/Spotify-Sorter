import { Button } from "../Atoms/Button";
import { Loading } from "../Atoms/Loading";

export interface PlaylistEditBarProps {
  totalTracks: number;
  loading: boolean;
  isChanged: boolean;
  sortPlaylist: () => void;
  resetChanges: () => void;
  saveChanges: () => void;
}

export function PlaylistEditBar({
  totalTracks,
  loading,
  isChanged,
  sortPlaylist,
  resetChanges,
  saveChanges
}: PlaylistEditBarProps) {
  return (
    <div className="flex items-center gap-4 bg-gray-3 w-[60%] p-4">
      <span className="text-gray-1">
        Total Tracks:
        <span className="font-bold">{` ${totalTracks}`}</span>
      </span>
      <Button
        label="Sort By Release Date"
        onClick={() => sortPlaylist()}
      />
      <Button
        label="Cancel Changes"
        disabled={!isChanged}
        onClick={() => resetChanges()}
      />
      <Button
        label="Save Changes"
        disabled={!isChanged}
        onClick={() => saveChanges()}
      />
      {loading && <Loading />}
    </div>
  );
}
