import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { PlayCircle, Mic } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const AudioNews = () => {
  const { toast } = useToast();

  const handlePlay = () => {
    toast({
      title: "🎙️ Reproduciendo Noticias de IA",
      description: "🚧 ¡Esta función aún no está implementada, pero pronto lo estará! 🚀",
    });
  };

  return (
    <motion.section
      className="py-20 px-4 bg-neutral-900/50 rounded-3xl my-16 border border-red-800/20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto text-center">
        <div className="inline-block bg-gradient-to-r from-red-500 to-orange-500 p-3 rounded-full mb-6 shadow-[0_0_20px_rgba(239,68,68,0.5)]">
          <Mic className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
          Audio-Noticias de IA
        </h2>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
          ¿No tienes tiempo de leer? Dale al play y una IA te contará las noticias más importantes del día sobre Inteligencia Artificial.
        </p>
        <div className="bg-neutral-900/60 rounded-full max-w-md mx-auto p-4 flex items-center justify-between shadow-lg border border-neutral-700">
          <div className="flex items-center space-x-4">
             <img class="w-16 h-16 rounded-full border-2 border-red-500" alt="AI news cover" src="https://images.unsplash.com/photo-1677442136019-21780ecad995" />
            <div>
              <p className="font-bold text-white">Noticias diarias de IA</p>
              <p className="text-sm text-slate-400">Resumen del 05 Nov, 2025</p>
            </div>
          </div>
          <Button
            onClick={handlePlay}
            size="icon"
            className="bg-gradient-to-br from-red-600 to-orange-600 rounded-full w-16 h-16 hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(239,68,68,0.4)]"
          >
            <PlayCircle className="h-10 w-10 text-white" />
          </Button>
        </div>
      </div>
    </motion.section>
  );
};

export default AudioNews;