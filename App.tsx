
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Reservations from './components/Reservations';
import PrivateEvents from './components/PrivateEvents';
import Faq from './components/Faq';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-light text-brand-dark font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Reservations />
        <PrivateEvents />
        <Faq />
      </main>
      <Footer />
    </div>
  );
};

export default App;
