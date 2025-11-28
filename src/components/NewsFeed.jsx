import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const newsItems = [
  {
    category: 'APRENDIZAJE PROFUNDO',
    title: 'Nuevo modelo de IA supera a humanos en reconocimiento de patrones complejos',
    description: 'Investigadores de la Universidad de Stanford han desarrollado un modelo que puede identificar anomalías sutiles en datos médicos con una precisión del 99.8%.',
    image: 'Abstract neural network visualization',
    date: '05 Nov, 2025',
  },
  {
    category: 'IA GENERATIVA',
    title: 'La IA que compone bandas sonoras de películas en tiempo real',
    description: 'Una startup de Los Ángeles presenta "Symphony AI", una herramienta que genera música orquestal única basada en el tono emocional de una escena.',
    image: 'AI composing music on a futuristic interface',
    date: '05 Nov, 2025',
  },
  {
    category: 'ÉTICA EN IA',
    title: 'Debate global sobre la regulación de la IA autónoma en sistemas de defensa',
    description: 'Líderes mundiales se reúnen en la ONU para discutir un marco ético y legal para el uso de inteligencia artificial en aplicaciones militares.',
    image: 'World leaders at a discussion panel',
    date: '04 Nov, 2025',
  },
  {
    category: 'ROBÓTICA AVANZADA',
    title: 'Boston Dynamics presenta un nuevo robot con agilidad sin precedentes',
    description: 'El nuevo modelo "Lynx" puede navegar terrenos complejos, abrir puertas e incluso colaborar con humanos en tareas de construcción.',
    image: 'Advanced humanoid robot from Boston Dynamics',
    date: '05 Nov, 2025',
  },
  {
    category: 'PROCESAMIENTO DE LENGUAJE',
    title: 'GPT-5 se vuelve multimodal: Ahora entiende y genera imágenes y audio',
    description: 'OpenAI anuncia la nueva versión de su modelo de lenguaje, capaz de procesar y responder con texto, imágenes y clips de audio de forma nativa.',
    image: 'AI model generating images and audio from text',
    date: '04 Nov, 2025',
  },
  {
    category: 'COMPUTACIÓN CUÁNTICA',
    title: 'Avance clave en la corrección de errores cuánticos acelera la llegada de la IA cuántica',
    description: 'Un equipo de físicos del MIT ha logrado un hito que podría estabilizar los qubits, abriendo la puerta a algoritmos de IA mucho más potentes.',
    image: 'Visualization of quantum computing bits',
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
      className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border hover:border-primary/50 transition-all duration-300 group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <div className="relative">
        <img className="w-full h-56 object-cover" alt={item.image} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent"></div>
        <p className="absolute bottom-4 left-4 text-xs font-bold text-red-400 tracking-widest uppercase">{item.category}</p>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
        <div className="flex justify-between items-center text-muted-foreground">
          <div className="flex items-center text-xs">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{item.date}</span>
          </div>
          <button onClick={handleReadMore} className="flex items-center text-xs font-semibold text-red-400 group-hover:text-primary transition-colors duration-300">
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
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground">
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