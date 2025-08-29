import { useNavigate } from "react-router-dom";
import { LoginData } from "../interfaces/Users";
import { useState } from "react";
import { useAuth } from "../hooks/Auth/useAuth";

import Header from "../components/Marketplace/Header";
import Footer from "../components/Marketplace/Footer";
import Input from "../components/Dashboard/Inputs/Input";
import Button from "../components/ui/Button";
import Swal from "sweetalert2";

export default function Login() {
  const navigate = useNavigate();
  const auth = useAuth();
  const [email, setEmail] = useState<string>("");

  function handleLogin(data: LoginData, cb: () => void) {
    return auth
      .login(data)
      .then(cb)
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se pudo iniciar sesión",
        });
      });
  }

  function handleRegister() {
    handleLogin({ email: "admin@mipanel.online", password: "123qwe" }, () =>
      navigate("/panel/admin/analiticas")
    );
  }

  function handleSetClient() {
    handleLogin({ email: "comprador@mipanel.online", password: "123qwe" }, () =>
      navigate("/panel/compras")
    );
  }

  function handleSetSeller() {
    handleLogin({ email: "vendedor@mipanel.online", password: "123qwe" }, () =>
      navigate("/panel/vendedor/analiticas")
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="grow flex flex-col justify-center items-center gap-4">
        <Input
          name="email"
          label="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="flex gap-4">
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
      </div>
      <Footer />
    </div>
  );
}
