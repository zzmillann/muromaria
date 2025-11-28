import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../../components/hero';
import NewsCarousel from '../../components/NewsCarousel';
import NewsFeed from '../../components/NewsFeed';
import AudioNews from '../../components/audionews';
import Pricing from '../../components/pricing';
import Personalize from '../../components/Personalize';

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
      <div className="container mx-auto px-4 py-8">
        <NewsCarousel />
      </div>
      <NewsFeed />
      <AudioNews />
      <Personalize />
      <Pricing />
    </>
  );
};

export default HomePage;