import React from 'react';
import { motion } from 'framer-motion';
import { Castle, Rss, UserPlus } from 'lucide-react'; // LogIn para iniciar sesión, UserPlus para registrarse
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const handleSubscribe = () => {
    const el = document.getElementById('pricing');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLogin = () => {
    alert("Aquí iría la lógica de iniciar sesión"); // placeholder
  };


  return (
    <header className="sticky top-0 z-50 py-3 px-4 bg-black/50 backdrop-blur-lg border-b border-red-500/10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Castle className="h-8 w-8 text-red-500" />
          <p className="font-bold text-xl tracking-tighter text-white">MuroMar.IA</p>
        </motion.div>

        {/* Botones */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          {/* Botón Suscribirse */}
          <Button
            onClick={handleSubscribe}
            className="bg-gradient-to-r from-red-600 to-red-800 text-white font-bold hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(239,68,68,0.4)] flex items-center"
          >
            <Rss className="mr-2 h-4 w-4" />
            Suscribirse
          </Button>

          {/* Botón Iniciar sesión */}
          <Button
            onClick={handleLogin}
            className="bg-gradient-to-r from-gray-700 to-gray-900 text-white font-bold hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(100,100,100,0.4)] flex items-center"
          >
            <Link to="/login" />
            Iniciar sesión
          </Button>

          {/* Botón Registrarse */}
             <Link to="/registro" >
          <Button
          
            className="bg-gradient-to-r from-green-600 to-green-800 text-white font-bold hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(34,197,94,0.4)] flex items-center"
          >
            <UserPlus className="mr-2 h-4 w-4" />
            Registrarse
          
          </Button>
          </Link>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
