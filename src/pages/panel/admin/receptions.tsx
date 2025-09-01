import { Eye } from "lucide-react";
import DashboardLayout from "../../../components/Dashboard/AdminDashboard";
import Table from "../../../components/Dashboard/Table/Table";
import {
  Appointment,
  AppointmentStatus,
} from "../../../interfaces/Appointment";
import Modal from "../../../components/Modal";
import { useState } from "react";
import { Product } from "../../../interfaces/Product";

export default function ReceptionsPage() {
  const [openModal, setOpenModal] = useState(false);

  const rows: Appointment[] = [
    {
      id: "1",
      date: new Date(),
      type: "Deposito de inventario",
      state: AppointmentStatus.PENDING,
      userId: "user1",
      user: {
        name: "Maximiliano",
      },
    },
    {
      id: "2",
      date: new Date(),
      type: "Ingreso de productos",
      state: AppointmentStatus.RECEIVED,
      userId: "user2",
      user: {
        name: "Alberto",
      },
    },
  ];

  const tableColumns = [
    {
      header: "Vendedor",
      key: "",
      render: (row: Appointment) => <span>{row.user?.name}</span>,
    },
    {
      header: "Fecha",
      key: "date",
      render: (row: Appointment) =>
        new Date(row.date).toLocaleString("es-CO", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
    },
    {
      header: "Tipo",
      key: "type",
    },
    {
      header: "Stock físico",
      key: "physicalStock",
      render: (row: Appointment) => (
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleViewStock()}
            className="p-1 rounded-full border border-gray-300 hover:bg-gray-100 transition"
          >
            <Eye className="h-4 w-4 text-gray-600" />
          </button>
          <span>2 un.</span>
        </div>
      ),
    },
    {
      header: "Remito",
      key: "",
    },
    {
      header: "Estado",
      key: "state",
      render: (row: Appointment) => {
        const statusColors: Record<AppointmentStatus, string> = {
          [AppointmentStatus.PENDING]: "bg-yellow-100 text-yellow-800",
          [AppointmentStatus.RECEIVED]: "bg-blue-100 text-blue-800",
          [AppointmentStatus.PICKED]: "bg-purple-100 text-purple-800",
          [AppointmentStatus.IN_REVIEW]: "bg-orange-100 text-orange-800",
          [AppointmentStatus.COMPLETED]: "bg-green-100 text-green-800",
        };

        return (
          <span
            onClick={() => handleStatusClick(row)}
            className={`cursor-pointer ${statusColors[row.state]}`}
          >
            {row.state}
          </span>
        );
      },
    },
  ];

  const handleViewStock = () => {
    setOpenModal(true);
  };

  // Manejadores de acciones
  const handleStatusClick = (appointment: Appointment) => {
    console.log("Cambiar estado de:", appointment);
    // Aquí podrías abrir un modal o llamar a la API para cambiar el estado
  };

  return (
    <DashboardLayout title="Recepciones">
      <div className="flex flex-col gap-3">
        {openModal && (
          <Modal title="Stock" onClose={() => setOpenModal(false)}>
            <Table
              data={[]}
              columns={[
                {
                  header: "Nombre",
                  key: "location",
                  render: (row: Product) => <span>Producto2</span>,
                },
                {
                  header: "Cantidad",
                  key: "quantity",
                  render: (row: Product) => <span>1</span>,
                },
              ]}
            />
          </Modal>
        )}
        <Table columns={tableColumns} data={rows} />
      </div>
    </DashboardLayout>
  );
}
