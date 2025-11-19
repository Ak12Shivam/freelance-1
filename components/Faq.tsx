
import React, { useState } from 'react';
import Section from './Section';

interface FaqItemProps {
  question: string;
  children: React.ReactNode;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-brand-dark focus:outline-none"
      >
        <span>{question}</span>
        <span className="transform transition-transform duration-300" style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }}>
          <svg className="w-6 h-6 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}
      >
        <div className="text-brand-secondary font-light">
          {children}
        </div>
      </div>
    </div>
  );
};


const Faq: React.FC = () => {
    return (
        <Section id="faq" title="Good to Know" className="bg-white">
            <div className="max-w-3xl mx-auto">
                <FaqItem question="Do you accommodate dietary restrictions?">
                    <p>Yes, we are happy to accommodate allergies and dietary restrictions. Please inform your server upon arrival so we can ensure your meal is prepared safely and to your needs.</p>
                </FaqItem>
                <FaqItem question="What is the 3% service fee?">
                    <p>A 3% service fee is added to each check. This amount is distributed directly to our dedicated kitchen team and is separate from any gratuity you may wish to leave for our front-of-house staff.</p>
                </FaqItem>
                <FaqItem question="Can I bring my own wine (BYO)?">
                    <p>At this time, we do not allow guests to bring their own wine or other beverages. We invite you to explore our curated wine list and full-service bar offerings.</p>
                </FaqItem>
            </div>
        </Section>
    );
};

export default Faq;
