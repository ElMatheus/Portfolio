import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import GooeyNav from '@/hooks/useGooeyNav';
import { fetchProjects, fetchTecnologiesProject } from '@/actions/api';
import { Skeletons } from '../ui/skeleton-cards';

const projects = [
  {
    name: 'newpack-website',
    category: 'Frontend',
  },
  {
    name: 'HablaBien',
    category: 'Mobile',
  },
  {
    name: 'NEWPACK-backend-2.0',
    category: 'Backend',
  },
  {
    name: 'NEWPACK-app',
    category: 'Mobile',
  },
  {
    name: 'GestaoEsportiva-FRONTEND-LU',
    category: 'Frontend',
  },
  {
    name: 'overnote',
    category: 'Full_Stack',
  },
  {
    name: 'GestaoEsportiva-BACKEND',
    category: 'Backend',
  },
  {
    name: 'planet-mobile',
    category: 'Mobile',
  },
  {
    name: 'treino',
    category: 'Full_Stack',
  },
];

const categories = [
  { label: 'Todos', value: 'all' },
  { label: 'Full Stack', value: 'full_stack' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Backend', value: 'backend' },
  { label: 'Mobile', value: 'mobile' }
]

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [projectsList, setProjectsList] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const cacheTime = 5 * 60 * 1000; // 5 minutos
      const projectsData = [];

      for (const project of projects) {
        if (project.category.toLowerCase() != activeCategory && activeCategory != 'all') {
          continue;
        }
        const cacheKey = `github-project-${project.name}`;
        const cachedProject = localStorage.getItem(cacheKey);

        if (cachedProject) {
          console.log(`Usando cache para o repositório ${project.name}`);

          const { data, timestamp } = JSON.parse(cachedProject);
          if (Date.now() - timestamp < cacheTime) {
            projectsData.push(data);
            continue;
          }
        }

        console.log("Buscando dados para o repositório", project.name);

        const response = await fetchProjects(project.name);
        const techs = await fetchTecnologiesProject(project.name);
        if (response.total_count > 0) {
          const projectData = {
            ...project,
            tech: techs,
            ...response.items[0],
          };
          projectsData.push(projectData);

          // Salvar no cache 
          localStorage.setItem(cacheKey, JSON.stringify({
            data: projectData,
            timestamp: Date.now()
          }));
        } else {
          console.warn(`Repositório ${project.name} não encontrado.`);
        }
      }
      setLoading(false);
      setProjectsList(projectsData);
    }

    fetchData();
  }, [activeCategory]);

  const teste = () => {
    console.log(projectsList);
  }

  const filteredProjectsCount = activeCategory === 'all'
    ? projects.length
    : projects.filter(p => p.category.toLowerCase() === activeCategory).length;

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Projetos</h2>
          <p onClick={teste} className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
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
            onChange={setActiveCategory}
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {
            loading ? (
              <Skeletons number={filteredProjectsCount} />
            ) : (
              projectsList.map((project, index) => (
                <Card key={index} className="group overflow-hidden bg-gradient-card border-card-border hover:shadow-purple transition-all duration-500">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={`Imagem do projeto ${project.name}`}
                      className="w-full h-44 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Quick Actions - Hidden on mobile */}
                    <div className="absolute top-4 right-4 hidden sm:flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.html_url}
                        className="p-2 bg-card/90 backdrop-blur-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-smooth"
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href={project.homepage}
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
                        {project.name}
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
                      {project.tech.map((tech: string, techIndex: number) => (
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
              ))
            )
          }
        </div>
      </div>
    </section>
  );
};

export default Projects;