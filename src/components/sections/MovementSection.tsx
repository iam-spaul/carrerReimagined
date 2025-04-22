import React from 'react';
import { Search } from 'lucide-react';
import Section from '../Section';
import Button from '../Button';

const MovementSection: React.FC = () => {
  return (
    <Section id="about" background="white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Careerimagined?</h2>
        
        <div className="space-y-4 mb-8 text-lg text-gray-700">
          <p>
            Because the world doesn't need more noise — it needs more real voices.
          </p>
          <p>
            Because we don't grow through inspiration alone — we grow through exposure, community, and action.
          </p>
        </div>
        
        <div className="bg-purple-50 p-8 rounded-xl my-10 shadow-sm">
          <blockquote className="text-2xl font-serif italic text-purple-800">
            "We're not building a network. We're building net worth — in people, ideas, and action."
          </blockquote>
        </div>
        
        <Button 
          variant="primary" 
          size="lg"
          icon={<Search size={20} />}
        >
          Learn More
        </Button>
      </div>
    </Section>
  );
};

export default MovementSection;