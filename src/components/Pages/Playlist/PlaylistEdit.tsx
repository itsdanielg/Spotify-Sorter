import { Dispatch, SetStateAction, useRef } from "react";
import { Button } from "../../Atoms/Button";
import { LabeledToggle } from "../../Compounds/LabeledToggle";
import { SavePlaylistSnackbar, SavePlaylistSnackbarRef } from "../../Compounds/SavePlaylistSnackbar";

export interface PlaylistEditProps {
  totalTracks: number;
  currentSort: string;
  isSaving: boolean;
  isModified: boolean;
  isCompact: boolean;
  setCurrentSort: Dispatch<SetStateAction<string>>;
  setIsCompact: Dispatch<SetStateAction<boolean>>;
  cancelChanges: () => void;
  saveChanges: () => void;
}

export function PlaylistEdit({
  totalTracks,
  currentSort,
  isSaving,
  isModified,
  isCompact,
  setIsCompact,
  setCurrentSort,
  cancelChanges,
  saveChanges
}: PlaylistEditProps) {
  const snackbarRef = useRef<SavePlaylistSnackbarRef>(null);

  const cancelPlaylistChanges = () => {
    setCurrentSort("");
    cancelChanges();
  };

  const savePlaylistChanges = () => {
    saveChanges();
    snackbarRef?.current?.show();
  };

  return (
    <div className="flex gap-4 w-full md:w-[60%] p-4 bg-gray-3">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row md:gap-8">
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
      <div className="flex flex-col md:flex-row gap-2 ml-auto">
        <Button
          label="Cancel Changes"
          disabled={!isModified}
          onClick={() => cancelPlaylistChanges()}
        />
        <Button
          label="Save Changes"
          disabled={!isModified}
          onClick={() => savePlaylistChanges()}
        />
      </div>
      <SavePlaylistSnackbar
        ref={snackbarRef}
        isSaving={isSaving}
        label={"Saving complete!"}
      />
    </div>
  );
}
