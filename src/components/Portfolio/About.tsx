import React from 'react';
import { Card } from '@/components/ui/card';
import { Code, Palette, Zap, Heart } from 'lucide-react';

const skills = [
  {
    icon: Code,
    title: 'Desenvolvimento',
    description: 'React, Next.js, TypeScript, Node.js, Python',
    color: 'text-primary'
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'UI/UX, Figma, Tailwind CSS, Design Systems',
    color: 'text-accent'
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Otimização, SEO, Web Vitals, Acessibilidade',
    color: 'text-success'
  },
  {
    icon: Heart,
    title: 'Paixão',
    description: 'Código limpo, boas práticas, aprendizado contínuo',
    color: 'text-warning'
  }
];

const About = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Sobre Mim</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desenvolvedor apaixonado por tecnologia e design, sempre em busca de criar soluções inovadoras e experiências digitais memoráveis.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Bio */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">
              Transformando ideias em código
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Com mais de 5 anos de experiência no desenvolvimento web, especializo-me em criar aplicações modernas e responsivas que combinam funcionalidade robusta com design elegante.
              </p>
              <p>
                Minha abordagem é centrada no usuário, sempre priorizando a experiência e performance, utilizando as tecnologias mais atuais do mercado.
              </p>
              <p>
                Quando não estou codando, gosto de explorar novas tecnologias, contribuir para projetos open source e compartilhar conhecimento com a comunidade.
              </p>
            </div>
          </div>

          {/* Skills Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="p-6 bg-gradient-card border-card-border hover:shadow-soft transition-smooth group">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`p-3 rounded-full bg-muted ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                    <skill.icon size={28} />
                  </div>
                  <h4 className="font-semibold text-lg">{skill.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '50+', label: 'Projetos' },
            { number: '5+', label: 'Anos de Experiência' },
            { number: '20+', label: 'Clientes Satisfeitos' },
            { number: '∞', label: 'Linhas de Código' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;