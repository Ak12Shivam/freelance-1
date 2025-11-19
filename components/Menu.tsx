
import React from 'react';
import Section from './Section';

const Menu: React.FC = () => {
  const dinnerItems = [
    { name: 'Steak Frites', description: 'Coulotte Steak, Sauce au Poivre, Pommes Frites' },
    { name: 'Duck Confit', description: 'Crispy Leg of Duck, Frisée Salad, Lardons' },
    { name: 'Sole Meunière', description: 'Dover Sole, Brown Butter, Lemon, Parsley' },
  ];

  const cocktailItems = [
    { name: 'French 75', description: 'Gin, Champagne, Lemon Juice, Sugar' },
    { name: 'Vieux Carré', description: 'Rye Whiskey, Cognac, Sweet Vermouth, Bénédictine' },
    { name: 'Corpse Reviver #2', description: 'Gin, Lillet Blanc, Cointreau, Lemon Juice, Absinthe' },
  ];

  const MenuItem: React.FC<{ name: string; description: string }> = ({ name, description }) => (
    <div className="mb-4">
      <h4 className="text-xl font-semibold text-brand-dark">{name}</h4>
      <p className="text-md text-brand-secondary font-light">{description}</p>
    </div>
  );

  return (
    <Section id="menu" title="Our Menu">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <p className="text-lg text-brand-secondary">
          Our menu changes daily to reflect the best of the market. The menus below are as current as possible, but are subject to change.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h3 className="text-3xl font-serif text-brand-dark mb-6 text-center">Dinner</h3>
          {dinnerItems.map(item => <MenuItem key={item.name} {...item} />)}
        </div>
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h3 className="text-3xl font-serif text-brand-dark mb-6 text-center">Cocktails</h3>
          {cocktailItems.map(item => <MenuItem key={item.name} {...item} />)}
        </div>
      </div>
      <div className="text-center mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
        <a href="#" className="bg-brand-dark text-white font-bold py-3 px-8 rounded-sm hover:bg-brand-secondary transition-colors duration-300">
          View Full Dinner Menu (PDF)
        </a>
        <a href="#" className="bg-brand-dark text-white font-bold py-3 px-8 rounded-sm hover:bg-brand-secondary transition-colors duration-300">
          View Full Cocktail Menu (PDF)
        </a>
      </div>
    </Section>
  );
};

export default Menu;
