import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, Settings2, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';

const topics = [
  'Automoción eléctrica', 'Trading y criptomonedas', 'Inteligencia artificial', 'Tecnología y gadgets',
  'Ciencia y avances médicos', 'Cambio climático', 'Startups y emprendimiento', 'Economía global',
  'Finanzas personales', 'Videojuegos y eSports', 'Cine y cultura digital', 'Exploración espacial',
  'Ciberseguridad', 'Redes sociales', 'Moda y estilo de vida', 'Deportes y rendimiento',
  'Alimentación y salud', 'Innovación en transporte', 'Educación digital', 'Realidad virtual y metaverso'
];

const Personalize = () => {
  const [selectedTopics, setSelectedTopics] = useState(['Inteligencia artificial']);
  const { toast } = useToast();

  const toggleTopic = (topic) => {
    setSelectedTopics(prev =>
      prev.includes(topic)
        ? prev.filter(t => t !== topic)
        : [...prev, topic]
    );
  };

  const handleSaveChanges = () => {
    toast({
        title: "💾 Preferencias Guardadas",
        description:  "¡Tus temas han sido seleccionados! La personalización del feed aún no está implementada."
    });
  };

  return (
    <motion.section
      className="py-20 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto max-w-4xl text-center">
        <div className="inline-block bg-gradient-to-r from-red-500 to-orange-500 p-3 rounded-full mb-6 shadow-[0_0_20px_rgba(239,68,68,0.5)]">
          <Settings2 className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
          Personaliza tus Noticias
        </h2>
        <p className="text-lg text-slate-300 mb-10">
          Elige tus temas de interés y recibe un feed de noticias hecho a tu medida.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {topics.map(topic => (
            <motion.button
              key={topic}
              onClick={() => toggleTopic(topic)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border-2",
                selectedTopics.includes(topic)
                  ? 'bg-red-500/20 border-red-400 text-white'
                  : 'bg-neutral-800/60 border-neutral-700 text-slate-300 hover:border-red-400 hover:text-white'
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {selectedTopics.includes(topic) && <Check className="inline-block w-4 h-4 mr-2" />}
              {topic}
            </motion.button>
          ))}
        </div>
        
        <Button onClick={handleSaveChanges} size="lg" className="bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold text-lg px-8 py-6 rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_25px_rgba(239,68,68,0.5)]">
           <Sparkles className="mr-2 h-5 w-5" /> Guardar Preferencias
        </Button>
      </div>
    </motion.section>
  );
};

export default Personalize;