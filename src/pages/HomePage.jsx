import React, { useContext } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import InvestmentSections from '../components/InvestmentSections';
import HowToInvest from '../components/HowToInvest';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import { useOfferings } from '../context/OfferingsContext';

const HomePage = () => {
  const offerings = useOfferings();

  const getMostMomentum = (offering) => {
    return offering.badges?.includes('momentum');
  };

  const getMostFunded = (offering) => {
    return offering.badges?.includes('funded');
  };

  return (
    <div className="bg-gray-50">
      <Header />
      <HeroSection />
      
      <main className="max-w-6xl mx-auto px-4">
        <InvestmentSections 
          title="Most Momentum" 
          filterFn={getMostMomentum} 
        />
        <InvestmentSections 
          title="Most Funded" 
          filterFn={getMostFunded} 
        />
      </main>

      <HowToInvest />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default HomePage;