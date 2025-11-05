import React from 'react';
import { motion } from 'framer-motion';
import { Castle, Rss } from 'lucide-react'; // Changed icon
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Header = () => {
  const { toast } = useToast();

  const handleSubscribe = () => {
    document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 py-3 px-4 bg-black/50 backdrop-blur-lg border-b border-red-500/10">
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Castle className="h-8 w-8 text-red-500" /> {/* Changed icon */}
          <p className="font-bold text-xl tracking-tighter text-white">MuroMar.IA</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button onClick={handleSubscribe} className="bg-gradient-to-r from-red-600 to-red-800 text-white font-bold hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(239,68,68,0.4)]">
            <Rss className="mr-2 h-4 w-4" />
            Suscribirse
          </Button>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;