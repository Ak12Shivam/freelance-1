
import React from 'react';
import Section from './Section';

const InfoCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg">
    <h3 className="text-2xl font-serif font-bold text-brand-dark mb-4">{title}</h3>
    <div className="text-brand-secondary space-y-3 font-light">{children}</div>
  </div>
);

const Reservations: React.FC = () => {
  return (
    <Section id="reservations" title="Reservations" className="bg-white">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <p className="text-lg text-brand-secondary">Reservations open 30 days in advance at 12 PM daily. We look forward to hosting you.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <InfoCard title="Parties of 1-5">
          <p>For parties of one to five guests, we offer our full à la carte menu.</p>
          <p>A fee of <span className="font-semibold">$25 per person</span> will be charged for cancellations within 24 hours of the reservation time.</p>
        </InfoCard>
        <InfoCard title="Parties of 6-10">
          <p>For parties of six to ten, we offer a four-course “Let Us Cook For You” set menu at <span className="font-semibold">$125 per person</span>.</p>
          <p>To inquire about reservations for groups of this size, please email us at <a href="mailto:info@myloupphl.com" className="text-brand-accent hover:underline">info@myloupphl.com</a>.</p>
           <p>A fee of <span className="font-semibold">$50 per person</span> will be charged for cancellations within 48 hours of the reservation time.</p>
        </InfoCard>
         <div className="md:col-span-2">
            <InfoCard title="Policies & Late Arrivals">
                <p>We kindly ask that you inform your server of any allergies or dietary restrictions.</p>
                <p>If you are running late, please call us at <a href="tel:2672395925" className="text-brand-accent hover:underline">(267) 239-5925</a> or alert us via Resy. Tables may be released if a party is more than 20 minutes late without notice.</p>
            </InfoCard>
         </div>
      </div>
      <div className="text-center mt-12">
        <a href="https://resy.com/" target="_blank" rel="noopener noreferrer" className="bg-brand-accent text-white font-bold py-4 px-10 text-xl rounded-sm hover:bg-opacity-90 transition-all duration-300 shadow-lg">
          Book on Resy
        </a>
      </div>
    </Section>
  );
};

export default Reservations;
