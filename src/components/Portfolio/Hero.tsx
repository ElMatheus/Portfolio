import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import PixelBlast from '../PixelBlast';
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
    <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="mb-8 sm:mb-12 animate-fade-in">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-primary bg-clip-text text-transparent">
          Matheus Gomes
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-muted-foreground mb-4 sm:mb-6">
          Desenvolvedor Full Stack
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
          Criando experiências digitais modernas e funcionais com código limpo e design intuitivo.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
        <Button
          size="lg"
          className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-primary-foreground shadow-glow transition-all duration-300 hover:shadow-purple"
          asChild
        >
          <a href="#projects">Ver Projetos</a>
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
          asChild
        >
          <a href="#contact">Contato</a>
        </Button>
      </div>

      {/* Social Links */}
      <div className="flex gap-4 sm:gap-6 justify-center mb-12 sm:mb-16">
        <a
          href="https://github.com/ElMatheus"
          target="_blank"
          className="p-2 sm:p-3 rounded-full bg-card hover:bg-primary transition-smooth text-muted-foreground hover:text-primary-foreground"
        >
          <Github size={20} className="sm:w-6 sm:h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/matheus-gomes-18a3b02b1"
          target="_blank"
          className="p-2 sm:p-3 rounded-full bg-card hover:bg-primary transition-smooth text-muted-foreground hover:text-primary-foreground"
        >
          <Linkedin size={20} className="sm:w-6 sm:h-6" />
        </a>
        <a
          href="mailto:matheusgomesgoncalves.564@gmail.com"
          target="_blank"
          className="p-2 sm:p-3 rounded-full bg-card hover:bg-primary transition-smooth text-muted-foreground hover:text-primary-foreground"
        >
          <Mail size={20} className="sm:w-6 sm:h-6" />
        </a>
      </div>

      {/* Scroll Indicator */}

    </div>
  </section>;
};
export default Hero;