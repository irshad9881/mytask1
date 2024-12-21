import React, { useState } from 'react'
import './Empowering.css'
// import { vector1 } from '../../assets/constaint';

// const Empowering = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const slides = [
//         {
//             image:vector1,
//             title: 'Sports',
//             description: 'From fitness studios to sports academies, Rmax empowers sports businesses. Know more...'
//         },
//         {
//             image: vector1,
//             title: 'Healthcare & Wellness',
//             description: 'Health and wellness service providers—from yoga instructors and gyms. Know more...'
//         },
//         {
//             image: vector1,
//             title: 'Learning Activities',
//             description: 'Tutors, educators, and learning centers—from music schools to art studios. Know more...'
//         }
//     ];

//     const goToNext = () => {
//         setCurrentIndex((currentIndex + 1) % slides.length);
//     };

//     const goToPrev = () => {
//         setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
//     };

//     return (
//         <div className="carousel">
//             <div className="carousel-item">
//                 <img src={slides[currentIndex].image} alt={slides[currentIndex].title} />
//                 <div className="carousel-content">
//                     <h2>{slides[currentIndex].title}</h2>
//                     <p>{slides[currentIndex].description}</p>
//                 </div>
//             </div>
//             <button className="prev" onClick={goToPrev}>&#10094;</button>
//             <button className="next" onClick={goToNext}>&#10095;</button>
//         </div>
//     );
// };

// export default Empowering;
// App.js

// App.js

const Empowering = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const data = [
    {
      title: 'Sports',
      description:
        'From fitness studios to sports academies, Rmax empowers sports businesses',
      image: 'https://via.placeholder.com/300x200?text=Sports',
      link: '#'
    },
    {
      title: 'Healthcare & Wellness',
      description:
        'Health and wellness service providers—from yoga instructors and gyms',
      image: 'https://via.placeholder.com/300x200?text=Healthcare+%26+Wellness',
      link: '#'
    },
    {
      title: 'Learning Activities',
      description:
        'Tutors, educators, and learning centers—from music schools to art studios',
      image: 'https://via.placeholder.com/300x200?text=Learning+Activities',
      link: '#'
    },
    {
      title: 'Household Services',
      description: 'Helping you find trusted professionals for household needs',
      image: 'https://via.placeholder.com/300x200?text=Household+Services',
      link: '#'
    },
    {
      title: 'Technology',
      description: 'Empowering businesses with innovative technology solutions',
      image: 'https://via.placeholder.com/300x200?text=Technology',
      link: '#'
    }
  ]

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + data.length) % data.length)
  }

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % data.length)
  }

  const getVisibleItems = () => {
    const visibleItems = []
    for (let i = 0; i < 3; i++) {
      visibleItems.push(data[(currentIndex + i) % data.length])
    }
    return visibleItems
  }

  return (
    <div className='carousel-container'>
      <div className='heading2'>
        <h1>Empowering Service Providers Across Industries</h1>
        <p>
          Whether you're in sports, education, wellness, household services, or
          niche markets, our technology simplifies your business operations,
          making it easier for you to focus on what you do best.
        </p>
      </div>
      <div className='carousel-wrapper'>
        <button className='carousel-btn prev' onClick={handlePrev}>
          &lt;
        </button>
        <div className='carousel'>
          {getVisibleItems().map((item, index) => (
            <div key={index} className='carousel-item visible'>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span id='know'>Know more...</span>
            </div>
          ))}
        </div>
        <button className='carousel-btn next' onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
  )
}

export default Empowering
