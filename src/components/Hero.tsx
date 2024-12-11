import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Desenvolvedor Full Stack <br />
            Criando Experiências Digitais
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Desenvolvo soluções elegantes para problemas complexos usando tecnologias modernas.
            Apaixonado por criar aplicações eficientes, escaláveis e amigáveis.
          </p>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Ver Projetos <ArrowRight size={20} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
            >
              Contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}