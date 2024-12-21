// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Header.css';
// import { FaChevronDown } from 'react-icons/fa';

// const Header = () => {
//   const [featuresDropdown, setFeaturesDropdown] = useState(false);
//   const [solutionsDropdown, setSolutionsDropdown] = useState(false);
//   const [navOpen, setNavOpen] = useState(false);

//   const toggleFeaturesDropdown = () => {
//     setFeaturesDropdown(!featuresDropdown);
//     setSolutionsDropdown(false); // Close solutions dropdown if open
//   };

//   const toggleSolutionsDropdown = () => {
//     setSolutionsDropdown(!solutionsDropdown);
//     setFeaturesDropdown(false); // Close features dropdown if open
//   };

//   const closeDropdowns = () => {
//     setFeaturesDropdown(false);
//     setSolutionsDropdown(false);
//   };

//   const toggleNav = () => {
//     setNavOpen(!navOpen);
//     closeDropdowns();
//   };

//   return (
//     <header className="header">
//       <div className="container">
//         {/* Hamburger Icon */}
//         <div className="hamburger" onClick={toggleNav}>
//           <div></div>
//           <div></div>
//           <div></div>
//         </div>

//         {/* Logo */}
//         <div className="logo">
//           <Link to="/">
//             R<span id="max">Max</span>
//           </Link>
//         </div>

//         {/* Navigation Menu */}
//         <nav className={`nav ${navOpen ? 'active' : ''}`}>
//           <ul className="nav-links">
//             <li>
//               <Link to="/" onClick={closeDropdowns}>
//                 Home
//               </Link>
//             </li>
//             <li className="dropdown">
//               <button className="dropdown-toggle" onClick={toggleFeaturesDropdown}>
//                 Features
//                 <FaChevronDown />
//               </button>
//               {featuresDropdown && (
//                 <div className="dropdown-menu">
//                   {/* Features Dropdown Content */}
//                 </div>
//               )}
//             </li>
//             <li>
//               <Link to="/pricing" onClick={closeDropdowns}>
//                 Pricing
//               </Link>
//             </li>
//             <li className="dropdown">
//               <button className="dropdown-toggle" onClick={toggleSolutionsDropdown}>
//                 Solutions
//                 <FaChevronDown />
//               </button>
//               {solutionsDropdown && (
//                 <div className="dropdown-menu">
//                   {/* Solutions Dropdown Content */}
//                 </div>
//               )}
//             </li>
//           </ul>
//         </nav>

//         {/* Buttons */}
//         <div className="header-buttons">
//           <Link to="/login" className="btn btn-login" onClick={closeDropdowns}>
//             Login
//           </Link>
//           <Link to="/signup" className="btn btn-cta" onClick={closeDropdowns}>
//             Try for Free
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { FaChevronDown } from 'react-icons/fa'

const Header = () => {
  const [featuresDropdown, setFeaturesDropdown] = useState(false)
  const [solutionsDropdown, setSolutionsDropdown] = useState(false)
  const [navOpen, setNavOpen] = useState(false)

  const toggleFeaturesDropdown = () => {
    setFeaturesDropdown(!featuresDropdown)
    setSolutionsDropdown(false) // Close solutions dropdown if open
  }

  const toggleSolutionsDropdown = () => {
    setSolutionsDropdown(!solutionsDropdown)
    setFeaturesDropdown(false) // Close features dropdown if open
  }

  const closeDropdowns = () => {
    setFeaturesDropdown(false)
    setSolutionsDropdown(false)
  }

  const toggleNav = () => {
    setNavOpen(!navOpen)
    closeDropdowns()
  }

  return (
    <header className='header'>
      <div className='container'>
        {/* Hamburger Icon */}
        <div className='hamburger' onClick={toggleNav}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Logo */}
        <div className='logo'>
          <Link to='/'>
            R<span id='max'>Max</span>
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className={`nav ${navOpen ? 'active' : ''}`}>
          <ul className='nav-links'>
            <li>
              <Link to='/' onClick={closeDropdowns}>
                Home
              </Link>
            </li>
            <li className='dropdown'>
              <button
                className='dropdown-toggle'
                onClick={toggleFeaturesDropdown}
              >
                Features
                <FaChevronDown />
              </button>
              {featuresDropdown && (
                <div className='dropdown-menu'>
                  {/* Features Dropdown Content */}
                  <div className='dropdown-content'>
                    <div className='dropdown-section'>
                      <h4>Discover</h4>
                      <ul>
                        <li>
                          <Link
                            to='/features/custom-website'
                            onClick={closeDropdowns}
                          >
                            Custom Branded Website
                          </Link>
                        </li>
                        {/* More Links */}
                      </ul>
                    </div>
                    {/* Other sections */}
                  </div>
                  <div className='dropdown-footer'>
                    <Link
                      to='/features'
                      className='btn-see-all'
                      onClick={closeDropdowns}
                    >
                      See all features →
                    </Link>
                  </div>
                </div>
              )}
            </li>
            <li>
              <Link to='/pricing' onClick={closeDropdowns}>
                Pricing
              </Link>
            </li>
            <li className='dropdown'>
              <button
                className='dropdown-toggle'
                onClick={toggleSolutionsDropdown}
              >
                Solutions
                <FaChevronDown />
              </button>
              {solutionsDropdown && (
                <div className='dropdown-menu'>
                  {/* Solutions Dropdown Content */}
                  <p>Solutions dropdown content goes here...</p>
                </div>
              )}
            </li>
          </ul>
        </nav>

        {/* Buttons */}
        <div className='header-buttons'>
          <Link to='/login' className='btn btn-login' onClick={closeDropdowns}>
            Login
          </Link>
          <Link to='/signup' className='btn btn-cta' onClick={closeDropdowns}>
            Try for Free
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
