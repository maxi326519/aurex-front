import { Route, Routes } from "react-router-dom";

import Home from "./pages/market/index";
import Login from "./pages/market/login";
import Search from "./pages/market/search";
import Cart from "./pages/market/Cart";

import DashboardPage from "./pages/dashboard";
import ClientsPage from "./pages/dashboard/clients";
import ProductsListPage from "./pages/dashboard/products/lists";
import ProductsCombosPage from "./pages/dashboard/products/combos";
import ImportsPage from "./pages/dashboard/orders/imports";
import LocationsPage from "./pages/dashboard/storage/locations";
import InventarioPage from "./pages/dashboard/storage/inventory";
import AppointmentsPage from "./pages/dashboard/receptions/appointments";
import IngressPage from "./pages/dashboard/receptions/ingress";
import FollowUpPage from "./pages/dashboard/receptions/follouUp";
import PendingPage from "./pages/dashboard/orders/pending";
import InProcessPage from "./pages/dashboard/orders/inProcess";
import PreparedPage from "./pages/dashboard/orders/prepared";
import MarketPostsPage from "./pages/dashboard/market/posts";
import AnaliticsPage from "./pages/dashboard/market/analitics";
import UsersPage from "./pages/dashboard/users";

import "./App.css";

function App() {
  return (
    <div className="h-screen bg-white">
      <Routes>
        {/* E-Commerce */}
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />

        {/* Dashbpoard Admin */}
        <Route path={"/panel/metricas"} element={<DashboardPage/>} />
        <Route path={"/panel/clientes"} element={<ClientsPage/>} />
        <Route path={"/panel/productos/listado"} element={<ProductsListPage/>} />
        <Route path={"/panel/productos/combos"} element={<ProductsCombosPage/>} />
        <Route path={"/panel/productos/importacion"} element={<ImportsPage/>} />
        <Route path={"/panel/almacen/ubicaciones"} element={<LocationsPage/>} />
        <Route path={"/panel/almacen/inventario"} element={<InventarioPage/>} />
        <Route path={"/panel/recepciones/turnos"} element={<AppointmentsPage/>} />
        <Route path={"/panel/recepciones/ingresos"} element={<IngressPage/>} />
        <Route path={"/panel/recepciones/seguimiento"} element={<FollowUpPage/>} />
        <Route path={"/panel/pedidos/pendientes"} element={<PendingPage/>} />
        <Route path={"/panel/pedidos/proceso"} element={<InProcessPage/>} />
        <Route path={"/panel/pedidos/preparados"} element={<PreparedPage/>} />
        <Route path={"/panel/pedidos/importacion"} element={<ImportsPage/>} />
        <Route path={"/panel/marketplace/publicaciones"} element={<MarketPostsPage/>} />
        <Route path={"/panel/marketplace/estadisticas"} element={<AnaliticsPage/>} />
        <Route path={"/panel/usuarios"} element={<UsersPage/>} />

      </Routes>
    </div>
  );
}

export default App;
