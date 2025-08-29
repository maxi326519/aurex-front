import DashboardLayout from "../../../../components/Dashboard/SellerDashboard";
import Table from "../../../../components/Dashboard/Table/Table";

const tableColumns = [
  { header: "EAN", key: "ean", sortable: true },
  { header: "SKU", key: "sku", sortable: true },
  { header: "Nombre", key: "name", sortable: true },
  { header: "Valor declarado", key: "value" },
  { header: "Tipo volumen", key: "volumeType" },
  { header: "Stock físico", key: "physicalStock", sortable: true },
  { header: "Ubicación", key: "location", sortable: true },
];

export default function SellersProductsPage() {
  const rows: [] = [];

  return (
    <DashboardLayout title="Productos / Listado">
      <div className="flex flex-col gap-3">
        <Table columns={tableColumns} data={rows} />
      </div>
    </DashboardLayout>
  );
}
