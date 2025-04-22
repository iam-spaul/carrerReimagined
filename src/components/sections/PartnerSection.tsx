import React from 'react';
import { Mail } from 'lucide-react';
import Section from '../Section';
import Button from '../Button';

const PartnerSection: React.FC = () => {
  return (
    <Section id="partner" background="gradient">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want to Co-Create? Partner? Host?
          </h2>
          <p className="text-lg text-gray-700">
            We're always open to working with people and organizations who believe in shaping futures, not waiting for them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold mb-4">For Organizations</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-purple-100 p-2 rounded-full mr-3 mt-1">
                  <span className="text-purple-600 font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold">Host an Event</h4>
                  <p className="text-gray-700">Bring Careerimagined experiences to your organization or space.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-purple-100 p-2 rounded-full mr-3 mt-1">
                  <span className="text-purple-600 font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold">Sponsor Initiatives</h4>
                  <p className="text-gray-700">Support future leaders through scholarships and programs.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-purple-100 p-2 rounded-full mr-3 mt-1">
                  <span className="text-purple-600 font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold">Content Collaboration</h4>
                  <p className="text-gray-700">Co-create meaningful content that showcases your expertise.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold mb-4">For Individuals</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-coral-100 p-2 rounded-full mr-3 mt-1">
                  <span className="text-coral-600 font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold">Become a Speaker</h4>
                  <p className="text-gray-700">Share your leadership journey and insights with our community.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-coral-100 p-2 rounded-full mr-3 mt-1">
                  <span className="text-coral-600 font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold">Nominate a Leader</h4>
                  <p className="text-gray-700">Know someone with an inspiring story? Let us feature them.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-coral-100 p-2 rounded-full mr-3 mt-1">
                  <span className="text-coral-600 font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold">Become a Mentor</h4>
                  <p className="text-gray-700">Guide emerging professionals through their career journey.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Button 
            variant="primary" 
            size="lg"
            icon={<Mail size={20} />}
          >
            Start a Conversation
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default PartnerSection;