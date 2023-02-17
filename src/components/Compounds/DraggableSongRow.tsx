import { Song } from "../../types/index.t";
import { DraggableRow } from "../Atoms/DraggableRow";
import { SongRow } from "../Atoms/SongRow";

export interface DraggableSongRowProps {
  id: string;
  index: number;
  song: Song;
  leftChanged: boolean;
  rightChanged: boolean;
  rearranged: boolean;
}

export function DraggableSongRow({ id, index, song, leftChanged, rightChanged, rearranged }: DraggableSongRowProps) {
  return (
    <DraggableRow
      draggableId={id}
      index={index}>
      <SongRow
        key={id}
        index={index}
        song={song}
        leftChanged={!!leftChanged}
        rightChanged={!!rightChanged}
        rearranged={!!rearranged}
      />
    </DraggableRow>
  );
}
