import { Reception } from "../../../../interfaces/Receptions";
import { RefreshCw } from "lucide-react";
import { useEffect } from "react";
import useReceptions from "../../../../hooks/Dashboard/receptions/useReceptions";

import DashboardLayout from "../../../../components/Dashboard/AdminDashboard";
import Table from "../../../../components/Dashboard/Table/Table";
import Button from "../../../../components/ui/Button";

export default function ReceptionsHistory() {
  const { history } = useReceptions();

  useEffect(() => {
    if (history.data.length) handleGetData();
  }, []);

  const handleGetData = () => {
    history.get();
  };

  return (
    <DashboardLayout title="Recepciones / Historial">
      <div className="flex flex-col gap-3">
        <div className="flex justify-end">
          <Button type="primary" onClick={handleGetData}>
            <RefreshCw size={20} />
          </Button>
        </div>
        <Table columns={tableColumns()} data={history.data} />
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
