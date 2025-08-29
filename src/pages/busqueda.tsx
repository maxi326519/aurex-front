import { useState } from "react";

import Footer from "../components/Marketplace/Footer";
import Header from "../components/Marketplace/Header";
import ProductCard from "../components/Marketplace/ProductCard";
import Button from "../components/ui/Button";

interface SearchFilters {
  tipos: string;
  tiendasOficiales: string;
  categorias: string;
  cuotas: string;
  otros: string;
  costosEnvio: string;
  tiempoEntrega: string;
  envio: string;
  color: string;
  marca: string;
}
const tipos = [
  "Favoritos",
  "Exterior",
  "Interior",
  "Impermeable",
  "Diluyentes",
  "Pinceles",
  "Vinilos",
];
const filtersData = [
  { key: "tiendasOficiales", data: ["Solo tiendas oficiales (250)"] },
  {
    key: "categorias",
    data: [
      "Pinturería (180)",
      "Librería (23)",
      "Herramientas (3)",
      "Hogar, Muebles y Jardín (3)",
    ],
  },
  {
    key: "cuotas",
    data: ["Mismo precio en cuotas (53)", "Cuota promocionada (5)"],
  },
  { key: "otros", data: ["Es antihongos (67)", "Es lavable (57)"] },
  { key: "costosEnvio", data: ["Costo de envío", "Gratis (92)"] },
  { key: "tiempoEntrega", data: ["Tiempo de entrega", "Llegan hoy"] },
  { key: "envio", data: ["Envío", "Mercado Envíos"] },
  { key: "color", data: ["#000000", "#FF0000", "#FFFFFF", "#FFFF00"] },
  {
    key: "marca",
    data: ["Alba (200)", "Casablanca (2)", "Akzo Nobel (2)", "Premium (1)"],
  },
];

const filtersLabel = {
  tipos: "Tipos",
  tiendasOficiales: "Tiendas oficiales",
  categorias: "Categorías",
  cuotas: "Cuotas",
  otros: "Otras características",
  costosEnvio: "Costos de envío",
  tiempoEntrega: "Tiempo de entrega",
  envio: "Envío",
  color: "Color",
  marca: "Marca",
};

const products = [
  { title: "Producto 1", price: 999.99, image: "P1", discount: 15 },
  { title: "Producto 2", price: 499.99, image: "P2" },
  { title: "Producto 3", price: 799.99, image: "P3", discount: 20 },
  { title: "Producto 4", price: 1299.99, image: "P4" },
  { title: "Producto 5", price: 299.99, image: "P5", discount: 10 },
];

export default function Search() {
  const [filters, setFilters] = useState<Partial<SearchFilters>>({}); // TODO: Crear interfaz de los filtros

  /*   function handleChangeFilters(e: ReactInput) {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  } */

  return (
    <div className="flex flex-col min-h-screen h-full">
      <Header />

      {/* BANNER */}
      <div className="flex justify-center gap-4 p-6 bg-primary">
        {tipos.map((option: string) => (
          <Button
            type={filters.tipos === option ? "secondary" : "primary"}
            key={option}
            onClick={() => setFilters({ ...filters, tipos: option })}
          >
            {option}
          </Button>
        ))}
      </div>

      <div className="flex justify-center p-8">
        <div className="flex flex-col gap-4 p-4 text-sm">
          {filtersData.map((filter) => (
            <div className="flex flex-col">
              <span className="text-gray-800 font-semibold">
                {filtersLabel[filter.key as keyof typeof filtersLabel]}
              </span>
              {filter.data.map((option) => (
                <span
                  className="text-gray-600"
                  onClick={() =>
                    setFilters({ ...filters, [filter.key]: option })
                  }
                >
                  {option}
                </span>
              ))}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard
              title={product.title}
              price={product.price}
              image={product.image}
              discount={product.discount}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
