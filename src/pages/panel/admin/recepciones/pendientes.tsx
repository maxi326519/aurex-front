import { Download, Eye, RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";
import { Reception } from "../../../../interfaces/Receptions";
import { Product } from "../../../../interfaces/Product";
import useReceptions from "../../../../hooks/Dashboard/receptions/useReceptions";

import DashboardLayout from "../../../../components/Dashboard/AdminDashboard";
import Modal from "../../../../components/Modal";
import Table from "../../../../components/Dashboard/Table/Table";
import Button from "../../../../components/ui/Button";

export default function ReceptionsPending() {
  const { pendings } = useReceptions();
  const [openModal, setOpenModal] = useState<Product[]>([]);

  useEffect(() => {
    if (pendings.data.length) handleGetData();
  }, []);

  const handleGetData = () => {
    pendings.get();
  };

  const handleViewProducts = (products: Product[]) => {
    setOpenModal(products);
  };

  return (
    <DashboardLayout title="Recepciones / Pendientes">
      <div className="flex flex-col gap-3">
        {openModal.length > 0 && (
          <Modal title="Stock" onClose={() => setOpenModal([])}>
            <Table data={openModal} columns={products()} />
          </Modal>
        )}
        <div className="flex justify-end">
          <Button type="primary" onClick={handleGetData}>
            <RefreshCw size={20} />
          </Button>
        </div>
        <Table
          columns={tableColumns(handleViewProducts)}
          data={pendings.data}
        />
      </div>
    </DashboardLayout>
  );
}

const tableColumns = (handleViewProducts: (data: Product[]) => void) => [
  {
    header: "Vendedor",
    key: "",
    render: (row: Reception) => <span>{row.user?.name}</span>,
  },
  {
    header: "Fecha",
    key: "date",
    render: (row: Reception) =>
      new Date(row.date).toLocaleString("es-CO", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
  },
  {
    header: "Productos",
    key: "products",
    render: (row: Reception) => (
      <div className="flex items-center gap-2">
        <button
          onClick={() => handleViewProducts(row.products!)}
          className="p-1 rounded-full border border-gray-300 hover:bg-gray-100 transition"
        >
          <Eye className="h-4 w-4 text-gray-600" />
        </button>
        <span>2 un.</span>
        <Button type="primary" variant="outline">
          <Download />
        </Button>
      </div>
    ),
  },
  {
    header: "Remito",
    key: "",
    render: () => <Button type="primary">Descargar</Button>,
  },
];

const products = () => [
  {
    header: "Nombre",
    key: "name",
    render: (row: Product) => <span>{row.name}</span>,
  },
  {
    header: "Cantidad",
    key: "totalStock",
    render: (row: Product) => <span>{row.totalStock}</span>,
  },
];
