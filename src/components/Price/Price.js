import React from 'react'
import { Link } from 'react-router-dom'
import FAQSection from '../FAQSection/FAQSection'

export const Price = () => {
  return (
    <div>
      <section className='pricing-section'>
        <h1>Flexible Plans, Transparent Pricing</h1>
        <p className='subheading'>
          Find the Perfect Fit for You
          <span className='highlight-text'>
            {' '}
            30-day free trial with money-back guarantee.
          </span>
        </p>

        <div className='pricing-comparison'>
          <table className='pricing-table'>
            <thead>
              <tr>
                <th>Features</th>
                <th>
                  Starter
                  <br />
                  <span className='price-tag'>
                    ${17}/<span>month</span>
                  </span>
                </th>
                <th>
                  Premium
                  <br />
                  <span className='price-tag'>
                    ${88}/<span>month</span>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Users</td>
                <td>1</td>
                <td>15</td>
              </tr>
              <tr>
                <td>Branches</td>
                <td>1</td>
                <td>10</td>
              </tr>
              <tr>
                <td>Courses</td>
                <td>3</td>
                <td>15/branch</td>
              </tr>
              <tr>
                <td>Max. Students Allowed</td>
                <td>25</td>
                <td>500</td>
              </tr>
              <tr>
                <td>Communication</td>
                <td>✔</td>
                <td>✔</td>
              </tr>
              <tr>
                <td>Bulk Updates</td>
                <td>✔</td>
                <td>✔</td>
              </tr>
              <tr>
                <td>User Roles</td>
                <td>✔</td>
                <td>✔</td>
              </tr>
            </tbody>
          </table>

          <div className='pricing-buttons'>
            <Link to='/starter' className='btn-get-started'>
              Get Started →
            </Link>
            <Link to='/premium' className='btn-get-started'>
              Get Started →
            </Link>
          </div>
        </div>
      </section>
      <FAQSection />
    </div>
  )
}
