import { Route, Routes } from "react-router-dom";
import axios from "axios";

import Home from "./pages/index";
import Login from "./pages/login";
import Cart from "./pages/carrito";
import Search from "./pages/busqueda";

import DashboardPage from "./pages/panel/admin";
import UsersPage from "./pages/panel/admin/users";
import SellersPage from "./pages/panel/admin/sellers";
import ProductsListPage from "./pages/panel/admin/products/lists";
import OrdersPage from "./pages/panel/admin/orders";
import ProductsImportsPage from "./pages/panel/admin/products/imports";
import LocationsPage from "./pages/panel/admin/storage/locations";
import InventarioPage from "./pages/panel/admin/storage/inventory";
import ReceptionsPage from "./pages/panel/admin/receptions";
import ClientsOrdersPage from "./pages/panel/compras";

import SellerProfilePage from "./pages/panel/vendedores/perfil";
import SellerAnaliticsPage from "./pages/panel/vendedores/analitics";
import SellersProductsPage from "./pages/panel/vendedores/products/listado";
import SellersProductsCombosPage from "./pages/panel/vendedores/market/combos";
import SellersNewProductsPage from "./pages/panel/vendedores/products/alta-manual";
import SellerOrdersPage from "./pages/panel/vendedores/market/orders";

import "./App.css";
import SellersPostsPage from "./pages/panel/vendedores/market/publicaciones";

axios.defaults.baseURL = import.meta.env.VITE_API_URL || "http://localhost:3001/api";

function App() {
  return (
    <div className="h-screen bg-white">
      <Routes>
        {/* E-Commerce */}
        <Route path="/" element={<Home />} />
        <Route path="/busqueda" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />

        {/* Dashbpoard Admin */}
        <Route path={"/panel/admin/analiticas"} element={<DashboardPage/>} />
        <Route path={"/panel/admin/usuarios"} element={<UsersPage/>} />
        <Route path={"/panel/admin/vendedores"} element={<SellersPage/>} />
        <Route path={"/panel/admin/productos/listado"} element={<ProductsListPage/>} />
        <Route path={"/panel/admin/productos/importacion"} element={<ProductsImportsPage/>} />
        <Route path={"/panel/admin/almacen/ubicaciones"} element={<LocationsPage/>} />
        <Route path={"/panel/admin/almacen/inventario"} element={<InventarioPage/>} />
        <Route path={"/panel/admin/pedidos"} element={<OrdersPage/>} />
        <Route path={"/panel/admin/recepciones"} element={<ReceptionsPage/>} />

        {/* Dashboard Sellers */}
        <Route path={"/panel/vendedor/analiticas"} element={<SellerAnaliticsPage/>} />
        <Route path={"/panel/vendedor/perfil"} element={<SellerProfilePage/>} />
        <Route path={"/panel/vendedor/tienda/publicaciones"} element={<SellersPostsPage />}/>
        <Route path={"/panel/vendedor/tienda/combos"} element={<SellersProductsCombosPage/>}/>
        <Route path={"/panel/vendedor/tienda/alta-rapida"} element={<SellersProductsCombosPage/>}/>
        <Route path={"/panel/vendedor/productos/listado"} element={<SellersProductsPage/>}/>
        <Route path={"/panel/vendedor/productos/alta-manual"} element={<SellersNewProductsPage />}/>
        <Route path={"/panel/vendedor/ventas/pedidos"} element={<SellerOrdersPage/>}/>

        {/* Dashbaord Clients */}
        <Route path={"/panel/compras"} element={<ClientsOrdersPage />} />

      </Routes>
    </div>
  );
}

export default App;
