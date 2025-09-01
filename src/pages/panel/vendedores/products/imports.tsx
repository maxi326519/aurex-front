import { Download, FileSpreadsheet } from "lucide-react";
import { useState } from "react";
import { Product } from "../../../../interfaces/Product";
import useProducts from "../../../../hooks/Dashboard/products/useProduct";

import DashboardLayout from "../../../../components/Dashboard/SellerDashboard";
import DragAndDrop from "../../../../components/Excel/DragAndDrop";
import ViewCSV from "../../../../components/Excel/ViewCSV";
import Button from "../../../../components/ui/Button";

export default function SellersImportsPage() {
  const products = useProducts();
  const [file, setFile] = useState<File>();

  async function handleSubmit(data: Product[]) {
    for (const product of data) {
      await products.create(product);
    }
  }

  function downloadExcel() {
    // ruta relativa al directorio public/
    const fileUrl = `/modelo-excel.xlsx`;

    // crear link temporal
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileUrl;

    // forzar clic y eliminar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <DashboardLayout title="Productos / Importación">
      {file ? (
        <div>
          <Button type="primary">Subir remito</Button>
          <ViewCSV
            file={file}
            onSubmit={(data) => handleSubmit(data)}
            onBack={() => setFile(undefined)}
            onClose={() => {}}
          />
        </div>
      ) : (
        <div className="flex flex-col gap-4 w-full h-full rounded-md">
          <Button type="primary" onClick={downloadExcel}>
            <FileSpreadsheet />
            <span>Descargar modelo</span>
            <Download />
          </Button>
          <div className="bg-white">
            <DragAndDrop setFile={setFile} />
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
