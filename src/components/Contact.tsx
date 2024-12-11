import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Vamos Conectar</h2>
          <p className="text-gray-600 mb-8">
            Estou sempre interessado em ouvir sobre novos projetos e oportunidades.
            Não hesite em entrar em contato!
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:vodfa@example.com"
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Mail size={20} /> E-mail
            </a>
            <a
              href="https://github.com/vodfa"
              className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
            >
              <Github size={20} /> GitHub
            </a>
          </div>
          <div className="flex justify-center gap-6 mt-8">
            <a href="https://linkedin.com/in/vodfa" className="text-gray-600 hover:text-gray-900">
              <Linkedin size={24} />
            </a>
            <a href="https://twitter.com/vodfa" className="text-gray-600 hover:text-gray-900">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}