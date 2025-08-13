import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import Table from "../../../components/Dashboard/Table/Table";

const tableColumns = [
  { header: "ID Turno", key: "id" },
  { header: "Cliente", key: "client" },
  { header: "Fecha", key: "date" },
  { header: "Hora", key: "time" },
  { header: "Productos declarados", key: "declaredProducts" },
  { header: "Estado", key: "status" },
];

export default function PendingPage() {
  const rows: [] = [];

  return (
    <DashboardLayout title="Productos / Pendientes">
      <div className="flex flex-col gap-3">
        <Table columns={tableColumns} data={rows} />
      </div>
    </DashboardLayout>
  );
}