import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useOfferings } from '../context/OfferingsContext';

const InvestmentSections = ({ title, filterFn = () => true }) => {
  const navigate = useNavigate();
  const offerings = useOfferings();
  const filteredInvestments = offerings.filter(filterFn);

  return (
    <section className="px-4 py-4 max-w-7xl mx-auto">
      <div className="flex justify-start items-center mb-6">
        <h2 className="text-2xl font-bold text-left">{title}</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredInvestments.map((investment) => (
          <div 
            key={investment.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img 
              src={investment.image} 
              alt={investment.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 truncate">{investment.title}</h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-3">{investment.description}</p>
              <button 
                onClick={() => navigate(`/offering/${investment.id}`)}
                className="w-full bg-teal-700 text-white py-2 rounded-md text-sm hover:bg-teal-800 transition-colors"
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