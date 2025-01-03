import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import FoodRedistribution from './pages/FoodRedistribution';
import DonateItems from './pages/DonateItems';
import AboutFoodWaste from './pages/AboutFoodWaste';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/food-redistribution" element={<FoodRedistribution />} />
            <Route path="/donate-items" element={<DonateItems />} />
            <Route path="/about-food-waste" element={<AboutFoodWaste />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}