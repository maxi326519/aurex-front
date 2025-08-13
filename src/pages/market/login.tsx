import { useState } from "react";

import Header from "../../components/Marketplace/Header";
import Footer from "../../components/Marketplace/Footer";
import Input from "../../components/Dashboard/Inputs/Input";
import Button from "../../components/ui/Button";

export default function Login() {
  const [email, setEmail] = useState<string>("");

  function handleRegister() {
    /* TODO: Registrar usuario */
  }

  function handleSetClient() {
    /* TODO: Registrar Comprador */
  }

  function handleSetSeller() {
    /* TODO: Registrar Vendedor */
  }

  return (
    <div>
      <Header />
      <div>
        <Input
          name="email"
          label="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="primary" onClick={() => handleSetClient()}>
          Comprar
        </Button>
        <Button type="primary" onClick={() => handleSetSeller()}>
          Vender
        </Button>
        <Button type="secondary" onClick={() => handleRegister()}>
          Registrarme
        </Button>
      </div>
      <Footer />
    </div>
  );
}
