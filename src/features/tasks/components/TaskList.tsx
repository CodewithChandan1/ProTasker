import { DndContext, closestCenter, DragEndEvent } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical, CheckSquare, Square } from "lucide-react";
import { useTasks } from "../hooks/useTasks";

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
}

function TaskItem({ task, onToggle }: TaskItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm"
    >
      <button {...listeners} {...attributes}>
        <GripVertical className="h-5 w-5 text-gray-400" />
      </button>
      <button onClick={() => onToggle(task.id)}>
        {task.completed ? (
          <CheckSquare className="h-5 w-5 text-green-500" />
        ) : (
          <Square className="h-5 w-5 text-gray-400" />
        )}
      </button>
      <span className={task.completed ? "line-through text-gray-500" : ""}>
        {task.title}
      </span>
      <span
        className={`ml-auto px-2 py-1 rounded text-xs ${
          task.priority === "high"
            ? "bg-red-100 text-red-800"
            : task.priority === "medium"
            ? "bg-yellow-100 text-yellow-800"
            : "bg-green-100 text-green-800"
        }`}
      >
        {task.priority}
      </span>
    </div>
  );
}

export function TaskList() {
  const { tasks, toggleTask, reorderTasks } = useTasks();

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = tasks.findIndex((t) => t.id === active.id);
      const newIndex = tasks.findIndex((t) => t.id === over.id);

      const newTasks = [...tasks];
      const [movedTask] = newTasks.splice(oldIndex, 1);
      newTasks.splice(newIndex, 0, movedTask);

      reorderTasks(newTasks);
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        <div className="space-y-2">
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} onToggle={toggleTask} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}
