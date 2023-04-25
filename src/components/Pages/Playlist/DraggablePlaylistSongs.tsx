import { DragDropContext, Droppable, DropResult } from "@hello-pangea/dnd";
import { PlaylistTrack } from "../../../types";
import { DraggablePlaylistTrack } from "./DraggablePlaylistTrack";

export interface DraggablePlaylistSongsProps {
  playlistSongs: PlaylistTrack[];
  isCompact: boolean;
  moveTrack: (sourceIndex: number, destinationIndex: number) => void;
}

export function DraggablePlaylistSongs({ playlistSongs, isCompact, moveTrack }: DraggablePlaylistSongsProps) {
  const handleOnDragEnd = (draggedCard: DropResult) => {
    if (!draggedCard.destination) return;
    if (draggedCard.source.index === draggedCard.destination.index) return;
    moveTrack(draggedCard.source.index, draggedCard.destination.index);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="playlistSongs">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="flex flex-col items-center w-full">
            {playlistSongs.map(({ id, index, track, rearranged }) => (
              <DraggablePlaylistTrack
                key={id}
                id={id}
                index={index}
                track={track}
                isCompact={isCompact}
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
