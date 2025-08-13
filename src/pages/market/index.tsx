import BrandCard from "../../components/Marketplace/BrandCard";
import CategoryButton from "../../components/Marketplace/CategroyButtor";
import Footer from "../../components/Marketplace/Footer";
import Header from "../../components/Marketplace/Header";
import HorizontalScroll from "../../components/Marketplace/HorizontalScroll";
import Newsletter from "../../components/Marketplace/Newsletter";
import ProductCard from "../../components/Marketplace/ProductCard";

const Home: React.FC = () => {
  const categories = [
    { name: "Baños" },
    { name: "Pisos" },
    { name: "Herramientas" },
    { name: "Exterior" },
    { name: "Construcción" },
    { name: "Muebles" },
    { name: "Electro" },
    { name: "Aberturas" },
    { name: "Dormitorio" },
  ];

  const brands = [
    { name: "LG", logo: "LG" },
    { name: "BOSCH", logo: "BOSCH" },
    { name: "MOTOROLA", logo: "MOTO" },
    { name: "HP", logo: "HP" },
    { name: "SAMSUNG", logo: "SAMSUNG" },
    { name: "APPLE", logo: "🍏" },
    { name: "SONY", logo: "SONY" },
  ];

  const products = [
    { title: "Producto 1", price: 999.99, image: "P1", discount: 15 },
    { title: "Producto 2", price: 499.99, image: "P2" },
    { title: "Producto 3", price: 799.99, image: "P3", discount: 20 },
    { title: "Producto 4", price: 1299.99, image: "P4" },
    { title: "Producto 5", price: 299.99, image: "P5", discount: 10 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* CARROUSELL */}
        <section className="bg-gray-200 h-64 md:h-96 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">
              Bienvenido a CompanOnline
            </h1>
            <p className="text-lg">Los mejores productos al mejor precio</p>
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="my-8">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-bold mb-6 text-center">Categorías</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-4">
              {categories.map((category, index) => (
                <CategoryButton
                  key={index}
                  name={category.name}
                  icon={category.icon}
                />
              ))}
            </div>
          </div>
        </section>

        {/* NEWS */}
        <HorizontalScroll title="Novedades">
          {brands.map((brand, index) => (
            <BrandCard key={index} name={brand.name} logo={brand.logo} />
          ))}
        </HorizontalScroll>

        {/* Categorías recomendadas */}
        <section className="my-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Categorías recomendadas</h2>
              <div className="flex space-x-2">
                <button className="bg-gray-200 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button className="bg-primary text-white p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {products.slice(0, 4).map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Marcas recomendadas */}
        <section className="my-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Marcas recomendadas</h2>
              <div className="flex space-x-2">
                <button className="bg-gray-200 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button className="bg-primary text-white p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {products.slice(0, 4).map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* ¿Qué quieres hacer hoy? */}
        <section className="my-8 bg-gray-100 py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-bold mb-6 text-center">
              ¿Qué quieres hacer hoy?
            </h2>
            <div className="flex justify-center space-x-4 mb-8">
              <button className="bg-primary text-white py-3 px-8 rounded-md font-medium hover:bg-primary-dark">
                Comprar
              </button>
              <button className="bg-secondary text-white py-3 px-8 rounded-md font-medium hover:bg-secondary-dark">
                Vender
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-bold mb-2">Medios de pago</h3>
                <p className="text-sm">
                  Tarjetas de crédito, débito, transferencias y más
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-bold mb-2">6 cuotas sin interés</h3>
                <p className="text-sm">En productos seleccionados</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-bold mb-2">12 cuotas sin interés</h3>
                <p className="text-sm">En productos seleccionados</p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
