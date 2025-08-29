import DashboardLayout from "../../../components/Dashboard/AdminDashboard";
import Table from "../../../components/Dashboard/Table/Table";
import {
  Appointment,
  AppointmentStatus,
} from "../../../interfaces/Appointment";

// Manejadores de acciones
const handleStatusClick = (appointment: Appointment) => {
  console.log("Cambiar estado de:", appointment);
  // Aquí podrías abrir un modal o llamar a la API para cambiar el estado
};

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

export default function ReceptionsPage() {
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
      type: "Habilitación de inventario externo",
      state: AppointmentStatus.RECEIVED,
      userId: "user2",
      user: {
        name: "Alberto",
      },
    },
  ];

  return (
    <DashboardLayout title="Recepciones">
      <div className="flex flex-col gap-3">
        <Table columns={tableColumns} data={rows} />
      </div>
    </DashboardLayout>
  );
}
