import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  LayoutDashboard,
  Users,
  Package,
  Warehouse,
  ClipboardList,
  ShoppingCart,
  ShoppingBag,
  UserCog,
  LogOut,
  List,
  Boxes,
  FilePlus2,
  FileInput,
  MapPin,
  PackagePlus,
  ClipboardCheck,
  Eye,
  Clock,
  PackageCheck,
  Upload,
  LineChart,
  ChevronDown,
  ChevronRight,
  User,
} from "lucide-react";

interface SideSection {
  title?: string;
  items: SideItem[];
  requiredRole?: string[];
}

interface SideItem {
  icon: React.ReactNode;
  path: string;
  name: string;
  requiredRole?: string[];
  sublist?: Array<{
    icon: React.ReactNode;
    path: string;
    name: string;
    requiredRole?: string[];
  }>;
}

const sections: SideSection[] = [
  {
    title: "General",
    requiredRole: ["admin", "manager", "viewer"],
    items: [
      {
        icon: <LayoutDashboard size={20} />,
        path: "/panel/dashboard",
        name: "Dashboard",
      },
    ],
  },
  {
    title: "Gestión Comercial",
    requiredRole: ["admin", "manager", "sales"],
    items: [
      {
        icon: <Users size={20} />,
        path: "/panel/clientes",
        name: "Clientes",
      },
      {
        icon: <ShoppingBag size={20} />,
        path: "/panel/marketplace",
        name: "Marketplace",
        sublist: [
          {
            icon: <ShoppingBag size={18} />,
            path: "/panel/marketplace/publicaciones",
            name: "Publicaciones",
          },
          {
            icon: <LineChart size={18} />,
            path: "/panel/marketplace/estadisticas",
            name: "Estadísticas",
          },
        ],
      },
    ],
  },
  {
    title: "Inventario",
    requiredRole: ["admin", "manager", "operator"],
    items: [
      {
        icon: <Package size={20} />,
        path: "/panel/productos",
        name: "Productos",
        sublist: [
          {
            icon: <List size={18} />,
            path: "/panel/productos/listado",
            name: "Listado General",
          },
          {
            icon: <Boxes size={18} />,
            path: "/panel/productos/combos",
            name: "Combos",
            requiredRole: ["admin", "manager"],
          },
          {
            icon: <FilePlus2 size={18} />,
            path: "/panel/productos/alta-manual",
            name: "Alta Manual",
          },
          {
            icon: <FileInput size={18} />,
            path: "/panel/productos/importacion",
            name: "Importación Masiva",
          },
        ],
      },
      {
        icon: <Warehouse size={20} />,
        path: "/panel/almacen",
        name: "Almacén",
        sublist: [
          {
            icon: <MapPin size={18} />,
            path: "/panel/almacen/ubicaciones",
            name: "Gestión de Ubicaciones",
          },
          {
            icon: <PackagePlus size={18} />,
            path: "/panel/almacen/inventario",
            name: "Inventario",
          },
        ],
      },
    ],
  },
  {
    title: "Operaciones",
    requiredRole: ["admin", "manager", "operator"],
    items: [
      {
        icon: <ClipboardList size={20} />,
        path: "/panel/recepciones",
        name: "Recepciones",
        sublist: [
          {
            icon: <Clock size={18} />,
            path: "/panel/recepciones/turnos",
            name: "Turnos de Recepción",
          },
          {
            icon: <ClipboardCheck size={18} />,
            path: "/panel/recepciones/ingresos",
            name: "Control de Ingresos",
          },
          {
            icon: <Eye size={18} />,
            path: "/panel/recepciones/seguimiento",
            name: "Seguimiento",
          },
        ],
      },
      {
        icon: <ShoppingCart size={20} />,
        path: "/panel/pedidos",
        name: "Pedidos",
        sublist: [
          {
            icon: <Clock size={18} />,
            path: "/panel/pedidos/pendientes",
            name: "Pendientes",
          },
          {
            icon: <PackageCheck size={18} />,
            path: "/panel/pedidos/proceso",
            name: "En Proceso",
          },
          {
            icon: <PackageCheck size={18} />,
            path: "/panel/pedidos/preparados",
            name: "Preparados",
          },
          {
            icon: <Upload size={18} />,
            path: "/panel/pedidos/importacion",
            name: "Importación Manual",
          },
        ],
      },
    ],
  },
  {
    title: "Ventas",
    requiredRole: ["admin", "manager", "sales"],
    items: [
      {
        icon: <LineChart size={20} />,
        path: "/panel/ventas/metricas",
        name: "Métricas",
      },
      {
        icon: <ClipboardList size={20} />,
        path: "/panel/ventas/ordenes",
        name: "Órdenes",
      },
    ],
  },
  {
    title: "Compras",
    requiredRole: ["admin", "manager", "purchasing"],
    items: [
      {
        icon: <Clock size={20} />,
        path: "/panel/compras/pendientes",
        name: "Pendientes",
      },
      {
        icon: <ClipboardCheck size={20} />,
        path: "/panel/compras/historial",
        name: "Historial",
      },
    ],
  },
  {
    title: "Administración",
    requiredRole: ["admin"],
    items: [
      {
        icon: <UserCog size={20} />,
        path: "/panel/usuarios",
        name: "Usuarios",
        sublist: [
          {
            icon: <UserCog size={18} />,
            path: "/panel/usuarios/administradores",
            name: "Administradores",
            requiredRole: ["admin"],
          },
          {
            icon: <Users size={18} />,
            path: "/panel/usuarios/vendedores",
            name: "Vendedores",
          },
          {
            icon: <User size={18} />,
            path: "/panel/usuarios/compradores",
            name: "Compradores",
          },
        ],
      },
    ],
  },
];

export default function Sidebar() {
  const location = useLocation();
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>(
    {}
  );
  const [userRole, setUserRole] = useState("manager");

  useEffect(() => {
    setUserRole("manager");
  }, []);

  // Initialize expanded menus based on current path
  useEffect(() => {
    const newExpandedMenus: Record<string, boolean> = {};

    sections.forEach((section) => {
      section.items.forEach((item) => {
        if (item.sublist) {
          const isSubItemActive = item.sublist.some((subItem) =>
            location.pathname.startsWith(subItem.path)
          );
          if (isSubItemActive) {
            newExpandedMenus[item.path] = true;
          }
        }
      });
    });

    setExpandedMenus(newExpandedMenus);
  }, [location.pathname]);

  const toggleMenu = (path: string) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [path]: !prev[path],
    }));
  };

  const isItemActive = (path: string) => {
    return location.pathname.startsWith(path);
  };

  const isSubItemActive = (path: string) => {
    return location.pathname === path;
  };

  const hasPermission = (requiredRoles?: string[]) => {
    if (!requiredRoles) return true;
    return requiredRoles.includes(userRole);
  };

  return (
    <div className="flex flex-col w-64 h-full bg-gray-800 text-gray-200">
      <div className="flex items-center justify-center h-16 p-4 border-b border-gray-700">
        <span className="text-xl font-semibold">WMS System</span>
      </div>

      <div className="flex-1 overflow-y-auto">
        {sections.map((section) => {
          if (!hasPermission(section.requiredRole)) return null;

          const filteredItems = section.items.filter((item) =>
            hasPermission(item.requiredRole)
          );

          if (filteredItems.length === 0) return null;

          return (
            <div key={section.title} className="mt-2">
              {section.title && (
                <div className="px-4 py-2 text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                  {section.title}
                </div>
              )}

              {filteredItems.map((item) => (
                <div key={item.path} className="mb-1">
                  {item.sublist ? (
                    <>
                      <div
                        className={`flex items-center justify-between p-3 cursor-pointer hover:bg-gray-700 transition-colors ${
                          isItemActive(item.path) ? "bg-gray-700" : ""
                        }`}
                        onClick={() => toggleMenu(item.path)}
                      >
                        <div className="flex items-center gap-3">
                          <span className="icon">{item.icon}</span>
                          <span>{item.name}</span>
                        </div>
                        {expandedMenus[item.path] ? (
                          <ChevronDown size={16} />
                        ) : (
                          <ChevronRight size={16} />
                        )}
                      </div>

                      <div
                        className={`overflow-hidden transition-all duration-200 ${
                          expandedMenus[item.path] ? "max-h-96" : "max-h-0"
                        }`}
                      >
                        {item.sublist
                          .filter((subItem) =>
                            hasPermission(subItem.requiredRole)
                          )
                          .map((subItem) => (
                            <Link
                              to={subItem.path}
                              key={subItem.path}
                              className={`flex items-center gap-3 py-2 pl-12 pr-3 text-sm hover:bg-gray-700 ${
                                isSubItemActive(subItem.path)
                                  ? "bg-blue-600 text-white"
                                  : "text-gray-300"
                              }`}
                            >
                              <span className="icon">{subItem.icon}</span>
                              <span>{subItem.name}</span>
                            </Link>
                          ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`flex items-center gap-3 p-3 hover:bg-gray-700 ${
                        isItemActive(item.path)
                          ? "bg-blue-600 text-white"
                          : "text-gray-200"
                      }`}
                    >
                      <span className="icon">{item.icon}</span>
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          );
        })}
      </div>

      <div className="p-4 border-t border-gray-700">
        <button className="flex items-center gap-3 w-full p-2 rounded hover:bg-gray-700 transition-colors">
          <LogOut size={20} />
          <span>Cerrar sesión</span>
        </button>
      </div>
    </div>
  );
}
