import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../../components/hero';
import NewsFeed from '../../components/NewsFeed';
import AudioNews from '../../components/audionews';
import Pricing from '../../components/pricing';
import Personalize from '../../components/Personalize';
import InicioSesion from '../../components/InicioSesion';
const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>MuroMar.IA - Noticias Diarias de Inteligencia Artificial</title>
        <meta
          name="description"
          content="Tu muro diario de noticias sobre Inteligencia Artificial. Mantente al día con los últimos avances, análisis y tendencias del mundo de la IA, más allá de los muros."
        />
      </Helmet>
      <Hero />
      <NewsFeed />
      <InicioSesion />
      <AudioNews />
      <Personalize />
      <Pricing />
    </>
  );
};

export default HomePage;