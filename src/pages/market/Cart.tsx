import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Header from "../../components/Marketplace/Header";
import Footer from "../../components/Marketplace/Footer";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Inputs/Input";

const products = [
  { title: "Producto 1", price: 999.99, image: "P1", discount: 15 },
  { title: "Producto 2", price: 499.99, image: "P2" },
  { title: "Producto 3", price: 799.99, image: "P3", discount: 20 },
  { title: "Producto 4", price: 1299.99, image: "P4" },
  { title: "Producto 5", price: 299.99, image: "P5", discount: 10 },
];

export default function Cart() {
  const navigate = useNavigate();
  const [cupon, setCupon] = useState<string>("");

  function handleApplyDiscount() {
    /* TODO: Funcion de cupones */
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    navigate("/payment");
  }

  return (
    <div>
      <Header />
      <div className="bg-primary-900 bg-opacity-10">
        <div className="flex justify-center p-6 text-white bg-primary">
          Titulo
        </div>
        <div className="flex gap-4 p-6">
          <div className="flex-grow">
            <div className="flex justify-between px-6 py-4 rounded-lg text-primary font-bold bg-secondary-300">
              <span>Productos</span>
              <span>Precio</span>
              <span>Cantidad</span>
              <span>Sub Total</span>
            </div>
            <div className="flex flex-col gap-2 py-4">
              {products.map((product) => (
                <div className="flex justify-between">
                  <div className="w-20 h-20 rounded border border-gray-300">
                    Imagen
                  </div>
                  <div>
                    <h4>{product.title}</h4>
                    <span>Descripción</span>
                  </div>
                  <div>${product.price.toFixed(2)}</div>
                  <div className="flex divide-x divide-gray-400 h-10 rounded-[20px] border border-gray-400 bg-white overflow-hidden">
                    <button className="p-2 h-10">+</button>
                    <button className="p-2 h-10">0</button>
                    <button className="p-2 h-10">-</button>
                  </div>
                  <div>${product.price.toFixed(2)}</div>
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              <Input
                name="cupon"
                value={cupon}
                onChange={(e) => setCupon(e.target.value)}
              />
              <Button type="primary" onClick={handleApplyDiscount}>
                Aplicar cupón
              </Button>
              <button>Limpiar carrito de compras</button>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-[300px]">
            <div className="p-2 text-center bg-white">
              <h3>Resumn de Orden</h3>
            </div>
            <div className="flex flex-col p-2 text-start text-gray-600 bg-white">
              <div className="flex justify-between">
                <span>Items</span>
                <span className="font-bold">9</span>
              </div>
              <div className="flex justify-between">
                <span>Items</span>
                <span className="font-bold">9</span>
              </div>
              <div className="flex justify-between">
                <span>Items</span>
                <span className="font-bold">9</span>
              </div>
              <div className="flex justify-between">
                <span>Items</span>
                <span className="font-bold">9</span>
              </div>
            </div>
            <Button type="secondary" onClick={handleSubmit}>
              Realizar Pago
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
