import { Track } from "../../../../../types";
import { DraggableRow } from "../../../../Compounds";
import { PlaylistTrack } from "./PlaylistTrack";

export interface DraggablePlaylistTrackProps {
  id: string;
  index: number;
  track: Track;
  rearranged: boolean;
}

export function DraggablePlaylistTrack({ id, index, track, rearranged }: DraggablePlaylistTrackProps) {
  return (
    <DraggableRow
      draggableId={id}
      index={index}>
      <PlaylistTrack
        key={id}
        index={index}
        track={track}
        rearranged={!!rearranged}
      />
    </DraggableRow>
  );
}
