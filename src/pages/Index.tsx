import React from 'react';
import Navigation from '@/components/Portfolio/Navigation';
import Hero from '@/components/Portfolio/Hero';
import About from '@/components/Portfolio/About';
import Projects from '@/components/Portfolio/Projects';
import Contact from '@/components/Portfolio/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      {/* Footer */}
      <footer className="py-12 px-6 border-t border-card-border/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-sm text-muted-foreground">
              © 2024 • Desenvolvido com React & Tailwind
            </div>
            <div className="flex items-center gap-6">
              <a href="mailto:contato@exemplo.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Email
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
