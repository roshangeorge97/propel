import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => (
  <section className="w-full min-h-[70vh] flex flex-col md:flex-row justify-between items-center bg-gradient-to-b from-teal-800 to-teal-600 text-white px-4 md:px-12 py-8">
    <div className="hero-content w-full md:w-1/2 space-y-6 px-4 text-center md:text-left">
      <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
        The U.S.A. Drone Company®
      </h1>
      
      <p className="text-xl md:text-2xl mb-8 text-white max-w-xl leading-relaxed font-light tracking-wide">
        Join the SmartDrone mission to revolutionize aerial technology, innovation, and global connectivity.
      </p>
      
      <motion.a 
        href="#opportunity"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block bg-white text-teal-900 hover:bg-teal-50 px-8 py-3 rounded-full text-lg font-semibold shadow-xl transition-all duration-300 ease-in-out"
      >
        View Opportunity
      </motion.a>
    </div>
    
    <div className="hero-image w-full md:w-1/2 flex justify-center items-center px-4 mt-8 md:mt-0">
      <motion.img 
        src="/drone-image.png" 
        alt="Drone" 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-full h-auto object-contain"
      />
    </div>
  </section>
);

export default HeroSection;