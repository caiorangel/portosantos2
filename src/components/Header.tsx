import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="relative z-50 flex items-center mx-auto md:mx-0">
            <img 
              src="https://iarazap.com/estacionamentoportosantos.png" 
              alt="Estacionamento Porto Santos" 
              className="h-12 w-auto"
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Sobre', 'Pacotes', 'Diferenciais', 'Depoimentos', 'FAQ', 'Contato'].map((item) => (
              <a
                key={item}
                href={`/#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-900' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item}
              </a>
            ))}
            
            <a
              href="tel:+551321389144" 
              className="flex items-center gap-2 bg-blue-900 text-white px-6 py-2.5 rounded-full hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Phone size={18} />
              <span className="font-medium">13 2138-9144</span>
            </a>
          </div>

          <button 
            className="md:hidden absolute right-4 z-50 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X size={24} className={isScrolled ? 'text-gray-900' : 'text-white'} />
            ) : (
              <Menu size={24} className={isScrolled ? 'text-gray-900' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Menu with Animation */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white/95 backdrop-blur-md pt-20">
            <div className="flex flex-col p-6 space-y-4">
              {['Sobre', 'Pacotes', 'Diferenciais', 'Depoimentos', 'FAQ', 'Contato'].map((item) => (
                <a
                  key={item}
                  href={`/#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-blue-900 transition-colors duration-300 font-medium text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href="tel:+551321389144" 
                className="flex items-center justify-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition-all duration-300"
              >
                <Phone size={18} />
                <span className="font-medium">13 2138-9144</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}