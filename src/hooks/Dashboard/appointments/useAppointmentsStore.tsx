import { Appointment } from "../../../interfaces/Appointment";
import { create } from "zustand";

interface AppointmentsState {
  data: Appointment[];
  loading: boolean;
  setAppointments: (appointments: Appointment[]) => void;
  addAppointment: (appointment: Appointment) => void;
  updateAppointment: (appointment: Appointment) => void;
  removeAppointment: (appointmentId: string) => void;
}

export const useAppointmentsStore = create<AppointmentsState>((set) => ({
  data: [],
  loading: false,
  setAppointments: (appointments) => set({ data: appointments }),
  addAppointment: (appointment) =>
    set((state) => ({
      data: [...state.data, appointment],
    })),
  updateAppointment: (appointment) =>
    set((state) => ({
      data: state.data.map((a) => (a.id === appointment.id ? appointment : a)),
    })),
  removeAppointment: (appointmentId) =>
    set((state) => ({
      data: state.data.filter((a) => a.id !== appointmentId),
    })),
}));
