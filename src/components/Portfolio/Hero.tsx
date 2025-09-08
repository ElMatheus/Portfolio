import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import PixelBlast from '../PixelBlast';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with PixelBlast */}
      <div className="absolute inset-0 w-full h-full">
        <PixelBlast
          variant="circle"
          pixelSize={6}
          color="#B19EEF"
          patternScale={3}
          patternDensity={1.2}
          pixelSizeJitter={0.5}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.6}
          edgeFade={0.25}
          transparent
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-dark opacity-60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Desenvolvedor
          </h1>
          <h2 className="text-3xl md:text-5xl font-light text-muted-foreground mb-6">
            Full Stack
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Criando experiências digitais modernas e funcionais com código limpo e design intuitivo.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-glow transition-all duration-300 hover:shadow-purple">
            Ver Projetos
          </Button>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth">
            Contato
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center mb-16">
          <a href="#" className="p-3 rounded-full bg-card hover:bg-primary transition-smooth text-muted-foreground hover:text-primary-foreground">
            <Github size={24} />
          </a>
          <a href="#" className="p-3 rounded-full bg-card hover:bg-primary transition-smooth text-muted-foreground hover:text-primary-foreground">
            <Linkedin size={24} />
          </a>
          <a href="#" className="p-3 rounded-full bg-card hover:bg-primary transition-smooth text-muted-foreground hover:text-primary-foreground">
            <Mail size={24} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={32} className="text-primary opacity-70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;