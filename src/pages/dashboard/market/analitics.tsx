import Table from "../../../components/Dashboard/Table/Table";
import DashboardLayout from "../../../components/Dashboard/DashboardLayout";

const tableColumns = [
  { header: "ID", key: "id" },
  { header: "Nombre", key: "name" },
  { header: "Email", key: "email" },
  { header: "Teléfono", key: "phone" },
  { header: "Publicaciones", key: "publications" },
  { header: "Estado", key: "status" },
];

export default function AnaliticsPage() {
  const rows: [] = [];

  return (
    <DashboardLayout title="Analíticas">
      <div className="flex flex-col gap-3">
        <Table columns={tableColumns} data={rows} />
      </div>
    </DashboardLayout>
  );
}