import { useEffect } from "react";
import usePosts from "../../../../hooks/Dashboard/posts/usePosts";

import DashboardLayout from "../../../../components/Dashboard/SellerDashboard";
import Table from "../../../../components/Dashboard/Table/Table";

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

export default function SellersPostsPage() {
  const posts = usePosts();

  useEffect(() => {
    posts.get();
  }, []);

  useEffect(() => {
    console.log("Publicaciones", posts.data);
  }, [posts.data]);

  return (
    <DashboardLayout title="Tienda / Publicaciones">
      <div className="flex flex-col gap-3">
        <Table columns={tableColumns} data={posts.data} />
      </div>
    </DashboardLayout>
  );
}
