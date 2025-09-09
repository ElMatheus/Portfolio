import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import GooeyNav from '@/hooks/useGooeyNav';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'Plataforma completa de e-commerce com painel administrativo, sistema de pagamentos e gestão de estoque.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    category: 'Full Stack',
    github: '#',
    live: '#'
  },
  {
    title: 'Design System',
    description: 'Sistema de design completo com componentes reutilizáveis, documentação interativa e tokens de design.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    tech: ['Storybook', 'TypeScript', 'Figma', 'CSS-in-JS'],
    category: 'Frontend',
    github: '#',
    live: '#'
  },
  {
    title: 'Task Management App',
    description: 'Aplicativo de gestão de tarefas com colaboração em tempo real, notificações e relatórios.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    tech: ['Next.js', 'Socket.io', 'MongoDB', 'PWA'],
    category: 'Full Stack',
    github: '#',
    live: '#'
  },
  {
    title: 'Portfolio Website',
    description: 'Site de portfólio moderno e responsivo com animações suaves e performance otimizada.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
    tech: ['React', 'Tailwind', 'Framer Motion', 'Vercel'],
    category: 'Frontend',
    github: '#',
    live: '#'
  },
  {
    title: 'API RESTful',
    description: 'API robusta com autenticação JWT, documentação Swagger e testes automatizados.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
    tech: ['Node.js', 'Express', 'JWT', 'Jest'],
    category: 'Backend',
    github: '#',
    live: '#'
  },
  {
    title: 'Mobile App',
    description: 'Aplicativo mobile híbrido para gerenciamento de finanças pessoais com sincronização na nuvem.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
    tech: ['React Native', 'Firebase', 'Redux', 'Expo'],
    category: 'Mobile',
    github: '#',
    live: '#'
  }
];

const categories = [
  { label: 'Todos', href: '#teste' },
  { label: 'Full Stack', href: '#teste' },
  { label: 'Frontend', href: '#teste' },
  { label: 'Backend', href: '#teste' },
  { label: 'Mobile', href: '#teste' }
]

const Projects = () => {
  const [activeCategory, setActiveCategory] = React.useState('Todos');

  const filteredProjects = activeCategory === 'Todos'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id='teste' className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Projetos</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Uma seleção dos meus trabalhos mais recentes, desde aplicações web completas até sistemas complexos.
          </p>
        </div>

        {/* Category Filter */}
         <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-2">
          <GooeyNav
            items={categories}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="group overflow-hidden bg-gradient-card border-card-border hover:shadow-purple transition-all duration-500">
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-44 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Quick Actions - Hidden on mobile */}
                <div className="absolute top-4 right-4 hidden sm:flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    className="p-2 bg-card/90 backdrop-blur-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-smooth"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.live}
                    className="p-2 bg-card/90 backdrop-blur-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-smooth"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                  <h3 className="text-lg sm:text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full self-start">
                    {project.category}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-primary/30 hover:bg-primary hover:text-primary-foreground"
                  >
                    <Github size={16} className="mr-2" />
                    Código
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary-dark"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;