import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="font-bold mb-4">Compan Online</h3>
            <ul className="space-y-2">
              <li>Registration</li>
              <li>Medical Notes</li>
              <li>Medical on paper</li>
              <li>Fibernacomies</li>
              <li>Gaussian eir-protitos</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-bold mb-4">Domains</h3>
            <ul className="space-y-2">
              <li>Diagnosis dft del paine</li>
              <li>Diagnosis dft del formato</li>
              <li>Diagnosis dft del ni mitat</li>
              <li>Cortisol abiert Fender</li>
              <li>Cortisol abiert Barker</li>
              <li>Cortisol, dft Cricht Monday</li>
              <li>Diagnosis de Medical</li>
              <li>Cortisol en electroadministrator</li>
              <li>Outlet en electroidentificator</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>Tickets los productos</li>
              <li>Municipales</li>
              <li>Drumma</li>
              <li>Cortisolas de Seguridad</li>
              <li>Administrativo Rician</li>
              <li>Improvement</li>
              <li>Guidelines</li>
              <li>Alto Administración</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-bold mb-4">Emprens</h3>
            <ul className="space-y-2">
              <li>Trabajd con Maestros</li>
              <li>Siemens Siemens</li>
              <li>Terminality Comissiones</li>
              <li>Institutos de Comisión</li>
              <li>Políticas de Promedad</li>
              <li>Noticias</li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-300 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="font-bold">Medios de pago</h3>
            <div className="flex mt-2">
              <span className="mr-2">f</span>
              <span className="mr-2">X</span>
              <span className="mr-2">n</span>
              <span className="mr-2">O</span>
              <span>in</span>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p>Atenciado al cliente: 0800-555-AUBCY, 0800-399-AUBC</p>
            <p className="text-sm mt-2">
              © 2023 CompanOnline - Todos los derechos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
