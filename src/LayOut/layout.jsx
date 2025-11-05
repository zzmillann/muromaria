import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/header';
import Footer from './Footer/footer';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );

}
export default Layout;