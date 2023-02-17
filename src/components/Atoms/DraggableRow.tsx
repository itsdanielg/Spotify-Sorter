import { Draggable } from "@hello-pangea/dnd";

export interface DraggableRowProps {
  draggableId: string;
  index: number;
  children: JSX.Element | JSX.Element[];
}

export function DraggableRow({ draggableId, index, children }: DraggableRowProps) {
  return (
    <Draggable
      draggableId={draggableId}
      index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="w-full">
          {children}
        </div>
      )}
    </Draggable>
  );
}
