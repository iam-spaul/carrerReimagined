import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import Button from './Button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Career<span className="text-coral-500">imagined</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Whether you're leading, learning, or just listening — your voice matters here.
              Let's connect. Let's build. Let's imagine careers that count.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#events" className="text-gray-400 hover:text-white transition-colors">Events</a></li>
              <li><a href="#voices" className="text-gray-400 hover:text-white transition-colors">Real Voices</a></li>
              <li><a href="#community" className="text-gray-400 hover:text-white transition-colors">Join the Circle</a></li>
              <li><a href="#partner" className="text-gray-400 hover:text-white transition-colors">Partner With Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>hello@careerimagined.com</li>
              <li>Toronto, Canada</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Stay updated with our latest events and stories.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none flex-grow"
              />
              <Button 
                variant="secondary"
                className="rounded-l-none"
                icon={<Send size={16} />}
              >
                Send
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Careerimagined. All rights reserved.</p>
          <p className="mt-2">
            Founded by <span className="text-coral-500">Peali Sarkar</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;