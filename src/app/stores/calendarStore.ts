import { create } from "zustand";

interface CalendarState {
  selectedDate: Date | null;
  aiSuggestions: string[];
  setSelectedDate: (date: Date | null) => void;
}

export const useCalendarStore = create<CalendarState>((set) => ({
  selectedDate: new Date(),
  aiSuggestions: ["09:00", "11:00", "15:30"],
  setSelectedDate: (date) => set({ selectedDate: date }),
}));
