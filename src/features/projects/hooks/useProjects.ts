import { create } from 'zustand';
import { Project, Task } from '../../../types';

interface ProjectsStore {
  projects: Project[];
  addProject: (project: Omit<Project, 'id' | 'progress' | 'tasks'>) => void;
  addTaskToProject: (projectId: string, task: Omit<Task, 'id' | 'completed' | 'createdAt'>) => void;
  updateProjectProgress: (projectId: string) => void;
}

export const useProjects = create<ProjectsStore>((set) => ({
  projects: [],
  addProject: (project) =>
    set((state) => ({
      projects: [
        ...state.projects,
        {
          ...project,
          id: crypto.randomUUID(),
          progress: 0,
          tasks: [],
        },
      ],
    })),
  addTaskToProject: (projectId, task) =>
    set((state) => ({
      projects: state.projects.map((p) =>
        p.id === projectId
          ? {
              ...p,
              tasks: [
                ...p.tasks,
                {
                  ...task,
                  id: crypto.randomUUID(),
                  completed: false,
                  createdAt: new Date(),
                },
              ],
            }
          : p
      ),
    })),
  updateProjectProgress: (projectId) =>
    set((state) => ({
      projects: state.projects.map((p) => {
        if (p.id === projectId) {
          const completedTasks = p.tasks.filter((t) => t.completed).length;
          const progress = (completedTasks / p.tasks.length) * 100;
          return { ...p, progress };
        }
        return p;
      }),
    })),
}));