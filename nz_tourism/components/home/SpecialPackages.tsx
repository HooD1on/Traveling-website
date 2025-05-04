import Link from 'next/link'

export default function SpecialPackages() {
  return (
    <>
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
    </>
  )
} 