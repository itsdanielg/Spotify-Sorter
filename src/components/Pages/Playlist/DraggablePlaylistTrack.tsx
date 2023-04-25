import { Track } from "../../../types";
import { DraggableRow } from "../../Compounds/DraggableRow";
import { PlaylistTrack } from "./PlaylistTrack";
import { PlaylistTrackCompact } from "./PlaylistTrackCompact";

export interface DraggablePlaylistTrackProps {
  id: string;
  index: number;
  track: Track;
  isCompact: boolean;
  rearranged: boolean;
}

export function DraggablePlaylistTrack({ id, index, track, isCompact, rearranged }: DraggablePlaylistTrackProps) {
  return (
    <DraggableRow
      draggableId={id}
      index={index}>
      {isCompact ? (
        <PlaylistTrackCompact
          key={id}
          index={index}
          track={track}
          rearranged={!!rearranged}
        />
      ) : (
        <PlaylistTrack
          key={id}
          index={index}
          track={track}
          rearranged={!!rearranged}
        />
      )}
    </DraggableRow>
  );
}
