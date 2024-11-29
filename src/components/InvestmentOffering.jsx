import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useOfferings } from '../context/OfferingsContext';
import { Heart } from 'lucide-react';

const InvestmentOffering = () => {
  const { id } = useParams();
  const offerings = useOfferings();
  const offering = offerings.find(offer => offer.id === id);
  const [activeTab, setActiveTab] = useState('OVERVIEW');

  if (!offering) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl text-gray-600">Investment opportunity not found!</div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h3 className="text-blue-600 text-sm mb-2">OWN A SHARE OF {offering.title}</h3>
          <h1 className="text-3xl font-bold text-teal-800 mb-4">{offering.subtitle}</h1>
          <p className="text-gray-600 max-w-2xl mb-4">{offering.description}</p>
          <button className="bg-teal-700 text-white px-8 py-3 rounded-md hover:bg-teal-800 transition-colors">
            Invest Now
          </button>
        </div>
        <button className="flex items-center gap-2 border rounded-md px-4 py-2 hover:bg-gray-50">
          <Heart className="w-5 h-5" />
          Add to Watchlist
        </button>
      </div>

      {/* Investment Stats */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="text-center text-teal-700 text-3xl font-bold mb-4">
          ₹{offering.raised.toLocaleString('en-IN')} Raised
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="mb-8">
        <nav className="flex gap-8">
          {Object.keys(offering.tabContent).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`bg-white pb-4 px-2 transition-colors ${
                activeTab === tab
                  ? 'border-b-2 border-teal-700 text-teal-700 font-medium'
                  : 'text-gray-500 hover:text-teal-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <div className="p-6 bg-white rounded-lg">
            <div className="prose max-w-none">
              <p className="text-gray-700 whitespace-pre-line">
                {offering.tabContent[activeTab].content}
              </p>
            </div>
          </div>
        </div>

        {/* Investment Details Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <button className="w-full bg-teal-700 text-white py-3 rounded-md hover:bg-teal-800 transition-colors mb-6">
              Invest Now
              <div className="text-sm">₹{offering.sharePrice.toLocaleString('en-IN')} Per Share</div>
            </button>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-gray-500 text-sm">RAISED</div>
                <div className="text-teal-700 font-bold">₹{offering.raised.toLocaleString('en-IN')}</div>
              </div>
              <div>
                <div className="text-gray-500 text-sm">INVESTORS</div>
                <div className="text-gray-700 font-bold">{offering.investors}</div>
              </div>
              <div>
                <div className="text-gray-500 text-sm">MIN INVESTMENT</div>
                <div className="text-teal-700 font-bold">₹{offering.minInvest.toLocaleString('en-IN')}</div>
              </div>
              <div>
                <div className="text-gray-500 text-sm">VALUATION</div>
                <div className="text-gray-700 font-bold">₹{offering.valuation.toLocaleString('en-IN')}</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              <div>
                <div className="font-medium">High Momentum</div>
                <div className="text-sm text-gray-500">Top 15 in funds raised in last 72 hours</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              <div>
                <div className="font-medium">Top Funded</div>
                <div className="text-sm text-gray-500">Top 15 in funds raised on this platform</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentOffering;
