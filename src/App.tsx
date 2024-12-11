import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="py-6 bg-gray-50">
        <div className="container mx-auto px-4 text-center text-gray-600">
          © {new Date().getFullYear()} Vodfa. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}

export default App;