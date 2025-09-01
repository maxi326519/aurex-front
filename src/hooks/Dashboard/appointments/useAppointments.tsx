import { useAppointmentsStore } from "./useAppointmentsStore";
import { Appointment } from "../../../interfaces/Appointment";
import axios from "axios";
import Swal from "sweetalert2";

export interface UseAppointments {
  data: Appointment[];
  create: (appointment: Appointment) => Promise<Appointment>;
  get: () => Promise<void>;
  update: (appointment: Appointment) => Promise<void>;
  remove: (appointmentId: string) => Promise<void>;
}

export default function useAppointments(): UseAppointments {
  const { data, setAppointments, addAppointment, updateAppointment, removeAppointment } = useAppointmentsStore();

  // Appointment API functions
  const postAppointment = async (appointment: Appointment): Promise<Appointment> => {
    const response = await axios.post("/appointments", appointment);
    return response.data;
  };

  const getAppointments = async (): Promise<Appointment[]> => {
    const response = await axios.get("/appointments");
    return response.data;
  };

  const updateAppointmentAPI = async (appointment: Appointment): Promise<Appointment> => {
    await axios.patch("/appointments", appointment);
    return appointment;
  };

  const deleteAppointmentAPI = async (appointmentId: string): Promise<void> => {
    await axios.delete(`/appointments/${appointmentId}`);
  };

  // Appointment operations
  async function createAppointment(appointment: Appointment): Promise<Appointment> {
    try {
      const newAppointment = await postAppointment(appointment);
      addAppointment(newAppointment);
      Swal.fire("Created", "Successfully created appointment", "success");
      return newAppointment;
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Error to create the appointment, try later", "error");
      throw error;
    }
  }

  async function getAllAppointments(): Promise<void> {
    try {
      const appointments = await getAppointments();
      setAppointments(appointments);
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Error to get the appointments, try later", "error");
      throw error;
    }
  }

  async function updateAppointmentById(appointment: Appointment): Promise<void> {
    try {
      await updateAppointmentAPI(appointment);
      updateAppointment(appointment);
      Swal.fire("Updated", "Successfully updated appointment", "success");
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Error to update the appointment, try later", "error");
      throw error;
    }
  }

  async function removeAppointmentById(appointmentId: string): Promise<void> {
    try {
      await deleteAppointmentAPI(appointmentId);
      removeAppointment(appointmentId);
      Swal.fire("Deleted", "Successfully deleted appointment", "success");
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Error to delete the appointment, try later", "error");
      throw error;
    }
  }

  return {
    data,
    create: createAppointment,
    get: getAllAppointments,
    update: updateAppointmentById,
    remove: removeAppointmentById,
  };
}
