import { Route, Routes } from "react-router-dom";

import Home from "./pages/market/index";
import Login from "./pages/market/login";
import Search from "./pages/market/search";
import Cart from "./pages/market/Cart";
import ProductsTable from "./pages/panel/productos";

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
        <Route path="/panel/usuarios" element={<ProductsTable />} />
        <Route path="/panel/clientes" element={<ProductsTable />} />
        <Route path="/panel/ventas" element={<ProductsTable />} />
        <Route path="/panel/productos" element={<ProductsTable />} />
      </Routes>
    </div>
  );
}

export default App;
