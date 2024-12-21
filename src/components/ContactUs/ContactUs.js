import React, { useState } from 'react'
import './ContactUs.css'

const ContactUs = () => {
  const [countryCode, setCountryCode] = useState('+91')

  const handleCountryChange = e => {
    setCountryCode(e.target.value)
  }

  return (
    <div className='contact-us'>
      <div className='contact-header'>
        <div className='search'>
          <div className='button'>
            <div>
              <span>AI</span>
              <span> R</span>Max
            </div>
          </div>
          <input
            className='input'
            type='text'
            placeholder='Curious? Let AI Uncover the Answere!'
          />
        </div>
        <h1>Get in touch with us. We're here to assist you.</h1>
      </div>
      <div className='contact-form'>
        <form>
          <div className='form-group'>
            <div className='input-container'>
              <label>Business Name*</label>
              <input
                type='text'
                placeholder='Search for your business listing'
              />
            </div>
            <div className='input-container'>
              <label>Your Name*</label>
              <input type='text' placeholder='Enter your name' />
            </div>
          </div>
          <div className='form-group'>
            <div className='input-container phone-container'>
              <label>Phone Number*</label>
              <div className='phone-input'>
                <select value={countryCode} onChange={handleCountryChange}>
                  <option value='+91'>+91</option>
                  <option value='+1'>+1</option>
                  <option value='+44'>+44</option>
                  <option value='+61'>+61</option>
                </select>
                <input type='text' placeholder='9851' />
              </div>
            </div>
            <div className='input-container'>
              <label>Email Address</label>
              <input type='email' placeholder='e.g xyz@gmail.com' />
            </div>
          </div>
          <div className='input-container'>
            <label>Message*</label>
            <textarea placeholder='Write here your message...'></textarea>
          </div>
          <button type='submit' className='submit-btn'>
            Leave us a Message →
          </button>
        </form>
      </div>
      <div className='contact-info'>
        <div className='info-group'>
          <div>
            <label id='conatactinfo'>Contact Info</label>

            <h2>We are always happy to assist you</h2>
          </div>
          <div>
            <h4>Email Address</h4>
            <p>Support@RMax.com</p>
            <p>Assistance hours: Monday - Friday 6 am to 8 pm EST</p>
          </div>
          <div>
            <h4>Contact Number</h4>
            <p>+91-8657491236</p>
            <p>Assistance hours: Monday - Friday 6 am to 8 pm EST</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
