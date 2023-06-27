import { Dispatch, SetStateAction } from "react";
import { Button } from "../../Atoms/Button";
import { LabeledToggle } from "../../Compounds/LabeledToggle";

export interface PlaylistEditProps {
  totalTracks: number;
  currentSort: string;
  isModified: boolean;
  isCompact: boolean;
  setIsCompact: Dispatch<SetStateAction<boolean>>;
  cancelChanges: () => void;
  saveChanges: () => void;
}

export function PlaylistEdit({
  totalTracks,
  currentSort,
  isModified,
  isCompact,
  setIsCompact,
  cancelChanges,
  saveChanges
}: PlaylistEditProps) {
  return (
    <div className="flex gap-4 bg-gray-3 w-[60%] p-4">
      <div className="flex flex-col gap-4">
        <div className="flex gap-8">
          <span className="text-white-1">
            Total Tracks:
            <span className="font-bold text-green-1">{` ${totalTracks}`}</span>
          </span>
          <span className="text-white-1">
            Current Sort:
            <span className="font-bold text-green-1">{` ${currentSort}`}</span>
          </span>
        </div>
        <div className="flex gap-2">
          <LabeledToggle
            label="Compact View"
            checked={isCompact}
            setChecked={setIsCompact}
          />
        </div>
      </div>
      <div className="flex gap-2 ml-auto">
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
      </div>
    </div>
  );
}
