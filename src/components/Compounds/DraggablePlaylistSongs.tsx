import { DragDropContext, Droppable, DropResult } from "@hello-pangea/dnd";
import { PlaylistSong } from "../../types/index.t";
import { DraggableSongRow } from "./DraggableSongRow";

export interface DraggablePlaylistSongsProps {
  playlistSongs: PlaylistSong[];
  moveSong: (sourceIndex: number, destinationIndex: number) => void;
}

export function DraggablePlaylistSongs({ playlistSongs, moveSong }: DraggablePlaylistSongsProps) {
  const handleOnDragEnd = (draggedCard: DropResult) => {
    if (!draggedCard.destination) return;
    if (draggedCard.source.index === draggedCard.destination.index) return;
    moveSong(draggedCard.source.index, draggedCard.destination.index);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="playlistSongs">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="flex flex-col items-center">
            {playlistSongs.map(({ id, index, song, leftChanged, rightChanged, rearranged }) => (
              <DraggableSongRow
                key={id}
                id={id}
                index={index}
                song={song}
                leftChanged={!!leftChanged}
                rightChanged={!!rightChanged}
                rearranged={!!rearranged}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
