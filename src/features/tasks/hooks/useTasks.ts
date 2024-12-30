import { create } from 'zustand';
import { Task } from '../../../types';

interface TasksStore {
  tasks: Task[];
  addTask: (task: Omit<Task, 'id' | 'completed' | 'createdAt'>) => void;
  toggleTask: (id: string) => void;
  updateTaskPriority: (id: string, priority: Task['priority']) => void;
  reorderTasks: (tasks: Task[]) => void;
}

export const useTasks = create<TasksStore>((set) => ({
  tasks: [],
  addTask: (task) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        {
          ...task,
          id: crypto.randomUUID(),
          completed: false,
          createdAt: new Date(),
        },
      ],
    })),
  toggleTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      ),
    })),
  updateTaskPriority: (id, priority) =>
    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === id ? { ...t, priority } : t
      ),
    })),
  reorderTasks: (tasks) => set({ tasks }),
}));