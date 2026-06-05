import './Services.css'

const Services = () => {
  return (
    <section className="services">
      <div className="container services-container">
        
        <div className="services-image-wrapper">
          <div className="yellowgreen-outline-box"></div>
          <div className="triangle-shape triangle-1"></div>
          <div className="services-image-circle">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Team collaborating" />
          </div>
          <div className="triangle-shape triangle-2"></div>
        </div>

        <div className="services-text">
          <h2 className="services-title">
            <span className="pill-highlight">See</span> how we can<br/>
            help you <span className="text-underline-orange">progress</span>
          </h2>
          <p className="services-subtitle">
            We add a layer of fearless insights and action that allows change
            makers to accelerate their progress in areas such as brand, design
            digital platforms and social research.
          </p>
          <a href="#" className="read-more">
            Read more
            <svg width="60" height="12" viewBox="0 0 60 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 6H58M58 6L53 1M58 6L53 11" stroke="#1A1A1A" strokeWidth="1"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services
