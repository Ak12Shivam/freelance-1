
import React from 'react';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section id="about" title="Our Story" className="bg-white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="max-w-md mx-auto">
          <img 
            src="https://picsum.photos/seed/myloup-chefs/600/700" 
            alt="Chefs Alex Kemp and Amanda Shulman" 
            className="rounded-lg shadow-xl w-full h-auto object-cover"
          />
        </div>
        <div className="text-lg text-brand-secondary space-y-6 text-left">
          <p className="font-light">
            My Loup is a heartfelt collaboration between chefs and owners <span className="font-semibold text-brand-dark">Alex Kemp and Amanda Shulman</span>. Our culinary vision is rooted in “French-inspired market cuisine,” with a profound emphasis on the freshest seasonal ingredients available.
          </p>
          <p className="font-light">
            The name “My Loup,” French for “my wolf,” holds a special place in our hearts. It's a term of endearment—“Lou” is Amanda’s nickname for Alex—and a loving nod to our dachshund, whom we affectionately call “our little wolf.”
          </p>
          <p className="font-light">
            As part of <span className="font-semibold text-brand-dark">Libbie Loup Hospitality</span>, we are dedicated to creating memorable dining experiences that are both refined and deeply personal. We invite you to join us and share in our passion.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
