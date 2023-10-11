import { useContext } from "react";
import { DropResult, DragDropContext, Droppable } from "@hello-pangea/dnd";
import { PlaylistTracksContext } from "@/context";
import { DraggablePlaylistTrack } from "./DraggablePlaylistTrack";

export function PlaylistViewTracks() {
  const {
    playlistHook: { moveTrack, playlistTracks }
  } = useContext(PlaylistTracksContext);

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
            {playlistTracks.map(({ id, rearranged, ...props }) => (
              <DraggablePlaylistTrack
                key={id}
                id={id}
                rearranged={!!rearranged}
                {...props}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
