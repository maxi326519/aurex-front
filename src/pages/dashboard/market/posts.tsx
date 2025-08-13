import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import Table from "../../../components/Dashboard/Table/Table";

const tableColumns = [
  { header: "ID Publicación", key: "id" },
  { header: "Título", key: "title" },
  { header: "SKU", key: "sku" },
  { header: "Cliente", key: "client" },
  { header: "Precio", key: "price" },
  { header: "Stock", key: "stock" },
  { header: "Estado", key: "status" },
  { header: "Clicks", key: "clicks" },
  { header: "Ventas", key: "sales" },
];

export default function MarketPostsPage() {
  const rows: [] = [];

  return (
    <DashboardLayout title="Tienda / Publicaciones">
      <div className="flex flex-col gap-3">
        <Table columns={tableColumns} data={rows} />
      </div>
    </DashboardLayout>
  );
}