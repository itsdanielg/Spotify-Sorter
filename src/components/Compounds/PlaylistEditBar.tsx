import { Button } from "../Atoms/Button";

export interface PlaylistEditBarProps {
  totalTracks: number;
}

export function PlaylistEditBar({ totalTracks }: PlaylistEditBarProps) {
  return (
    <div className="flex items-center gap-4 bg-stone-500 w-[80%] p-4">
      <span className="text-neutral-200">
        Total Tracks:
        <span className="font-bold">{` ${totalTracks}`}</span>
      </span>
      <Button
        label="Sort By Release Date"
        onClick={() => alert("sorting")}
      />
      <Button
        label="Save Changes"
        disabled
        onClick={() => alert("sorting")}
      />
    </div>
  );
}
