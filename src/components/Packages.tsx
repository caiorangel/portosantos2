import React from 'react';
import { Car, Shield } from 'lucide-react';

const packages = [
  { nights: 3, price: 239 },
  { nights: 4, price: 279 },
  { nights: 5, price: 299 },
  { nights: 6, price: 359 },
  { nights: 8, price: 449 },
];

const features = [
  { title: 'Vagas Demarcadas', icon: Car },
  { title: 'Estacionamento Coberto', icon: Shield },
  { title: 'Seguro Porto Seguro', icon: Shield },
  { title: 'Serviço de Manobrista', icon: Car },
  { title: 'Transfer Terminal', icon: Car },
  { title: 'Transfer Particular', icon: Car },
];

export default function Packages() {
  return (
    <section id="pacotes" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nossos Pacotes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {packages.map((pkg) => (
            <div key={pkg.nights} className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-bold mb-2 text-center">{pkg.nights} Noites</h3>
              <p className="text-3xl font-bold text-blue-900 mb-4 text-center">
                R$ {pkg.price}
              </p>
              <ul className="space-y-2 mb-6">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <feature.icon className="shrink-0" size={16} />
                    <span>{feature.title}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`/checkout?package=${pkg.nights}`}
                className="block w-full text-center bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
              >
                Reservar
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}