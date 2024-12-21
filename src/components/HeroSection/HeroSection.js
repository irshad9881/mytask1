import React from 'react'
import './HeroSection.css'
import { image } from '../../assets/constaint'

const HeroSection = () => (
  <section className='hero-section'>
    <div className='hero-content'>
      {/* Search Section */}
      <div className='search-container'>
        <div className='button'>
          <div>
            <span>AI</span>
            <span> R</span>Max
          </div>
        </div>
        <input
          className='input'
          type='text'
          placeholder='Curious? Let AI Uncover the Answer!'
        />
      </div>

      {/* Main Content */}
      <div className='content'>
        <h2>Maximize Your Impact</h2>
        <h3>
          Business with{' '}
          <span className='one'>
            R<span className='two'>Max</span>
          </span>
        </h3>
        <p>
          Enhance your business with RMax's all-in-one platform—streamlining
          client engagement, automating workflows, and fueling growth.
        </p>
        <div className='hero-buttons'>
          <button className='btn btn-primary'>Get Started →</button>
          <button className='btn btn-secondary'>Book a Demo</button>
        </div>
      </div>

      {/* Features Section */}
      <div className='features-container'>
        <div className='featuresHero'>
          <div className='feature'> Onboarding</div>
          <div className='feature'>Client Engagement</div>
          <div className='feature'>Generate Report</div>
          <div className='feature'>Revenue Growth</div>
          <div className='hero-image'>{image}</div>
        </div>
      </div>
    </div>
  </section>
)

export default HeroSection
