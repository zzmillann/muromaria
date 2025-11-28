import React from 'react';
import { Castle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card text-muted-foreground py-8 mt-20 border-t border-border transition-colors duration-300">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center mb-4">
          <Castle className="h-6 w-6 mr-2 text-primary" />
          <p className="font-bold text-lg text-foreground">MuroMar.IA</p>
        </div>
        <p className="text-sm">
          Tu fuente diaria de noticias sobre Inteligencia Artificial.
        </p>
        <div className="mt-4">
          <p className="text-xs">&copy; {currentYear} MuroMar.IA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;