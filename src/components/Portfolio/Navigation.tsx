import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
const navItems = [{
  label: 'Início',
  href: '#home'
}, {
  label: 'Sobre',
  href: '#about'
}, {
  label: 'Projetos',
  href: '#projects'
}, {
  label: 'Contato',
  href: '#contact'
}];
const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        

        {/* Mobile Menu */}
        {isOpen && <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md">
              {navItems.map(item => <button key={item.href} onClick={() => scrollToSection(item.href)} className="block w-full text-left px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary transition-colors">
                  {item.label}
                </button>)}
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;