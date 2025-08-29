import { User } from "./Users";

export interface Appointment {
  id?: string;
  date: Date;
  type: string; // "Deposito de inventario" / "Habilitación de inventario externo"
  state: AppointmentStatus;
  userId?: string;
  user?: Partial<User>;
}

export enum AppointmentStatus {
  PENDING = "Pendiente",
  RECEIVED = "Recibido",
  PICKED = "Pickeado",
  IN_REVIEW = "En revisión",
  COMPLETED = "Completado",
}
