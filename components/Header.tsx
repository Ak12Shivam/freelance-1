
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#menu', label: 'Menu' },
    { href: '#reservations', label: 'Reservations' },
    { href: '#events', label: 'Private Events' },
    { href: '#faq', label: 'FAQ' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };

  const linkClasses = "block py-2 px-3 text-brand-secondary hover:text-brand-accent transition-colors duration-300";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-2xl font-serif font-bold text-brand-dark hover:text-brand-accent transition-colors">
            My Loup
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-sm font-semibold text-brand-secondary hover:text-brand-accent transition-colors duration-300 uppercase tracking-wider">
                {link.label}
              </a>
            ))}
          </nav>
           <div className="hidden md:flex items-center space-x-4">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-brand-secondary hover:text-brand-accent transition-colors duration-300 uppercase tracking-wider">Gift Cards</a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-brand-secondary hover:text-brand-accent transition-colors duration-300 uppercase tracking-wider">Swag</a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-dark focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="block text-center py-2 text-brand-secondary hover:text-brand-accent transition-colors duration-300">
              {link.label}
            </a>
          ))}
            <a href="#" target="_blank" rel="noopener noreferrer" className="block text-center py-2 text-brand-secondary hover:text-brand-accent transition-colors duration-300">Gift Cards</a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="block text-center py-2 text-brand-secondary hover:text-brand-accent transition-colors duration-300">Swag</a>
        </div>
      )}
    </header>
  );
};

export default Header;
