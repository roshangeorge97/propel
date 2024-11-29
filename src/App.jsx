import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/SignupForm";
import Login from "./components/LoginForm";
import HomePage from './pages/HomePage';
import InvestmentOffering from "./components/InvestmentOffering";
import { OfferingsProvider } from './context/OfferingsContext';

function App() {
  return (
    <Router>
      <OfferingsProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/offering/:id" element={<InvestmentOffering />} />
        </Routes>
      </OfferingsProvider>
    </Router>
  );
}

export default App;