import { useContext } from "react";
import { Button } from "../../../Atoms";
import { LabeledSwitch } from "../../../Compounds";
import { PlaylistContext } from "../Playlist";

export function PlaylistBar() {
  const {
    playlistHook: { playlist, isModified, cancelChanges, saveChanges },
    isCompact,
    currentSort,
    setIsCompact,
    setCurrentSort
  } = useContext(PlaylistContext);

  return (
    <div className="flex gap-4 w-full md:w-[50rem] p-4 bg-gray-3">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row md:gap-6">
          <span className="text-white">
            Total Tracks:
            <span className="font-bold text-green">{` ${playlist.length}`}</span>
          </span>
          <span className="text-white">
            Current Sort:
            <span className="font-bold text-green">{` ${currentSort}`}</span>
          </span>
        </div>
        <LabeledSwitch
          label="Compact View"
          checked={isCompact}
          setChecked={setIsCompact}
        />
      </div>
      <div className="flex flex-col md:flex-row gap-2 ml-auto">
        <Button
          label="Cancel Changes"
          disabled={!isModified}
          onClick={() => {
            setCurrentSort("");
            cancelChanges();
          }}
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
