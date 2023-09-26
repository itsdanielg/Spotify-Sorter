import { useContext } from "react";
import { DragDropContext, Droppable, DropResult } from "@hello-pangea/dnd";
import { PlaylistContext } from "../../Playlist";
import { DraggablePlaylistTrack } from "./DraggablePlaylistTrack";

export function PlaylistViewTracks() {
  const {
    playlistHook: { moveTrack, playlist }
  } = useContext(PlaylistContext);

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
            {playlist.map(({ id, index, track, rearranged }) => (
              <DraggablePlaylistTrack
                key={id}
                id={id}
                index={index}
                track={track}
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
