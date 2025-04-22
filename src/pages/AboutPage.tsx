import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutSection from '../components/sections/AboutSection';

function AboutPage() {
  useEffect(() => {
    document.title = "About | Careerimagined";
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20 pb-8 bg-purple-50">
        <div className="container mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-purple-600 hover:text-purple-700 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
      <AboutSection />
      <Footer />
    </div>
  );
}

export default AboutPage;