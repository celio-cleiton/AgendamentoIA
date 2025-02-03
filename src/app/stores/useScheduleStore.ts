import { create } from "zustand";

interface Appointment {
  id: string;
  date: string;
  time: string;
  client: string;
}

interface ScheduleState {
  appointments: Appointment[];
  addAppointment: (appointment: Appointment) => void;
  removeAppointment: (id: string) => void;
}

export const useScheduleStore = create<ScheduleState>((set) => ({
  appointments: [],
  addAppointment: (appointment) =>
    set((state) => ({ appointments: [...state.appointments, appointment] })),
  removeAppointment: (id) =>
    set((state) => ({
      appointments: state.appointments.filter((a) => a.id !== id),
    })),
}));
