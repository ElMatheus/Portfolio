import React, { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Code, Palette, Zap, Heart } from 'lucide-react';
import CountUp from '@/hooks/useCounterAnimation';
import GradientText from '@/hooks/useGradientText';

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
    // Remove '+' if present, keep '∞' as is
    const numericValue = number === '∞' ? '∞' : parseFloat(number.replace('+', ''));

    return (
      <div className="text-center">
        <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
          <GradientText
            colors={['hsl(var(--primary))', 'hsl(var(--primary-dark)), hsl(var(--primary))', 'hsl(var(--primary-dark))', 'hsl(var(--primary))']}
            animationSpeed={3}
            showBorder={false}
            className="custom-class"
          >
            {numericValue === '∞' ? (
              '∞'
            ) : (
              <div>
                <CountUp
                  from={0}
                  to={numericValue}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                +
              </div>
            )}
          </GradientText>
        </div>
        <div className="text-muted-foreground">
          {label}
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Main Content - Clean Layout */}
        <div className="flex flex-col items-center text-center space-y-8 sm:space-y-12">
          {/* Large Profile Photo */}
          <div className="relative group">
            <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-card border border-card-border overflow-hidden shadow-soft group-hover:shadow-lg transition-all duration-500">
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
          <div className="space-y-4 sm:space-y-6 max-w-4xl px-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Desenvolvedor Full-Stack
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              Vasta experiência em tecnologias como JavaScript, PostgreSQL, Python e muito mais. Estou sempre atualizado com as melhores práticas e tendências do mercado.
            </p>
          </div>

          {/* Minimal Stats */}
          <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 pt-4 sm:pt-8 w-full max-w-4xl">
            {[
              { number: '50+', label: 'Projetos' },
              { number: '3+', label: 'Anos' },
              { number: '10+', label: 'Clientes' },
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