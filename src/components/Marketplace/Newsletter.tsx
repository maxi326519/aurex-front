import React from 'react';

const Newsletter = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-xl font-bold mb-2">Recibí nuestras ofertas</h2>
        <p className="mb-4">Suscríbete para recibir las mejores promociones</p>
        <div className="max-w-md mx-auto flex">
          <input
            type="email"
            placeholder="Ingresa tu email"
            className="flex-1 py-2 px-4 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button className="bg-primary text-white py-2 px-6 rounded-r-md hover:bg-primary-dark">
            Suscribirme
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;