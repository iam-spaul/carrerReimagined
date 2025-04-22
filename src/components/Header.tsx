import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : isHomePage
          ? 'bg-purple-900/20 backdrop-blur-sm py-4'
          : 'bg-white py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-purple-700">
              Career<span className="text-coral-500">imagined</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`${
                isScrolled || !isHomePage
                  ? 'text-gray-700 hover:text-purple-600'
                  : 'text-white hover:text-coral-300'
              } transition-colors ${location.pathname === '/' ? 'font-medium' : ''}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${
                isScrolled || !isHomePage
                  ? 'text-gray-700 hover:text-purple-600'
                  : 'text-white hover:text-coral-300'
              } transition-colors ${location.pathname === '/about' ? 'font-medium' : ''}`}
            >
              About
            </Link>
            <a
              href="#events"
              className={`${
                isScrolled || !isHomePage
                  ? 'text-gray-700 hover:text-purple-600'
                  : 'text-white hover:text-coral-300'
              } transition-colors`}
            >
              Events
            </a>
            <a
              href="#voices"
              className={`${
                isScrolled || !isHomePage
                  ? 'text-gray-700 hover:text-purple-600'
                  : 'text-white hover:text-coral-300'
              } transition-colors`}
            >
              Real Voices
            </a>
            <a
              href="#community"
              className={`${
                isScrolled || !isHomePage
                  ? 'text-gray-700 hover:text-purple-600'
                  : 'text-white hover:text-coral-300'
              } transition-colors`}
            >
              Community
            </a>
            <Button 
              variant={isScrolled || !isHomePage ? "primary" : "outline"}
              size="sm"
              className={!isScrolled && isHomePage ? "border-white text-white hover:bg-white/20" : ""}
            >
              Join Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${
                isScrolled || !isHomePage
                  ? 'text-gray-700 hover:text-purple-600'
                  : 'text-white hover:text-coral-300'
              } focus:outline-none`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4">
            <div className="flex flex-col space-y-4 px-4">
              <Link
                to="/"
                className={`text-gray-700 hover:text-purple-600 transition-colors ${
                  location.pathname === '/' ? 'text-purple-600' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-gray-700 hover:text-purple-600 transition-colors ${
                  location.pathname === '/about' ? 'text-purple-600' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <a
                href="#events"
                className="text-gray-700 hover:text-purple-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </a>
              <a
                href="#voices"
                className="text-gray-700 hover:text-purple-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Real Voices
              </a>
              <a
                href="#community"
                className="text-gray-700 hover:text-purple-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Community
              </a>
              <Button variant="primary" size="sm" className="w-full">
                Join Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;