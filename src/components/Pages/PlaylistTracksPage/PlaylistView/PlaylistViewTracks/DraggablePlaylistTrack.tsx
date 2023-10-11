import { PlaylistTrack } from "@/types";
import { DraggableRow } from "@/components/Compounds";
import { PlaylistViewTrack } from "./PlaylistViewTrack";

export function DraggablePlaylistTrack({ id, index, ...props }: PlaylistTrack) {
  return (
    <DraggableRow
      draggableId={id}
      index={index}>
      <PlaylistViewTrack
        key={id}
        index={index}
        {...props}
      />
    </DraggableRow>
  );
}
