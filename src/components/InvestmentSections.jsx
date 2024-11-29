import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useOfferings } from '../context/OfferingsContext';

const InvestmentSections = ({ title, filterFn = () => true }) => {
  const navigate = useNavigate();
  const offerings = useOfferings();
  const filteredInvestments = offerings.filter(filterFn);

  return (
    <section className="px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredInvestments.map((investment) => (
          <div 
            key={investment.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img 
              src={investment.image} 
              alt={investment.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{investment.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-2">{investment.description}</p>
              <button 
                onClick={() => navigate(`/offering/${investment.id}`)}
                className="w-full bg-teal-700 text-white py-2 rounded-md hover:bg-teal-800 transition-colors"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InvestmentSections;