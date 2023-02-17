import { Button } from "../Atoms/Button";
import { Loading } from "../Atoms/Loading";

export interface PlaylistEditBarProps {
  totalTracks: number;
  isChanged: boolean;
  sortPlaylist: () => void;
  resetChanges: () => void;
  loading: boolean;
}

export function PlaylistEditBar({ totalTracks, isChanged, sortPlaylist, resetChanges, loading }: PlaylistEditBarProps) {
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
        onClick={() => alert("sorting")}
      />
      {loading && <Loading />}
    </div>
  );
}
