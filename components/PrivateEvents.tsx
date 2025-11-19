
import React from 'react';
import Section from './Section';
import { UsersIcon, WineIcon, CalendarIcon } from './icons/Icons';

const EventCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="text-center">
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-accent text-white mx-auto mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-brand-dark">{title}</h3>
    <p className="mt-1 text-brand-secondary">{description}</p>
  </div>
);

const PrivateEvents: React.FC = () => {
  return (
    <Section id="events" title="Private Events">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <p className="text-lg text-brand-secondary">
          Host your next gathering at My Loup. Our intimate space is perfect for celebrations, corporate dinners, and special occasions.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto mb-16">
        <EventCard 
          icon={<UsersIcon />}
          title="Seated Dinner"
          description="Accommodates up to 36 guests for an elegant seated dining experience."
        />
        <EventCard 
          icon={<WineIcon />}
          title="Cocktail Reception"
          description="Host up to 50 guests for a sophisticated cocktail-style event."
        />
        <EventCard 
          icon={<CalendarIcon />}
          title="Semi-Private"
          description="Our front room offers a semi-private space for up to 15 guests."
        />
      </div>
      <div className="text-center">
        <p className="text-lg text-brand-secondary mb-6">
          To book your event, please fill out the form on our private events page or call us for inquiries.
        </p>
        <a href="#" className="bg-brand-dark text-white font-bold py-3 px-8 rounded-sm hover:bg-brand-secondary transition-colors duration-300">
          Inquire Now
        </a>
      </div>
    </Section>
  );
};

export default PrivateEvents;
