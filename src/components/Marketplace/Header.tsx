import { ReactInput, Search } from "../../interfaces/Types";
import { LocationEdit, User } from "lucide-react";
import { useState } from "react";

import Button from "../ui/Button";
import Select from "../ui/Inputs/Select";
import SearchBar from "../ui/Inputs/SearchBar";
import { useNavigate } from "react-router-dom";

const categorias = [
  "Categorías",
  "Baños",
  "Pisos",
  "Herramientas",
  "Exterior",
  "Construcción",
];
const masVendidos = [...categorias];
const destacados = [...categorias];
const ofertas = [...categorias];

const Header = () => {
  const isLoggedIn = false;
  const userName = "John";

  const navigate = useNavigate();
  const [search, setSearch] = useState<Partial<Search>>({});

  function handleChange(e: ReactInput) {
    const { name, value } = e.target;
    setSearch({ ...search, [name]: value });
  }

  function handleSubmit() {
    navigate("/search");
  }

  function handleSetLocation() {
    /* TODO: Consultar como manejarlo */
  }

  return (
    <header className="text-white">
      <div className="h-[20px] bg-secondary-300"></div>
      {/* Top Header */}
      <div className="py-3 px-4 flex items-center justify-between bg-primary">
        {/* Logo */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <h1 className="text-2xl font-bold mr-6">AUREX</h1>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl mx-4">
          <SearchBar
            name="text"
            value={search.text}
            onChange={handleChange}
            onSearch={handleSubmit}
          />
        </div>

        {/* Location and Auth */}
        <div className="flex items-center space-x-4">
          <Button
            type="secondary"
            className="flex items-center text-sm"
            onClick={() => handleSetLocation()}
          >
            <LocationEdit />
            <div className="flex flex-col items-start">
              <span className="leading-[15px]">Ingresa</span>
              <span className="leading-[15px]">tu ubicación</span>
            </div>
          </Button>

          <Button
            type="secondary"
            className="text-sm"
            onClick={() => navigate("/login")}
          >
            <User />
            <div className="flex flex-col items-start">
              <span className="leading-[15px]">
                {isLoggedIn ? "Hola," : "Hola!"}
              </span>
              <span className="leading-[15px]">
                {isLoggedIn ? `${userName}` : "Iniciar sesión"}
              </span>
            </div>
          </Button>
          <button className="relative" onClick={() => navigate("/cart")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="absolute -top-2 -right-2 bg-secondary text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>

      {/* Categories Navigation */}
      <nav className="px-4 py-4 bg-secondary">
        <div className="flex justify-center gap-6">
          <Select
            name="categorias"
            value={search.categoria || ""}
            label="Categorias"
            options={categorias}
            onChange={handleChange}
          />
          <Select
            name="masVendidos"
            value={search.masVendido || ""}
            label="Más vendidos"
            options={masVendidos}
            onChange={handleChange}
          />
          <Select
            name="destacados"
            value={search.destacado || ""}
            label="Destacados"
            options={destacados}
            onChange={handleChange}
          />
          <Select
            name="ofertas"
            value={search.oferta || ""}
            label="Ofertas"
            options={ofertas}
            onChange={handleChange}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
