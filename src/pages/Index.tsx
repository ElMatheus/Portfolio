import React from 'react';
import Hero from '@/components/Portfolio/Hero';
import About from '@/components/Portfolio/About';
import Projects from '@/components/Portfolio/Projects';
import Contact from '@/components/Portfolio/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
              © {new Date().getFullYear()} • Desenvolvido por Matheus Gomes
            </div>
            <div className="flex items-center gap-6">
              <a target='_blank' href="mailto:matheusgomesgoncalves.564@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Email
              </a>
              <a target='_blank' href="https://www.linkedin.com/in/matheus-gomes-18a3b02b1" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                LinkedIn
              </a>
              <a target='_blank' href="https://github.com/ElMatheus" className="text-sm text-muted-foreground hover:text-primary transition-colors">
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
