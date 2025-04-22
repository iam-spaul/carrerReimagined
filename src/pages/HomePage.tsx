import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MovementSection from '../components/sections/MovementSection';
import EventsSection from '../components/sections/EventsSection';
import VoicesSection from '../components/sections/VoicesSection';
import CommunitySection from '../components/sections/CommunitySection';
import PartnerSection from '../components/sections/PartnerSection';
import Footer from '../components/Footer';

function HomePage() {
  useEffect(() => {
    document.title = "Careerimagined | Where Careers Are Imagined and Built";
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (!targetId) return;
        
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <MovementSection />
      <EventsSection />
      <VoicesSection />
      <CommunitySection />
      <PartnerSection />
      <Footer />
    </div>
  );
}

export default HomePage;