import { Song } from "../../types";
import { DraggableRow } from "../Atoms/DraggableRow";
import { SongRow } from "../Atoms/SongRow";

export interface DraggableSongRowProps {
  id: string;
  index: number;
  song: Song;
  rearranged: boolean;
}

export function DraggableSongRow({ id, index, song, rearranged }: DraggableSongRowProps) {
  return (
    <DraggableRow
      draggableId={id}
      index={index}>
      <SongRow
        key={id}
        index={index}
        song={song}
        rearranged={!!rearranged}
      />
    </DraggableRow>
  );
}
