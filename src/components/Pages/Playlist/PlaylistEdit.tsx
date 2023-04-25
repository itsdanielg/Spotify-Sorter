import { Dispatch, SetStateAction } from "react";
import { Button } from "../../Atoms/Button";
import { LoadingAnimation } from "../../Atoms/LoadingAnimation";
import { LabeledToggle } from "../../Compounds/LabeledToggle";

export interface PlaylistEditProps {
  totalTracks: number;
  isLoading: boolean;
  isModified: boolean;
  isCompact: boolean;
  setIsCompact: Dispatch<SetStateAction<boolean>>;
  cancelChanges: () => void;
  saveChanges: () => void;
}

export function PlaylistEdit({
  totalTracks,
  isLoading,
  isModified,
  isCompact,
  setIsCompact,
  cancelChanges,
  saveChanges
}: PlaylistEditProps) {
  return (
    <div className="flex items-center gap-4 bg-gray-3 w-[60%] p-4">
      <span className="text-gray-1">
        Total Tracks:
        <span className="font-bold">{` ${totalTracks}`}</span>
      </span>
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
      <LabeledToggle
        label="Compact View"
        checked={isCompact}
        setChecked={setIsCompact}
      />
      {isLoading && (
        <div className="w-12 ml-auto">
          <LoadingAnimation width="w-full" />
        </div>
      )}
    </div>
  );
}
