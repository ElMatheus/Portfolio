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
      <div className="max-w-4xl mx-auto">
        {/* Main Content - Clean Layout */}
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Large Profile Photo */}
          <div className="relative group">
            <div className="w-80 h-80 rounded-full bg-gradient-card border border-card-border overflow-hidden shadow-soft group-hover:shadow-lg transition-all duration-500">
              <img
                src="/avatar.webp"
                alt="Foto de perfil"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 to-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-2xl"></div>
          </div>

          {/* Tagline */}
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Desenvolvedor Full-Stack
            </h2>
            <p className="text-xl text-muted-foreground">
              Criando experiências digitais modernas com código limpo e design elegante
            </p>
          </div>

          {/* Minimal Stats */}
          <div ref={statsRef} className="grid grid-cols-4 gap-12 pt-8">
            {[
              { number: '50+', label: 'Projetos' },
              { number: '5+', label: 'Anos' },
              { number: '20+', label: 'Clientes' },
              { number: '∞', label: 'Código' }
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
      </div>
    </section>
  );
};

export default About;