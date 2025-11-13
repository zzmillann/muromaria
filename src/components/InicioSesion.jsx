import React from "react";
import { useNavigate } from 'react-router-dom';





const InicioSesion = () => {
const navegacion = useNavigate();
 const [login , setlogin] = React.useState({})


function handlechange(e){
  setlogin({
    ...login,
    [e.target.name]: e.target.value
  })
}


async function handleSubmit(e){
  e.preventDefault();

  const res = await fetch('https://muromaria.com/api/Cliente/login',{
    method: 'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body: JSON.stringify(login)
    });

    if(res.ok){
        // Login exitoso
        navegacion('/');
        console.log('Usuario ha iniciado sesión con éxito');
        }else{
        // Manejar error
        console.log('Error en el inicio de sesión');
        }
}


  return (
    <section className="py-20 px-4 bg-neutral-900/50">
  <div className="container mx-auto max-w-lg bg-neutral-800/70 p-8 rounded-2xl shadow-lg border border-red-500/20">
    <h2 className="text-3xl font-bold mb-6 text-white text-center">
      Iniciar Sesión
    </h2>

    <form className="space-y-5" onSubmit={handleSubmit}>
      {/* Nombre de Usuario o Correo */}
      <div>
        <label
          className="block text-sm font-semibold text-white mb-2"
          htmlFor="usuario"
        >
          Nombre de Usuario o Correo
        </label>
        <input
        onChange={handlechange}
            name='username'
          id="usuario"
          type="text"
          placeholder="usuario o correo@ejemplo.com"
          className="w-full px-4 py-2 rounded-lg bg-neutral-900/70 border border-red-500/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
        />
      </div>

      {/* Contraseña */}
      <div>
        <label
          className="block text-sm font-semibold text-white mb-2"
          htmlFor="password"
        >
          Contraseña
        </label>
        <input
         onChange={handlechange}
            name='password'
          id="password"
          type="password"
          placeholder="********"
          className="w-full px-4 py-2 rounded-lg bg-neutral-900/70 border border-red-500/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
        />
      </div>

      {/* Recordarme y Olvidé mi contraseña */}
      <div className="flex items-center justify-between text-white text-sm">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="w-4 h-4 accent-red-500 rounded"
          />
          <span>Recordarme</span>
        </label>
        <a
          href="#"
          className="text-red-400 hover:text-red-500 transition"
        >
          ¿Olvidaste tu contraseña?
        </a>
      </div>

      {/* Botón */}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white font-bold py-2 rounded-lg hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(239,68,68,0.4)]"
      >
        Iniciar Sesión
      </button>

      {/* Enlace para registrarse */}
      <p className="text-center text-sm text-slate-400 mt-4">
        ¿No tienes una cuenta?{' '}
        <a href="/registro" className="text-red-400 hover:text-red-500 font-semibold">
          Crear una cuenta
        </a>
      </p>
    </form>
  </div>
</section>

  )
}

export default InicioSesion;