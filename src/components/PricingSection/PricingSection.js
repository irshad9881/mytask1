import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './PricingSection.css'

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <>
      <section className='pricing-section'>
        <h1>Choose Plan</h1>
        <h1> That’s Right For You</h1>
        <p>
          Simple and transparent pricing. Start for free, upgrade when you love
          it.
        </p>
        <span className='highlight-text'> 30 day free trial in a button</span>
        <div className='middlebutton'>
          <p>
            Running a <strong>Growth Business </strong>or{' '}
            <strong>Enterprise?</strong> Let's connect-
          </p>
          <button> Talk to Sales</button>
        </div>
        <div className='toggle-wrapper'>
          <span>Monthly</span>
          <label className='switch'>
            <input
              type='checkbox'
              checked={isYearly}
              onChange={() => setIsYearly(!isYearly)}
            />
            <span className='slider'></span>
          </label>
          <span>
            Yearly <button className='save-tag'>Save 25%</button>
          </span>
        </div>
        <div className='pricing-options'>
          <div className='pricing-card'>
            <h3 className='plan-name'>STARTER</h3>
            <p className='price'>
              <span>$</span>
              <span id='money'>{isYearly ? '12' : '17'} </span>
              <span>/month</span>
            </p>
            <p className='billing-info'>
              billed {isYearly ? 'yearly' : 'monthly'}
            </p>
            <ul>
              <li>
                <span>✔</span> Commercial License
              </li>
              <li>
                <span>✔</span> 100+ HTML UI Elements
              </li>
              <li>
                <span>✔</span> Unlimited Domain Support
              </li>
              <li className='inactive'>
                <span>✘</span> 6 Month Premium Support
              </li>
              <li className='inactive'>
                <span>✘</span> Lifetime Updates
              </li>
            </ul>
            <button className='btn-primary'>
              Get Started <span>→</span>
            </button>
            <p className='footer-info'>No credit card required</p>
          </div>
          <div className='pricing-card premium'>
            <h3 className='plan-name'>PREMIUM</h3>
            <p className='price'>
              <span>$</span>
              <span id='money'>{isYearly ? '66' : '88'} </span>
              <span>/month</span>
            </p>
            <p className='billing-info'>
              billed {isYearly ? 'yearly' : 'monthly'}
            </p>
            <ul>
              <li>
                <span>✔</span> Commercial License
              </li>
              <li>
                <span>✔</span> 100+ HTML UI Elements
              </li>
              <li>
                <span>✔</span> Unlimited Domain Support
              </li>
              <li>
                <span>✔</span> 6 Month Premium Support
              </li>
              <li>
                <span>✔</span> Lifetime Updates
              </li>
            </ul>
            <button className='btn-primary'>
              Get Started<span>→</span>
            </button>
            <p className='footer-info'>No credit card required</p>
          </div>
        </div>
        <Link to='/differences' className='explore-link'>
          Explore In-Depth Differences
        </Link>
      </section>
    </>
  )
}

export default PricingSection
