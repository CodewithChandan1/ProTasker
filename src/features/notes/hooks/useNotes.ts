import { create } from 'zustand';

interface Note {
  id: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

interface NotesStore {
  notes: Note[];
  addNote: (note: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateNote: (id: string, note: Partial<Note>) => void;
  deleteNote: (id: string) => void;
}

export const useNotes = create<NotesStore>((set) => ({
  notes: [],
  addNote: (note) =>
    set((state) => ({
      notes: [
        ...state.notes,
        {
          ...note,
          id: crypto.randomUUID(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
    })),
  updateNote: (id, note) =>
    set((state) => ({
      notes: state.notes.map((n) =>
        n.id === id ? { ...n, ...note, updatedAt: new Date() } : n
      ),
    })),
  deleteNote: (id) =>
    set((state) => ({
      notes: state.notes.filter((n) => n.id !== id),
    })),
}));