import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'matheusgomesgoncalves.564@gmail.com',
    href: 'mailto:matheusgomesgoncalves.564@gmail.com'
  },
  {
    icon: Phone,
    title: 'Telefone',
    value: '+55 (19) 99465-7991',
    href: 'tel:+5519994657991'
  },
  {
    icon: MapPin,
    title: 'Localização',
    value: 'Valinhos, SP - Brasil',
    href: '#'
  }
];

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Vamos Conversar</h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Tem um projeto em mente? Vamos discutir como posso ajudar a transformar sua ideia em realidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-primary">
                Entre em Contato
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 sm:mb-8">
                Estou sempre aberto a discutir novos projetos, oportunidades criativas ou parcerias.
                Entre em contato e vamos criar algo incrível juntos.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="p-4 sm:p-6 bg-gradient-card border-card-border hover:shadow-soft transition-smooth group">
                  <a
                    href={contact.href}
                    className="flex items-center gap-3 sm:gap-4 group-hover:text-primary transition-colors"
                  >
                    <div className="p-2 sm:p-3 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                      <contact.icon size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-sm sm:text-base">{contact.title}</h4>
                      <p className="text-muted-foreground text-xs sm:text-sm break-all">{contact.value}</p>
                    </div>
                  </a>
                </Card>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-muted/50 rounded-lg">
              <h4 className="font-semibold mb-2 sm:mb-3 text-primary text-sm sm:text-base">Disponibilidade</h4>
              <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm">
                Atualmente disponível para novos projetos freelance e oportunidades de trabalho remoto.
                Tempo de resposta: 24-48 horas.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-4 sm:p-6 lg:p-8 bg-gradient-card border-card-border">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-background border-card-border focus:border-primary"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-background border-card-border focus:border-primary"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Assunto *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-background border-card-border focus:border-primary"
                  placeholder="Assunto da mensagem"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensagem *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-background border-card-border focus:border-primary resize-none"
                  placeholder="Conte-me sobre seu projeto..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary-dark text-primary-foreground shadow-glow transition-all duration-300 hover:shadow-purple"
              >
                <Send size={20} className="mr-2" />
                Enviar Mensagem
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;