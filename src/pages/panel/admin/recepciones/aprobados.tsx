import { Reception } from "../../../../interfaces/Receptions";
import { RefreshCw } from "lucide-react";
import { useEffect } from "react";
import useReceptions from "../../../../hooks/Dashboard/receptions/useReceptions";

import DashboardLayout from "../../../../components/Dashboard/AdminDashboard";
import Table from "../../../../components/Dashboard/Table/Table";
import Button from "../../../../components/ui/Button";

export default function ReceptionsApproved() {
  const { approved } = useReceptions();

  useEffect(() => {
    if (approved.data.length) handleGetData();
  }, []);

  const handleGetData = () => {
    approved.get();
  };

  return (
    <DashboardLayout title="Recepciones / Aprobados">
      <div className="flex flex-col gap-3">
        <div className="flex justify-end">
          <Button type="primary" onClick={handleGetData}>
            <RefreshCw size={20} />
          </Button>
        </div>
        <Table columns={tableColumns()} data={approved.data} />
      </div>
    </DashboardLayout>
  );
}

const tableColumns = () => [
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
    header: "Tipo",
    key: "type",
  },
  {
    header: "Excel",
    key: "",
    render: () => <Button type="primary">Subir</Button>,
  },
];
