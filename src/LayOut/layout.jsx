import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/header';
import Footer from './Footer/footer';
import ParticleBackground from '../components/ParticleBackground';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300 relative">
      <ParticleBackground />
      <Header />
      <main className="flex-grow relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );

}
export default Layout;