import Table from "../../components/Dashboard/Table/Table";
import DashboardLayout from "../../components/Dashboard/DashboardLayout";

const tableColumns = [
  { header: "ID", key: "id" },
  { header: "Nombre", key: "name" },
  { header: "Email", key: "email" },
  { header: "Rol", key: "role" },
  { header: "Último acceso", key: "lastAccess" },
  { header: "Estado", key: "status" },
];

export default function UsersPage() {
  const rows: [] = [];

  return (
    <DashboardLayout title="Usuarios">
      <div className="flex flex-col gap-3">
        <Table columns={tableColumns} data={rows} />
      </div>
    </DashboardLayout>
  );
}