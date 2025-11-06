import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RegistroExitoso = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-4 bg-neutral-900/50 min-h-screen flex items-center justify-center">
      <div className="container mx-auto max-w-md bg-neutral-800/70 p-10 rounded-2xl shadow-lg border border-red-500/20 text-center">
        <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-6" />
        <h2 className="text-3xl font-bold mb-4 text-white">
          ¡Registro Exitoso!
        </h2>
        <p className="text-slate-400 mb-8">
          Tu cuenta ha sido creada correctamente. Ya puedes iniciar sesión y disfrutar de todas las funcionalidades.
        </p>
        <Button
          onClick={() => navigate('/login')}
          className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white font-bold hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(239,68,68,0.4)]"
        >
          Ir a Iniciar Sesión
        </Button>
      </div>
    </section>
  );
};

export default RegistroExitoso;
