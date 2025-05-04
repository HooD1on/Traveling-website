export default function Features() {
  return (
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
  )
} 