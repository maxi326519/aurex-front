import DashboardLayout from "../../../components/Dashboard/AdminDashboard";
import Table from "../../../components/Dashboard/Table/Table";

const tableColumns = [
  { header: "Vendedor", key: "sellerName" },
  { header: "Estado", key: "status" },
];

export default function OrdersPage() {
  const rows: [] = [];

  return (
    <DashboardLayout title="Usuarios">
      <div className="flex flex-col gap-3">
        <Table columns={tableColumns} data={rows} />
      </div>
    </DashboardLayout>
  );
}
