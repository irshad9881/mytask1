import React from 'react'
import './FAQSection.css'
import { useState } from 'react'
import { FaChevronUp } from 'react-icons/fa'
import { FaChevronRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  const faqData = [
    {
      question: 'What is RMax?',
      answer:
        'Qest is a SaaS platform/ecosystem that lets any small to medium service business setup & manage their business quickly & easily.'
    },
    {
      question: 'How does it work?',
      answer: 'Detailed explanation of how the platform works.'
    },
    {
      question: 'How much does it cost?',
      answer: 'Information about pricing and plans.'
    }
  ]

  const toggleAccordion = index => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const filteredFAQs = faqData.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className='faq-container'>
      <h1 className='faq-title'>Frequently Asked Questions</h1>
      <p className='faq-subtitle'>
        Find answers to common questions about our services and features.
        <br />
        For more details, contact our support team.
      </p>
      <div className='faq-search'>
        <input
          type='text'
          placeholder='Ask Q! e.g. Tell me about key Features.'
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button className='search-button'>
          <span role='img' aria-label='search'>
            🔍
          </span>
        </button>
      </div>
      <div className='faq-accordion'>
        {filteredFAQs.map((faq, index) => (
          <div className='faq-item' key={index}>
            <button
              className='faq-question'
              onClick={() => toggleAccordion(index)}
            >
              {faq.question}
              <span className='faq-arrow'>
                {activeIndex === index ? <FaChevronUp /> : <FaChevronRight />}
              </span>
            </button>
            {activeIndex === index && (
              <div className='faq-answer'>{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
      <p className='faq-footer'>
        Haven’t got your answer?{' '}
        <Link to='/contact' className='contact-link'>
          Contact our support now
        </Link>
      </p>
    </div>
  )
}

export default FAQSection
