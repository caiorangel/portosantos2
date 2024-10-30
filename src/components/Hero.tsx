import React, { useState } from 'react';
import { MessageCircleMore, Phone, ChevronDown, Shield, Clock, Car } from 'lucide-react';
import PriceCalculator from './PriceCalculator';

export default function Hero() {
  const [availableSpots] = useState(5);

  const scrollToFeatures = () => {
    document.getElementById('diferenciais')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen w-full flex items-center">
      {/* Enhanced Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-900/85 to-blue-800/90 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover transform scale-150"
        >
          <source src="https://iarazap.com/navio.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Main Content */}
      <div className="relative z-20 w-full py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            {/* Left Column */}
            <div className="flex-1 text-center lg:text-left max-w-2xl">
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                {[
                  { icon: Shield, text: "Seguro Incluso" },
                  { icon: Clock, text: "24/7 Monitorado" },
                  { icon: Car, text: "Transfer Grátis" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <item.icon className="w-4 h-4 text-green-400" />
                    <span className="text-white/90 text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Estacionamento Seguro no
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent block mt-2">
                  Porto de Santos
                </span>
              </h1>

              {/* Available Spots Alert */}
              <div className="inline-block mb-8 px-4 py-2 bg-red-500/20 backdrop-blur-sm rounded-lg border border-red-500/30">
                <p className="text-red-200 font-medium">
                  🚨 Apenas {availableSpots} vagas disponíveis para hoje!
                </p>
              </div>

              <p className="text-xl mb-8 text-blue-100/90 leading-relaxed">
                Seu veículo protegido a apenas 8 minutos do Terminal, com transfer exclusivo 
                e seguro Porto Seguro incluso em todos os pacotes.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="https://wa.me/5513991260211"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary group flex items-center gap-3 w-full sm:w-auto justify-center"
                >
                  <MessageCircleMore className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Reserve via WhatsApp</span>
                </a>
                <a
                  href="tel:+551321389144"
                  className="btn-secondary group flex items-center gap-3 w-full sm:w-auto justify-center"
                >
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Ligar Agora</span>
                </a>
              </div>
            </div>

            {/* Right Column - Calculator */}
            <div className="flex-1 w-full max-w-md">
              <PriceCalculator />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <button 
        onClick={scrollToFeatures}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white
                 transition-all duration-300 animate-bounce hover:scale-110"
        aria-label="Scroll to features"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}