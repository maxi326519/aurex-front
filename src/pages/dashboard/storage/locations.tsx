import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import Table from "../../../components/Dashboard/Table/Table";

const tableColumns = [
  { header: "ID Posición", key: "id" },
  { header: "Dimensiones (cm)", key: "dimensions" },
  { header: "Capacidad estimada", key: "capacity" },
  { header: "Cantidad permitida", key: "maxQuantity" },
  { header: "Productos asignados", key: "assignedProducts" },
  { header: "Espacio disponible", key: "availableSpace" },
];

export default function LocationsPage() {
  const rows: [] = [];

  return (
    <DashboardLayout title="Almacén / Ubicaciones">
      <div className="flex flex-col gap-3">
        <Table columns={tableColumns} data={rows} />
      </div>
    </DashboardLayout>
  );
}
