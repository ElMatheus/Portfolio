import React, { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Code, Palette, Zap, Heart } from 'lucide-react';
import { useCounterAnimation } from '@/hooks/useCounterAnimation';

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
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const AnimatedStat = ({ number, label, index }: { number: string; label: string; index: number }) => {
    // Extract numeric value from string (e.g., "50+" -> 50)
    const numericValue = number === '∞' ? 0 : parseInt(number.replace(/\D/g, ''));
    const animatedValue = useCounterAnimation({ 
      target: numericValue, 
      duration: 2000 + (index * 200), // Stagger animations
      trigger: isVisible 
    });

    const displayValue = number === '∞' ? '∞' : 
                        number.includes('+') ? `${animatedValue}+` : 
                        animatedValue.toString();

    return (
      <div className="text-center">
        <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
          {displayValue}
        </div>
        <div className="text-muted-foreground">
          {label}
        </div>
      </div>
    );
  };

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
        <div className="grid lg:grid-cols-3 gap-12 items-center mb-16">
          {/* Profile Photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="w-64 h-64 rounded-full bg-gradient-card border border-card-border overflow-hidden shadow-soft group-hover:shadow-lg transition-all duration-300">
                {/* Placeholder - substitua pela sua foto */}
                <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2">
                      <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-xs">Sua foto aqui</p>
                  </div>
                </div>
                {/* Para adicionar sua foto, substitua o div acima por:
                <img 
                  src="/caminho-para-sua-foto.jpg" 
                  alt="Foto de perfil" 
                  className="w-full h-full object-cover"
                />
                */}
              </div>
              {/* Efeito de borda animada */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
            </div>
          </div>

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
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '50+', label: 'Projetos' },
            { number: '5+', label: 'Anos de Experiência' },
            { number: '20+', label: 'Clientes Satisfeitos' },
            { number: '∞', label: 'Linhas de Código' }
          ].map((stat, index) => (
            <AnimatedStat 
              key={index} 
              number={stat.number} 
              label={stat.label} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;