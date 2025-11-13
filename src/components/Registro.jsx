import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';



const Registro = () => {


const navegacion = useNavigate();
const [terminosAceptados, setTerminosAceptados] = useState(false);
const [form , Setform] = useState({})

function handleChange(e){
  Setform({
    ...form,
    [e.target.name]: e.target.value
  })
}


async function handleSubmit(e){
  e.preventDefault();

  if(!terminosAceptados){
    alert('Debes aceptar los términos y condiciones para registrarte.');
    return;
  } 

  const res = await fetch('http://31.97.69.178:3000/api/Cliente/registro',{
    method: 'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body: JSON.stringify(form)

    
  });

  if(res.ok){
    // Registro exitoso
    navegacion('/RegistroExitoso');
    console.log('Usuario registrado con éxito');
  }else{
    // Manejar error
    console.log('Error en el registro');
  }


}




  return (
    <section className="py-20 px-4 bg-neutral-900/50">
      <div className="container mx-auto max-w-lg bg-neutral-800/70 p-8 rounded-2xl shadow-lg border border-red-500/20">
        <h2 className="text-3xl font-bold mb-6 text-white text-center">
          Crear Cuenta
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Nombre de Usuario */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2" htmlFor="username">
              Nombre de Usuario
            </label>
            <input
            name='username'
             onChange={handleChange}
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
            onChange={handleChange}
            name='email'
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
            name='password'
            onChange={handleChange}
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
              onChange={(e) => setTerminosAceptados(e.target.checked)}
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
