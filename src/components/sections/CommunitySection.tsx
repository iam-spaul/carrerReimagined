import React from 'react';
import { Mail } from 'lucide-react';
import Section from '../Section';
import Button from '../Button';

const CommunitySection: React.FC = () => {
  return (
    <Section id="community" background="white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            You Don't Just Attend — You Belong.
          </h2>
          <p className="text-lg text-gray-700">
            Careerimagined is not a platform for passive observers. It's a place to participate, share, grow 
            — and belong to something larger than a LinkedIn connection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-purple-50 rounded-xl p-8 relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-100 rounded-full opacity-50"></div>
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-coral-100 rounded-full opacity-50"></div>
            
            <h3 className="text-2xl font-bold mb-4 relative z-10">Join Our Circle</h3>
            <ul className="space-y-3 text-gray-700 relative z-10">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Early access to curated events and workshops</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Mentorship & micro-learning pods with industry leaders</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Exclusive resources and career development tools</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>A growing tribe of leaders and changemakers</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">Why Join?</h3>
              <p className="text-gray-700 mb-4">
                Our community members report:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-coral-500 mr-2">✓</span>
                  <span>Expanded professional networks that lead to real opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-coral-500 mr-2">✓</span>
                  <span>Increased confidence in career decisions and direction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-coral-500 mr-2">✓</span>
                  <span>Meaningful connections with like-minded professionals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-coral-500 mr-2">✓</span>
                  <span>Access to insights not taught in traditional education</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button 
            variant="primary" 
            size="lg"
            icon={<Mail size={20} />}
          >
            Join the Community
          </Button>
          <p className="mt-4 text-gray-600">
            Already a member? <a href="#" className="text-purple-600 hover:underline">Sign in</a>
          </p>
        </div>
      </div>
    </Section>
  );
};

export default CommunitySection;