export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  dueDate?: Date;
  tags: string[];
  createdAt: Date;
}

export interface Note {
  id: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  tasks: Task[];
  progress: number;
  dueDate: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}