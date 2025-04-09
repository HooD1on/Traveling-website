'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function HomePage() {
  // FAQ 切换函数
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  
  const toggleFaq = (index: number): void => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <>
      {/* 导航栏 */}
      <Navbar />

      {/* 英雄部分 */}
      <section className="hero">
        <div className="hero-content">
          <h2 className="hero-subtitle">UNFORGETTABLE TRAVEL AWAITS THE</h2>
          <h1 className="hero-title">ADVENTURE</h1>
          <p className="hero-description">Experience the thrill of exploring the world's most fascinating destinations with our expertly curated travel packages.</p>

          {/* 搜索表单 */}
          <div className="search-form">
            <div className="form-group">
              <label className="form-label">Destination</label>
              <select className="form-dropdown" defaultValue="Yogyakarta, Indonesia">
  <option>Yogyakarta, Indonesia</option>
  <option>Bali, Indonesia</option>
  <option>Tokyo, Japan</option>
  <option>Paris, France</option>
</select>
            </div>
            <div className="form-group">
              <label className="form-label">Date</label>
              <select className="form-dropdown" defaultValue="March 29, 2023">
                <option>March 29, 2023</option>
                <option>April 5, 2023</option>
                <option>April 12, 2023</option>
                <option>April 19, 2023</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Price</label>
              <select className="form-dropdown" defaultValue="$1,000 - $2,000">
                <option>$1,000 - $2,000</option>
                <option>$2,000 - $3,000</option>
                <option>$3,000 - $4,000</option>
                <option>$4,000+</option>
              </select>
            </div>
            <button className="search-btn">Search</button>
          </div>
        </div>

        {/* 合作伙伴部分 */}
        <div className="partners">
          <img className="partner-logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgNDAiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjE1IiBzdHJva2U9IndoaXRlIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiLz48dGV4dCB4PSI0MCIgeT0iMjUiIGZpbGw9IndoaXRlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJib2xkIj5MT0NBTFM8L3RleHQ+PC9zdmc+" alt="Local Guides" />
          <img className="partner-logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAgNDAiPjx0ZXh0IHg9IjEwIiB5PSIyMCIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCIgZm9udC13ZWlnaHQ9ImJvbGQiPkxVWFVSWTwvdGV4dD48dGV4dCB4PSIxMCIgeT0iMzAiIGZpbGw9IndoaXRlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiIGZvbnQtd2VpZ2h0PSJib2xkIj5IT1RFTFMgJiBSRVNPUlRTPC90ZXh0Pjwvc3ZnPg==" alt="Luxury Hotels" />
          <img className="partner-logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAgNDAiPjx0ZXh0IHg9IjEwIiB5PSIyNSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9ImJvbGQiPlRSRUtLICZhbXA7IFNPRlQ8L3RleHQ+PC9zdmc+" alt="Trek & Soft" />
          <img className="partner-logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAgNDAiPjx0ZXh0IHg9IjEwIiB5PSIyMCIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCIgZm9udC13ZWlnaHQ9ImJvbGQiPklOQ1JFRElCTEU8L3RleHQ+PHRleHQgeD0iMzAiIHk9IjMwIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iYm9sZCI+VFJBVkVMPC90ZXh0Pjwvc3ZnPg==" alt="Incredible Travel" />
          <img className="partner-logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MCA0MCI+PHBhdGggZD0iTTIwLDEwIEwzMCwzMCBMNDAsMTAgTDUwLDMwIEw2MCwxMCIgc3Ryb2tlPSJ3aGl0ZSIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHRleHQgeD0iMTAiIHk9IjIwIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIiBmb250LXdlaWdodD0iYm9sZCI+V0lMRCBIT1VTRTwvdGV4dD48L3N2Zz4=" alt="Wild House" />
        </div>
      </section>

      {/* 热门目的地部分 */}
      <section className="destinations section">
        <div className="container">
          <h2 className="section-title">POPULAR DESTINATIONS</h2>
          <p className="section-description">Explore our top destinations right from our travelers' shared reviews.</p>
          
          <div className="destination-grid">
            <div className="destination-card italy">
              <h3 className="destination-title">Italy</h3>
              <p className="package-count"><i>📍</i> 30 Packages</p>
            </div>
            
            <div className="destination-card switzerland">
              <h3 className="destination-title">Switzerland</h3>
              <p className="destination-desc">Experience the beauty of the Swiss Confederation, in a landscaped country filled with majestic mountain peaks of Europe.</p>
              <div className="destination-buttons">
                <Link href="/booking" className="btn btn-outline">Book Now</Link>
                <Link href="/destinations/switzerland" className="btn">Learn More</Link>
              </div>
            </div>
            
            <div className="destination-card greece">
              <h3 className="destination-title">Greece</h3>
              <p className="package-count"><i>📍</i> 20 Packages</p>
            </div>
          </div>
        </div>
      </section>

      {/* 特点部分 */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4M12 8h.01"></path>
                </svg>
              </div>
              <h3 className="feature-title">Customer Insight</h3>
              <p className="feature-desc">We deliver the best service because we listen to our customers.</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 18a5 5 0 0 0-10 0"></path>
                  <line x1="12" y1="9" x2="12" y2="2"></line>
                  <line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line>
                  <line x1="19.78" y1="10.22" x2="18.36" y2="11.64"></line>
                  <line x1="1" y1="18" x2="23" y2="18"></line>
                </svg>
              </div>
              <h3 className="feature-title">Authentic Adventure</h3>
              <p className="feature-desc">We deliver the real adventure that matters for your experience.</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h3 className="feature-title">Expert Guides</h3>
              <p className="feature-desc">We provide expert guides for every destination in our catalog.</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
              </div>
              <h3 className="feature-title">Time Flexibility</h3>
              <p className="feature-desc">We welcome time flexibility ensuring the best experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 特别套餐部分 */}
      <section className="packages section">
        <div className="container">
          <div className="package-header">
            <h2>SPECIAL PACKAGES</h2>
            <p>Get special mixed packages made tailored for your needs.</p>
            <Link href="/packages" className="see-more">See More Packages</Link>
          </div>
          
          <div className="packages-grid">
            <div className="package-card cultural-package">
              <div className="package-number">01</div>
              <h3 className="package-title">Cultural</h3>
              <h4 className="package-name">Immersion Package</h4>
            </div>
            
            <div className="package-card paradise-package">
              <div className="package-number">02</div>
              <h3 className="escape-title">ESCAPE<br/>TO PARADISE</h3>
              <p className="package-desc">Bask in the warm tropical sun with our exclusive tropical island hideout. The 7-day trip takes you to the most stunning tropical islands.</p>
              <Link href="/packages/paradise" className="btn">Book Now</Link>
            </div>
          </div>
          
          {/* 品质保证部分 */}
          <div className="quality">
            <div className="quality-header">
              <h3 className="quality-title">ONLY THE BEST QUALITY FOR YOU</h3>
              <p className="quality-desc">Experience the difference with our premium services and our sophisticated activities.</p>
            </div>
            
            <div className="quality-stats">
              <div className="stat-item">
                <div className="stat-number">20+</div>
                <div className="stat-label">Premium Destinations</div>
              </div>
              
              <div className="stat-item">
                <div className="stat-number">100+</div>
                <div className="stat-label">Handpicked Activities</div>
              </div>
              
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Years of Travel Service</div>
              </div>
              
              <div className="stat-item">
                <div className="stat-number">2,357,945</div>
                <div className="stat-label">Happy Travelers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 推荐部分 */}
      <section className="testimonials section">
        <div className="container">
          <h2 className="section-title">TESTIMONIALS</h2>
          <p className="section-description">What our clients have said about us.</p>
          
          <div className="testimonial-item">
            <div className="testimonial-content">
              <p className="testimonial-text">I recently booked a trip to Italy with VacaSky, and I couldn't be happier with the experience. From the initial consultation to the post-trip follow-up, everything was handled with great care. The team was incredibly responsive and helpful, making sure all my concerns were addressed. The accommodations were perfect, and the itinerary was expertly crafted. I would highly recommend VacaSky to anyone looking for a stress-free and unforgettable travel experience.</p>
              <div className="testimonial-author">
                <div className="author-avatar"></div>
                <div className="author-info">
                  <div className="author-name">Sarah Johnson</div>
                  <div className="author-title">Trip to Venice (Summer)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ部分 */}
      <section className="faq section">
        <div className="container">
          <h2 className="section-title">FREQUENTLY ASKED QUESTIONS</h2>
          <p className="section-description">What our clients recently asked about our services and tours.</p>
          
          <div className={`faq-item ${activeFaq === 0 ? 'active' : ''}`}>
            <div className="faq-question" onClick={() => toggleFaq(0)}>
              <div className="question-text">What type of travel packages does VacaSky offer?</div>
              <div className="faq-toggle">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </div>
            </div>
            <div className="faq-answer">
              <p>VacaSky offers a wide range of travel packages to suit different preferences and interests. Our most popular options include cultural immersion tours, adventure experiences, luxury getaways, and family-friendly vacation packages. Each package can be customized to meet your specific needs and preferences.</p>
            </div>
          </div>
          
          <div className={`faq-item ${activeFaq === 1 ? 'active' : ''}`}>
            <div className="faq-question" onClick={() => toggleFaq(1)}>
              <div className="question-text">How do I book a trip with VacaSky?</div>
              <div className="faq-toggle">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
            </div>
            <div className="faq-answer">
              <p>Booking with VacaSky is easy and straightforward. You can browse our available packages on our website, select your preferred destination and dates, and proceed with the booking process online. Alternatively, you can contact our customer service team for personalized assistance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 订阅部分 */}
      <section className="subscribe">
        <div className="container">
          <h2 className="subscribe-title">START YOUR ADVENTURE</h2>
          <p className="subscribe-desc">Sign up for our newsletter and receive exclusive travel deals, travel tips, and destination inspiration. Don't miss out on the adventure - you're in for a treat!</p>
          
          <div className="subscribe-form">
            <input type="email" className="subscribe-input" placeholder="Enter your email address here..." />
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>
      </section>
    </>
  );
}