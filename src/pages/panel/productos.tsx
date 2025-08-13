import { useEffect, useState } from "react";
import { useStore } from "../../hooks/Store/useStore";
import { Product } from "../../interfaces/Product";

import Controls from "../../components/Dashboard/Controls/Controls";
import Table from "../../components/Dashboard/Table/Table";
import ProductForm from "../../components/Dashboard/Forms/ProductForm";
import DashboardLayout from "../../components/Dashboard/DashboardLayout";

const tableColumns = [
  {
    header: "Codigo",
    key: "code",
  },
  {
    header: "Nombre",
    key: "name",
  },
  {
    header: "Descripcion",
    key: "description",
  },
  {
    header: "Precio",
    key: "price",
  },
];

export default function ProductsTable() {
  const { products } = useStore().store;
  const [rows, setRows] = useState<Product[]>([]);
  const [form, setForm] = useState<boolean>(false);

  console.log(products);

  useEffect(() => {
    // Apply filter for search
    setRows([]);
  }, []);

  function handleToggleForm() {
    setForm(!form);
  }

  async function handleSubmitForm(data: Product): Promise<void> {
    console.log(data);
  }

  return (
    <DashboardLayout title="Productos">
      <div className="flex flex-col gap-3">
        {form && (
          <ProductForm
            title="Crear producto"
            onClose={handleToggleForm}
            onSubmit={handleSubmitForm}
          />
        )}
        <Controls
          data={[]}
          btnConfig={[{ label: "Nuevo Producto", onClick: handleToggleForm }]}
        />
        <Table columns={tableColumns} data={rows} />
      </div>
    </DashboardLayout>
  );
}
