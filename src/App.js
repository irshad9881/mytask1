import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Import components
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import WhyRMaxSection from './components/MaxSection/WhyRMaxSection'
import PricingSection from './components/PricingSection/PricingSection'
import FAQSection from './components/FAQSection/FAQSection'
import Footer from './components/Footer/Footer'
import Onboard from './components/Onboard/Onboard'
import './styles/toplevel.css'
import Empowering from './components/Empowering/Empowering'
import Manage from './components/Manage/Manage'
import ContactUs from './components/ContactUs/ContactUs'
import { Price } from './components/Price/Price'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Header />
        <Routes>
          <Route
            path='/'
            element={
              <>
                <HeroSection />
                <Onboard />
                <WhyRMaxSection />
                <Empowering />
                <PricingSection />
                <Manage />
                <FAQSection />
              </>
            }
          />
          <Route path='/pricing' element={<Price />} />
          <Route path='/contact' element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
