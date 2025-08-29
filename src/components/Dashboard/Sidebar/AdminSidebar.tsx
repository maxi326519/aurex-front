import Sidebar, { SideSection } from "./Sidebar";
import {
  LayoutDashboard,
  Users,
  Package,
  Warehouse,
  ClipboardList,
  ShoppingCart,
  UserCog,
  List,
  FileInput,
  MapPin,
  PackagePlus,
} from "lucide-react";

const sections: SideSection[] = [
  {
    title: "Dashboard",
    items: [
      {
        icon: <LayoutDashboard size={20} />,
        path: "/panel/admin/analiticas",
        name: "Analíticas",
      },
    ],
  },
  {
    title: "Administración",
    items: [
      {
        icon: <UserCog size={20} />,
        path: "/panel/admin/usuarios",
        name: "Usuarios",
      },
      {
        icon: <Users size={20} />,
        path: "/panel/admin/vendedores",
        name: "Vendedores",
      },
    ],
  },
  {
    title: "Inventario",
    items: [
      {
        icon: <Package size={20} />,
        path: "/panel/admin/productos",
        name: "Productos",
        sublist: [
          {
            icon: <List size={18} />,
            path: "/panel/admin/productos/listado",
            name: "Listado General",
          },
          {
            icon: <FileInput size={18} />,
            path: "/panel/admin/productos/importacion",
            name: "Importación Masiva",
          },
        ],
      },
      {
        icon: <Warehouse size={20} />,
        path: "/panel/admin/almacen",
        name: "Almacén",
        sublist: [
          {
            icon: <MapPin size={18} />,
            path: "/panel/admin/almacen/ubicaciones",
            name: "Gestión de Ubicaciones",
          },
          {
            icon: <PackagePlus size={18} />,
            path: "/panel/admin/almacen/inventario",
            name: "Inventario",
          },
        ],
      },
    ],
  },
  {
    title: "Operaciones",
    items: [
      {
        icon: <ShoppingCart size={20} />,
        path: "/panel/admin/pedidos",
        name: "Pedidos",
      },
      {
        icon: <ClipboardList size={20} />,
        path: "/panel/admin/recepciones",
        name: "Recepciones",
      },
    ],
  },
];

export default function AdminSidebar() {
  return <Sidebar config={sections} />;
}
