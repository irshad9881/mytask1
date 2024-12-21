import React from 'react'
import './Onboard.css'
import {cardimg1, cardimg2,cardimg3,vector1, vector2} from  '../../assets/constaint'
const Onboard = () => {
  return (
    <div className='onboard'>
      <div className='head'>
        <h1>Onboard business in 3 simple steps</h1>
        <p>
        Quick assisted onboarding with 30day free trial. No credit card needed.
        </p>
      </div>
      <div className='cards'>
        <div className='card card1'>
           <span>{cardimg1}</span>
          
          <h3>Claim your preset profile</h3>
          <p>Unlock trailored service and seamlessly elevvate your experience by claiming your preset profile roday. </p>
        </div>
        <span className='vector1'>{vector1}</span>
        <div className='card card2'>
            <span>{cardimg2}</span>
           <h3>Add services</h3>
          <p>Make use of multiple scheduling, pricing options to add services. Choose from pre-created scheduling templates.</p>
        </div>
        <span className='vector2'>{vector2}</span>
        <div className='card card2'>
            <span>{cardimg3}</span>
           <h3>Built Website</h3>
          <p>Build your online storefront your way, seamlessly integrating all services for a cohesive and efficient  Client experience. </p>
        </div>
      </div>
    </div>
  )
}

export default Onboard
