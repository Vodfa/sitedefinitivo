import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            src="https://i.imgur.com/oD2SuCf.png" // Substitua pelo link da sua imagem
            alt="Logo"
            className="h-12 w-13"
          />
          <h1 className="text-2xl font-bold text-gray-800">Vodfa</h1>
        </div>
        <nav className="flex items-center gap-6">
          <a href="#about" className="text-gray-600 hover:text-gray-900">Sobre</a>
          <a href="#projects" className="text-gray-600 hover:text-gray-900">Projetos</a>
          <a href="#skills" className="text-gray-600 hover:text-gray-900">Habilidades</a>
          <div className="flex items-center gap-4">
            <a href="https://github.com/vodfa" className="text-gray-600 hover:text-gray-900">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/vodfa" className="text-gray-600 hover:text-gray-900">
              <Linkedin size={20} />
            </a>
            <a href="mailto:vodfa@example.com" className="text-gray-600 hover:text-gray-900">
              <Mail size={20} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
