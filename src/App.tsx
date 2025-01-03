import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import FoodWasteSection from './components/foodWaste/FoodWasteSection'
import FoodRedistribution from './pages/FoodRedistribution'
import DonateItems from './pages/DonateItems'
import RecyclingComposting from './pages/RecyclingComposting'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route 
            path="/" 
            element={
              <div className="pt-16">
                <Hero />
                <FoodWasteSection />
              </div>
            } 
          />
          <Route 
            path="/food-redistribution" 
            element={<FoodRedistribution />} 
          />
          <Route 
            path="/donate-items" 
            element={<DonateItems />} 
          />
          <Route 
            path="/recycling-composting" 
            element={<RecyclingComposting />} 
          />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App