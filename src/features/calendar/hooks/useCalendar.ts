import { create } from 'zustand';

interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  location?: string;
}

interface CalendarStore {
  events: CalendarEvent[];
  isAuthenticated: boolean;
  setAuthenticated: (status: boolean) => void;
  addEvent: (event: Omit<CalendarEvent, 'id'>) => void;
  removeEvent: (id: string) => void;
}

export const useCalendar = create<CalendarStore>((set) => ({
  events: [],
  isAuthenticated: false,
  setAuthenticated: (status) => set({ isAuthenticated: status }),
  addEvent: (event) =>
    set((state) => ({
      events: [...state.events, { ...event, id: crypto.randomUUID() }],
    })),
  removeEvent: (id) =>
    set((state) => ({
      events: state.events.filter((e) => e.id !== id),
    })),
}));