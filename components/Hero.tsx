
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <img src="https://picsum.photos/seed/myloup-hero/1920/1080" alt="Interior of My Loup restaurant" className="absolute inset-0 w-full h-full object-cover"/>
      <div className="relative z-10 text-center">
        <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tight mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
          My Loup
        </h1>
        <p className="text-xl md:text-2xl font-sans font-light mb-8" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
          French-Inspired Market Cuisine in Philadelphia
        </p>
        <a href="#reservations" 
           onClick={(e) => {
             e.preventDefault();
             document.querySelector('#reservations')?.scrollIntoView({ behavior: 'smooth' });
           }}
           className="bg-brand-accent text-white font-bold py-3 px-8 text-lg rounded-sm hover:bg-opacity-90 transition-all duration-300 shadow-lg">
          Make a Reservation
        </a>
      </div>
    </section>
  );
};

export default Hero;
