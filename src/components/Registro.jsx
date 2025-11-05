import React from 'react';
import { Button } from '@/components/ui/button';

const Registro = () => {
  return (
    <section className="py-20 px-4 bg-neutral-900/50">
      <div className="container mx-auto max-w-lg bg-neutral-800/70 p-8 rounded-2xl shadow-lg border border-red-500/20">
        <h2 className="text-3xl font-bold mb-6 text-white text-center">
          Crear Cuenta
        </h2>

        <form className="space-y-5">
          {/* Nombre de Usuario */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2" htmlFor="username">
              Nombre de Usuario
            </label>
            <input
              id="username"
              type="text"
              placeholder="Tu nombre de usuario"
              className="w-full px-4 py-2 rounded-lg bg-neutral-900/70 border border-red-500/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
            />
          </div>

          {/* Correo Electrónico */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2" htmlFor="email">
              Correo Electrónico
            </label>
            <input
              id="email"
              type="email"
              placeholder="correo@ejemplo.com"
              className="w-full px-4 py-2 rounded-lg bg-neutral-900/70 border border-red-500/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
            />
          </div>

          {/* Contraseña */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2" htmlFor="password">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              placeholder="********"
              className="w-full px-4 py-2 rounded-lg bg-neutral-900/70 border border-red-500/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
            />
          </div>

          {/* Checkbox Términos */}
          <div className="flex items-center space-x-2 text-white text-sm">
            <input
              type="checkbox"
              id="terms"
              className="w-4 h-4 accent-red-500 rounded"
            />
            <label htmlFor="terms">
              Acepto los <span className="text-red-400 font-semibold">términos y condiciones</span>
            </label>
          </div>

          <div className="flex items-center space-x-2 text-white text-sm">
            <input
              type="checkbox"
              id="newsletter"
              className="w-4 h-4 accent-red-500 rounded"
            />
            <label htmlFor="newsletter">
              Suscribirme al boletín de noticias
            </label>
          </div>

          {/* Botón */}
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white font-bold hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(239,68,68,0.4)]"
          >
            Registrarse
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Registro;
