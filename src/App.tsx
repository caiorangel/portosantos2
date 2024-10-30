import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CheckoutPage from './pages/CheckoutPage';
import { Toaster } from 'react-hot-toast';

const App: React.FC = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const selectedPackage = searchParams.get('package');

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      <Header />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route 
            path="/checkout" 
            element={<CheckoutPage initialPackage={selectedPackage ? parseInt(selectedPackage, 10) : 3} />} 
          />
        </Routes>
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Estacionamento Porto Santos. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;