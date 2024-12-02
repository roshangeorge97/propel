import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useOfferings } from '../context/OfferingsContext';
import Header from './Header';
import { Heart, ChevronRight, TrendingUp, Target } from 'lucide-react';

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
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <span className="bg-teal-100 text-teal-800 text-xs font-semibold mr-2 px-3 py-1 rounded mb-3 inline-block">
              OWN A SHARE OF {offering.title}
            </span>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{offering.subtitle}</h1>
            <p className="text-gray-700 text-base mb-6 leading-relaxed">{offering.description}</p>
            
            <div className="flex space-x-4">
              <button className="flex-1 bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-colors flex items-center justify-center text-base font-semibold">
                Invest Now <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 bg-white border-teal-600 text-teal-600 px-8 py-4 rounded-lg hover:bg-teal-50 transition-colors flex items-center gap-3 font-semibold">
                <Heart className="h-5 w-5" /> Watchlist
              </button>
            </div>
          </div>

          {/* Investment Stats */}
          <div className="bg-teal-50 rounded-xl p-8 shadow-sm">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-700">
                  ₹{offering.raised.toLocaleString('en-IN')}
                </div>
                <div className="text-sm text-gray-600 mt-1">Total Raised</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-700">
                  {offering.investors}
                </div>
                <div className="text-sm text-gray-600 mt-1">Investors</div>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-t border-gray-200 mb-8" />

        {/* Navigation Tabs */}
        <div className="flex space-x-6 mb-8 overflow-x-auto">
          {Object.keys(offering.tabContent).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 px-6 text-base transition-colors ${
                activeTab === tab
                  ? 'bg-teal-800 border-b-3 border-teal-600 text-white font-semibold rounded-lg'
                  : 'rounded-lg bg-teal-600 text-white hover:text-white  rounded-lg'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content and Sidebar */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 bg-white rounded-xl shadow-lg p-8">
            <p className="text-gray-800 leading-relaxed">
              {offering.tabContent[activeTab].content}
            </p>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <button className="w-full bg-teal-600 text-white py-4 rounded-lg hover:bg-teal-700 transition-colors mb-6 text-base font-semibold">
                Invest Now
                <div className="text-sm mt-1 font-normal">
                  ₹{offering.sharePrice.toLocaleString('en-IN')} Per Share
                </div>
              </button>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'MIN INVESTMENT', value: offering.minInvest, icon: Target },
                  { label: 'VALUATION', value: offering.valuation, icon: TrendingUp }
                ].map(({ label, value, icon: Icon }) => (
                  <div key={label} className="text-center">
                    <div className="text-xs text-gray-600 mb-2 uppercase">{label}</div>
                    <div className="flex items-center justify-center gap-2">
                      <Icon className="h-5 w-5 text-teal-600" />
                      <span className="font-bold text-gray-900">
                        ₹{value.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Momentum Badges */}
            <div className="bg-teal-50 rounded-xl p-6">
              {[
                { title: 'High Momentum', description: 'Top 15 in funds raised in last 72 hours' },
                { title: 'Top Funded', description: 'Top 15 in funds raised on this platform' }
              ].map(({ title, description }) => (
                <div key={title} className="flex items-center gap-4 mb-4 last:mb-0">
                  <div className="bg-teal-200 p-3 rounded-full">
                    <TrendingUp className="h-5 w-5 text-teal-800" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{title}</div>
                    <div className="text-sm text-gray-700">{description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestmentOffering;