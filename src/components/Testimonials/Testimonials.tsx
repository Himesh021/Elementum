import './Testimonials.css'

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        
        <h2 className="testimonials-title">
          <span className="pill-highlight">What</span> our customer<br/>
          says <span className="text-underline-orange">About Us</span>
        </h2>

        <div className="testimonials-content">
          
          {/* Scattered Avatars */}
          <div className="test-avatars">
            <img src="https://i.pravatar.cc/150?img=21" alt="Customer" className="t-avatar t-avatar-1" />
            <img src="https://i.pravatar.cc/150?img=22" alt="Customer" className="t-avatar t-avatar-2" />
            <img src="https://i.pravatar.cc/150?img=23" alt="Customer" className="t-avatar t-avatar-3" />
            <img src="https://i.pravatar.cc/150?img=24" alt="Customer" className="t-avatar t-avatar-4" />
            <img src="https://i.pravatar.cc/150?img=25" alt="Customer" className="t-avatar t-avatar-5" />
            <img src="https://i.pravatar.cc/150?img=26" alt="Customer" className="t-avatar t-avatar-6" />
            <img src="https://i.pravatar.cc/150?img=27" alt="Customer" className="t-avatar t-avatar-7" />
            <img src="https://i.pravatar.cc/150?img=28" alt="Customer" className="t-avatar t-avatar-8" />
          </div>

          <div className="quote-box">
            <div className="quote-icon quote-open">
              <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6 0H0V16.6C0 24 6 30 13.4 30V22.4C9 22.4 6 19.4 6 15V7.6H16.6V0ZM40 0H23.4V16.6C23.4 24 29.4 30 36.8 30V22.4C32.4 22.4 29.4 19.4 29.4 15V7.6H40V0Z" fill="#CBD5E1"/>
              </svg>
            </div>
            <p className="quote-text">
              Elementum delivered the site with inthe timeline
              as they requested. In the end, the client found a 50%
              increase in traffic with in days since its launch. They
              also had an impressive ability to use technologies that
              the company hasnt used, which have also proved to
              be easy to use and reliable
            </p>
            <div className="quote-icon quote-close">
              <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.4 30H40V13.4C40 6 34 0 26.6 0V7.6C31 7.6 34 10.6 34 15V22.4H23.4V30ZM0 30H16.6V13.4C16.6 6 10.6 0 3.2 0V7.6C7.6 7.6 10.6 10.6 10.6 15V22.4H0V30Z" fill="#CBD5E1"/>
              </svg>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  )
}

export default Testimonials
