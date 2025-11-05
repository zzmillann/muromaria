import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="text-center py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-red-600 to-red-900 rounded-full blur-3xl opacity-30"></div>
          <h1 className="relative text-5xl md:text-7xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300 leading-tight">
            El Futuro de la IA,
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-400">
              más allá de los muros.
            </span>
          </h1>
        </motion.div>

        <motion.p
          className="max-w-2xl mx-auto mt-6 text-lg md:text-xl text-slate-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Mantente a la vanguardia con las últimas noticias, análisis y descubrimientos en el mundo de la Inteligencia Artificial. Tu dosis diaria de innovación.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10"
        >
          <Button onClick={scrollToPricing} size="lg" className="bg-gradient-to-r from-red-600 to-red-800 text-white font-bold text-lg px-8 py-6 rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_25px_rgba(239,68,68,0.5)]">
            Ver Planes <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;