import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './LayOut/HomePage/homepage';
import Layout from './LayOut/layout.jsx';
import { Toaster } from './components/ui/toaster';
import Registro from './components/Registro';
import RegistroExitoso from './components/RegistroExitoso';
import InicioSesion from './components/InicioSesion';
import NewsPage from './components/NewsPage';

const enrutador = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'registro',
        element: <Registro />
      },
      {
        path: 'login',
        element: <InicioSesion />
      },
      {
        path: 'RegistroExitoso',
        element: <RegistroExitoso />
      },
      {
        path: 'noticia/:id',
        element: <NewsPage />
      },
      {
        path: '*',
        element: <p>404 Not Found</p>
      }
    ]
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={enrutador} />
      <Toaster />
    </>
  );
}

export default App;