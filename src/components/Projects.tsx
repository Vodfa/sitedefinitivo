import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Plataforma E-commerce',
    description: 'Uma solução completa de e-commerce construída com React, Node.js e MongoDB.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/vodfa/ecommerce',
    live: 'https://ecommerce.vodfa.com'
  },
  {
    title: 'Gerenciador de Tarefas',
    description: 'Uma ferramenta colaborativa de gerenciamento de tarefas com atualizações em tempo real.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800',
    tech: ['React', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com/vodfa/task-manager',
    live: 'https://tasks.vodfa.com'
  },
  {
    title: 'Painel Meteorológico',
    description: 'Monitoramento meteorológico em tempo real com previsões detalhadas e mapas.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800',
    tech: ['React', 'TypeScript', 'OpenWeather API'],
    github: 'https://github.com/vodfa/weather-app',
    live: 'https://weather.vodfa.com'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Projetos em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
                  >
                    <Github size={20} /> Código
                  </a>
                  <a
                    href={project.live}
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
                  >
                    <ExternalLink size={20} /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}