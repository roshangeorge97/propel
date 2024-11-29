import React, { createContext, useContext } from 'react';

const OfferingsContext = createContext();

export const offeringsData = [
  {
    id: "1",
    title: "BOXABL",
    subtitle: "Mass Production Building System",
    description: "BOXABL is in the process of creating a building system that's compatible with scalable factory mass production. Our mission is to significantly lower the cost of homeownership for everyone. Obsessively designed to standards that we will achieve quality, strength, and sustainability to last for generations.",
    image: "/bax.webp",
    raised: "4,419,084.80",
    investors: "1,849",
    minInvest: "1,000",
    valuation: "3.48B",
    sharePrice: "0.80",
    deadline: "Jun. 25, 2025 at 11:59 PM GMT+5:30",
    fundingGoal: "1k - 74M",
    maxInvestment: "74,000,000",
    tabContent: {
      OVERVIEW: {
        content: "BOXABL is in the process of creating a building system that's compatible with scalable factory mass production. Our mission is to significantly lower the cost of homeownership for everyone. Obsessively designed to standards that we believe will achieve quality, strength, and sustainability to last for generations."
      },
      ABOUT: {
        content: "HEADQUARTERS: 5345 E. N. Belt Road, North Las Vegas, NV 89115"
      },
      TERMS: {
        content: `PRICE PER SHARE: 0.80
DEADLINE: Jun. 25, 2025 at 11:59 PM GMT+5:30
VALUATION: 3.48B
FUNDING GOAL: 1k - 74M
MIN INVESTMENT: 1,000
MAX INVESTMENT: 74,000,000`
      },
      UPDATES: {
        content: "Latest Update (11.15.24): Delivered to You, Unpacks in One Hour - Oversized loads, special permits, and sky-high shipping costs have held back mass producing homes inside of a factory. The Casita is designed to fold up for transport which significantly decreases the cost of shipping & the complexity of installation."
      },
      REWARDS: {
        content: `Tier 1: Invest between 1,500 – 2,499 and receive 1% Bonus Shares
Tier 2: Invest between 2,500 – 4,999 and receive 2% Bonus Shares
Tier 3: Invest between 5,000 – 9,999 and receive 3% Bonus Shares
Tier 4: Invest between 10,000 – 24,999 and receive 4% Bonus Shares
Tier 5: Invest 25,000 or more and receive 5% Bonus Shares`
      },
      "INVESTING FAQS": {
        content: "Important investment information and frequently asked questions about the BOXABL offering."
      }
    },
    reasonsToInvest: [
      "Over 140 million raised from 40,000+ investors & over 600+ houses built to date!",
      "190,000 on the waitlist and completed 156 house order from the US military.*",
      "One of the only building systems compatible with automobile-style factory mass production, protected by exclusive rights to 53 patent filings in the US and globally."
    ]
  },
  {
    id: "1",
    title: "AtomBeam",
    subtitle: "Next-gen data compression technology",
    description: "Next-gen data compression technology.",
    image: "/atom.webp",
    badges: ['momentum'],
    raised: "2,500,000",
    investors: "1,200",
    minInvest: "250",
    valuation: "10M",
    sharePrice: "5.00"
  },
  {
    id: "2",
    title: "The Caribbean Club",
    subtitle: "Exclusive club in the Caribbean",
    description: "Exclusive club in the Caribbean.",
    image: "/cuin.webp",
    badges: ['momentum'],
    raised: "3,700,000",
    investors: "950",
    minInvest: "500",
    valuation: "25M",
    sharePrice: "10.00"
  },
  {
    id: "3",
    title: "Boxabl",
    subtitle: "Mass Production Building System",
    description: "Revolutionizing prefab homes.",
    image: "/bax.webp",
    badges: ['funded'],
    raised: "4,419,084.80",
    investors: "1,849",
    minInvest: "1,000",
    valuation: "3.48B",
    sharePrice: "0.80",
    reasonsToInvest: [
      "Over 140 million raised from 40,000+ investors & over 600+ houses built to date!",
      "190,000 on the waitlist and completed 156 house order from the US military.*",
      "One of the only building systems compatible with automobile-style factory mass production, protected by exclusive rights to 53 patent filings in the US and globally."
    ]
  },
  {
    id: "4",
    title: "Farmwise",
    subtitle: "Innovative agricultural machinery",
    description: "Innovative agricultural machinery.",
    image: "/fab.webp",
    badges: ['funded'],
    raised: "5,200,000",
    investors: "2,100",
    minInvest: "2,000",
    valuation: "200M",
    sharePrice: "25.00"
  },
];

export const OfferingsProvider = ({ children }) => {
  return (
    <OfferingsContext.Provider value={offeringsData}>
      {children}
    </OfferingsContext.Provider>
  );
};

export const useOfferings = () => {
  return useContext(OfferingsContext);
};