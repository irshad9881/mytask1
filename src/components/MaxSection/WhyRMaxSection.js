import React from 'react';
import './WhyRMaxSection.css';
import { bag, calender, cardimg, phone, star } from '../../assets/constaint';

const WhyRMaxSection = () => (
  <section className="why-rmax-section">
    <h1>Why RMax?</h1>
    <p>Rmax is designed to simplify and transform the way service businesses operate. From onboarding, scheduling and billing to client management, payments and growth, Rmax integrates everything in one easy-to-use platform connecting all the stake holders.</p>
    <div className="features-grid">
      <div className="feature-card">
       
        <span>{calender}</span>
        <h3>Scheduling</h3>
        <p>Manage appointments, classes, and events, workshops with...</p>
        <p className='view'>View details  &#62;  </p>
      </div>
      <div className="feature-card">
        
        <h3>Client Management</h3>
        <p>Keep track of customer data, preferences, and interactions to...</p>
        <p className='view'>View details  &#62;  </p>
      </div>
      <div className="feature-card">
        <span>{star}</span>
        <h3>AI Powered Insights</h3>
        <p>Know exactly what is happening in business and get actionable...</p>
        <p className='view'>View details  &#62;  </p>
      </div>
      <div className="feature-card">
        <img src="https://images.unsplash.com/photo-1587831990711-23ca6441447b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRlc2t0b3AlMjBwY3xlbnwwfHwwfHx8MA%3D%3D" alt="Scheduling" />
        {/* <span>{cardimg}</span> */}
        <h3>Billing & Payments</h3>
        <p>Streamline invoicing and payments with automated workflows, reducing ...</p>
        <p className='view'>View details  &#62;  </p>
      </div>
     
      <div className="feature-card">
      <div className="feature-card1" >
        {/* <img src="placeholder-icon.png" alt="AI Powered Insights" /> */}
        <span>{bag}</span>
        
        <h3>Marketing & Engagement Tools</h3>
        <p>Boost client retention and grow your business with integrated...</p>
        <p className='view'>View details  &#62;  </p>
      </div>
      <div className="feature-card2">
        {/* <img src="placeholder-icon.png" alt="AI Powered Insights" /> */}
        <h3> Multi-Location Management</h3>
        <p>Manage multiple locations with ease, assigning roles and permissions...</p>
        <p className='view'>View details  &#62;  </p>
      </div>
      </div> <div className="feature-card phone1">
        {/* <span>{phone}</span> */}
        <h3>Client Management</h3>
        <p>Manage all client information in one place.</p>
        <p className='view'>View details  &#62;  </p>
         <img className='phnoe ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ne6YjMkaQ7umdZ6h0hn4nzQrGBjDoLhUtg&s" alt="Client Management" />
      </div>
      {/* Add more cards as needed */}
    </div>
  </section>
);

export default WhyRMaxSection;
