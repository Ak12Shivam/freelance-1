
import React from 'react';
import { MapPinIcon, PhoneIcon, MailIcon, InstagramIcon } from './icons/Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-brand-light">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-semibold">Location</h3>
            <a href="https://www.google.com/maps/search/?api=1&query=2005+Walnut+St,Philadelphia,PA+19103" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start text-brand-light hover:text-brand-accent transition-colors">
              <MapPinIcon />
              <span className="ml-3">2005 Walnut St, Philadelphia, PA 19103</span>
            </a>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-serif font-semibold">Hours</h3>
            <p className="text-brand-light">Monday – Friday</p>
            <p className="text-brand-light">5:00 PM – 10:00 PM</p>
            <p className="text-brand-light">Saturday & Sunday: Closed</p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-semibold">Contact</h3>
             <a href="tel:2672395925" className="flex items-center justify-center md:justify-start text-brand-light hover:text-brand-accent transition-colors">
              <PhoneIcon />
              <span className="ml-3">(267) 239-5925</span>
            </a>
            <a href="mailto:info@myloupphl.com" className="flex items-center justify-center md:justify-start text-brand-light hover:text-brand-accent transition-colors">
              <MailIcon />
              <span className="ml-3">info@myloupphl.com</span>
            </a>
             <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start text-brand-light hover:text-brand-accent transition-colors">
              <InstagramIcon />
              <span className="ml-3">Follow us on Instagram</span>
            </a>
          </div>

        </div>
        <div className="mt-12 border-t border-brand-secondary pt-8 text-center text-sm text-brand-secondary">
          <p>&copy; {new Date().getFullYear()} My Loup. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
