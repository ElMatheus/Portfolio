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
      
    </nav>;
};
export default Navigation;