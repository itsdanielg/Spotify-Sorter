import { Track } from "../../../types";
import { DraggableRow } from "../../Compounds/DraggableRow";
import { SongRow } from "./SongRow";

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
      <SongRow
        key={id}
        index={index}
        track={track}
        rearranged={!!rearranged}
      />
    </DraggableRow>
  );
}
