import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const newsItems = [
  {
    category: 'IA GENERATIVA',
    title: 'OpenAI lanza GPT-5.1 con capacidades multimodales avanzadas',
    description: 'OpenAI anuncia GPT-5.1, que ahora puede generar texto, imágenes y audio con coherencia contextual mejorada, marcando un salto significativo en IA generativa.',
    image: 'AI model generating text, images, and audio on a futuristic interface',
    date: '05 Nov, 2025',
  },
  {
    category: 'ROBÓTICA AVANZADA',
    title: 'Boston Dynamics lanza robot colaborativo con IA adaptativa',
    description: 'El nuevo robot “Lynx Pro” aprende tareas en tiempo real junto a humanos, adaptándose automáticamente a entornos complejos de trabajo y construcción.',
    image: 'Humanoid robot assisting humans in construction tasks',
    date: '05 Nov, 2025',
  },
  {
    category: 'ÉTICA EN IA',
    title: 'ONU debate marco regulatorio global para IA autónoma',
    description: 'Expertos y líderes mundiales discuten un marco legal y ético para la IA en defensa, transporte autónomo y sistemas de seguridad.',
    image: 'World leaders at UN discussing AI regulations',
    date: '05 Nov, 2025',
  },
  {
    category: 'COMPUTACIÓN CUÁNTICA',
    title: 'MIT acelera IA cuántica con corrección de errores avanzada',
    description: 'Investigadores del MIT logran avances en corrección de errores cuánticos, aumentando la fiabilidad de futuros sistemas de IA cuántica.',
    image: 'Visualization of stabilized qubits in quantum computer',
    date: '04 Nov, 2025',
  },
  {
    category: 'APRENDIZAJE PROFUNDO',
    title: 'Modelo de IA detecta anomalías médicas con 99.9% de precisión',
    description: 'Investigadores en Stanford presentan un modelo de deep learning capaz de identificar patrones sutiles en imágenes médicas, superando a especialistas humanos.',
    image: 'Deep learning neural network analyzing medical scans',
    date: '04 Nov, 2025',
  },
  {
    category: 'IA CREATIVA',
    title: 'IA genera bandas sonoras de películas en tiempo real',
    description: 'Symphony AI permite a directores y creadores producir música orquestal adaptativa al tono de la escena, revolucionando la producción audiovisual.',
    image: 'AI composing cinematic music with futuristic interface',
    date: '03 Nov, 2025',
  },
];

const NewsCard = ({ item, index }) => {
  const { toast } = useToast();

  const handleReadMore = () => {
    toast({
      title: "📰 Artículo Completo",
      description: "🚧 ¡La lectura de artículos completos aún no está implementada! 🚀",
    });
  };

  return (
    <motion.div
      className="bg-neutral-900/50 rounded-2xl overflow-hidden shadow-lg border border-red-500/20 hover:border-red-500/50 transition-all duration-300 group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative">
        <img class="w-full h-56 object-cover" alt={item.image} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent"></div>
        <p className="absolute bottom-4 left-4 text-xs font-bold text-red-400 tracking-widest uppercase">{item.category}</p>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
        <p className="text-slate-400 text-sm mb-4">{item.description}</p>
        <div className="flex justify-between items-center text-slate-500">
          <div className="flex items-center text-xs">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{item.date}</span>
          </div>
          <button onClick={handleReadMore} className="flex items-center text-xs font-semibold text-red-400 group-hover:text-white transition-colors duration-300">
            Leer más <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const NewsFeed = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
          Últimas Noticias de IA
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <NewsCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsFeed;