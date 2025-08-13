import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

import styles from "./Sidebar.module.css";
import logoImg from "../../../assets/img/logo-largo.png";
import userSvg from "../../../assets/svg/dashboard/admin.svg";
import clientsSvg from "../../../assets/svg/dashboard/clients.svg";
import productsSvg from "../../../assets/svg/dashboard/products.svg";
import salesSvg from "../../../assets/svg/dashboard/sales.svg";
import seionSvg from "../../../assets/svg/logout.svg";

interface SideItem {
  svg: string;
  path: string;
  name: string;
  sublist?: Array<{
    svg: string;
    path: string;
    name: string;
  }>;
}

const items: SideItem[] = [
  {
    svg: userSvg,
    path: "/panel/usuarios",
    name: "Usuarios",
  },
  {
    svg: clientsSvg,
    path: "/panel/clientes",
    name: "Clientes",
  },
  {
    svg: productsSvg,
    path: "/panel/productos",
    name: "Productos",
  },
  {
    svg: salesSvg,
    path: "/panel/ventas",
    name: "Ventas",
  },
];

export default function Sidebar() {
  const location = useLocation();
  const [dropSelected, setDropSelected] = useState<string>(location.pathname);

  function handleSelected(path: string) {
    return location.pathname.includes(path);
  }

  function handleDropSelected(path: string) {
    if (path === dropSelected) setDropSelected("");
    else setDropSelected(path);
  }

  return (
    <div className={styles.sidebar}>
      <div className="flex justify-center h-[--navbar-height] p-5">
        <img className="w-full h-max" src={logoImg} alt="img" />
      </div>
      {items.map((item) =>
        item.sublist ? (
          <div className={styles.dropDown} key={item.path}>
            <div
              className={styles.dropButton}
              onClick={() => handleDropSelected(item.path)}
            >
              <img src={item.svg} alt={item.name} />
              <span>{item.name}</span>
            </div>
            <ul
              className={`${
                item.path === dropSelected ? styles.show : styles.hidden
              }`}
            >
              {item.sublist?.map((subItem) => (
                <Link
                  to={subItem.path}
                  className={
                    handleSelected(subItem.path) ? styles.selected : ""
                  }
                  key={subItem.path}
                >
                  <img src={subItem.svg} alt={subItem.name} />
                  <span>{subItem.name}</span>
                </Link>
              ))}
            </ul>
          </div>
        ) : (
          <Link
            to={item.path}
            className={handleSelected(item.path) ? styles.selected : ""}
            key={item.path}
          >
            <img src={item.svg} alt={item.name} />
            <span>{item.name}</span>
          </Link>
        )
      )}
      <div className="grow flex flex-col justify-end">
        <button className="flex gap-5 p-5 text-white bg-transparent hover:text-primary-color hover:bg-[#0002]">
          <img className="icon-invert w-[30px]" src={seionSvg} alt="" />
          <span className="font-semibold">Cerrar sesión</span>
        </button>
      </div>
    </div>
  );
}
