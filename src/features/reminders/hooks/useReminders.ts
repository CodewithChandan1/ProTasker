import { create } from 'zustand';

interface Reminder {
  id: string;
  title: string;
  datetime: Date;
  location?: string;
  recurring?: 'daily' | 'weekly' | 'monthly';
  completed: boolean;
}

interface RemindersStore {
  reminders: Reminder[];
  addReminder: (reminder: Omit<Reminder, 'id' | 'completed'>) => void;
  toggleReminder: (id: string) => void;
  deleteReminder: (id: string) => void;
}

export const useReminders = create<RemindersStore>((set) => ({
  reminders: [],
  addReminder: (reminder) =>
    set((state) => ({
      reminders: [
        ...state.reminders,
        { ...reminder, id: crypto.randomUUID(), completed: false },
      ],
    })),
  toggleReminder: (id) =>
    set((state) => ({
      reminders: state.reminders.map((r) =>
        r.id === id ? { ...r, completed: !r.completed } : r
      ),
    })),
  deleteReminder: (id) =>
    set((state) => ({
      reminders: state.reminders.filter((r) => r.id !== id),
    })),
}));