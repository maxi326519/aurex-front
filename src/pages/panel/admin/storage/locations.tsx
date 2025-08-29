import { Storage } from "../../../../interfaces/Storage";

import DashboardLayout from "../../../../components/Dashboard/AdminDashboard";
import Table from "../../../../components/Dashboard/Table/Table";

const tableColumns = [
  { header: "ID Posición", key: "id" },
  {
    header: "Dimensiones (cm)",
    key: "",
    render: (row: Storage) => <span>{row.height * row.width} m²</span>,
  },
  { header: "Capacidad Actual", key: "currentCapacity" },
  { header: "Capacidad estimada", key: "estimatedCapacity" },
  { header: "Cantidad permitida", key: "allowedQuantity" },
  {
    header: "Ocupación",
    key: "",
    render: (row: Storage) => {
      const percentage = Math.min(
        100,
        Math.round((row.currentCapacity / row.estimatedCapacity) * 100)
      );
      return (
        <div className="w-full bg-gray-200 h-4 rounded">
          <div
            className={`h-4 rounded ${
              percentage > 80
                ? "bg-red-500"
                : percentage > 50
                ? "bg-yellow-400"
                : "bg-green-500"
            }`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      );
    },
  },
];

export default function LocationsPage() {
  const rows: Storage[] = [
    {
      id: "A1",
      name: "Almacén Central",
      height: 200,
      width: 100,
      large: 150,
      currentCapacity: 1000,
      estimatedCapacity: 1200,
      allowedQuantity: 50,
    },
    {
      id: "B2",
      name: "Almacén Secundario",
      height: 180,
      width: 120,
      large: 200,
      currentCapacity: 800,
      estimatedCapacity: 1100,
      allowedQuantity: 60,
    },
  ];

  return (
    <DashboardLayout title="Almacén / Ubicaciones">
      <div className="flex flex-col gap-3">
        <Table columns={tableColumns} data={rows} />
      </div>
    </DashboardLayout>
  );
}
