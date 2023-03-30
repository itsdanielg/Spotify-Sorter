import { Button } from "../../Atoms/Button";
import { LoadingAnimation } from "../../Atoms/LoadingAnimation";

export interface PlaylistEditProps {
  totalTracks: number;
  isLoading: boolean;
  isModified: boolean;
  // sortPlaylist: () => void;
  cancelChanges: () => void;
  saveChanges: () => void;
}

export function PlaylistEdit({
  totalTracks,
  isLoading,
  isModified,
  // sortPlaylist,
  cancelChanges,
  saveChanges
}: PlaylistEditProps) {
  return (
    <div className="flex items-center gap-4 bg-gray-3 w-[60%] p-4">
      <span className="text-gray-1">
        Total Tracks:
        <span className="font-bold">{` ${totalTracks}`}</span>
      </span>
      {/* <Button
        label="Sort By Release Date"
        onClick={() => sortPlaylist()}
      /> */}
      <Button
        label="Cancel Changes"
        disabled={!isModified}
        onClick={() => cancelChanges()}
      />
      <Button
        label="Save Changes"
        disabled={!isModified}
        onClick={() => saveChanges()}
      />
      {isLoading && (
        <div className="w-12 ml-auto">
          <LoadingAnimation width="w-full" />
        </div>
      )}
    </div>
  );
}
