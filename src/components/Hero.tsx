import React from 'react';
import { Flame, Users, Calendar } from 'lucide-react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/7642029/pexels-photo-7642029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="People in a workshop setting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-blue-900/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Where Careers Are Imagined — and Built.
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-100">
            A platform that brings together leaders in action and learners in motion — through real conversations, curated experiences, and a community driven by human connection.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              variant="secondary" 
              size="lg" 
              icon={<Flame />}
            >
              Explore Real Talks
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20" 
              icon={<Users />}
            >
              Join the Circle
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20" 
              icon={<Calendar />}
            >
              Attend an Event
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
    </div>
  );
};

export default Hero;