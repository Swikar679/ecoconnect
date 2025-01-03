import React from 'react';
import Hero from '../components/Hero';
import FoodWasteSection from '../components/foodWaste/FoodWasteSection';

const Home = () => {
  return (
    <div className="pt-16">
      <Hero />
      <FoodWasteSection />
    </div>
  );
};

export default Home;