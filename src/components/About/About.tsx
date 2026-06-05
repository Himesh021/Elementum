import './About.css'

const About = () => {
  return (
    <section className="about" id="services">
      <div className="container about-container">
        
        <div className="about-text">
          <div className="bg-glow-pink"></div>
          <h2 className="about-title">
            <span className="text-underline-orange">Tomorrow</span> should<br/>
            be better than <span className="pill-highlight">today</span>
          </h2>
          <p className="about-subtitle">
            We are a team of strategists, designers communicators, researchers.
            Togeather, we belive that progress only happens when you refuse
            to play things safe.
          </p>
          <a href="#" className="read-more">
            Read more
            <svg width="60" height="12" viewBox="0 0 60 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 6H58M58 6L53 1M58 6L53 11" stroke="#1A1A1A" strokeWidth="1"/>
            </svg>
          </a>
        </div>

        <div className="about-image-wrapper">
          <div className="pink-outline-shape"></div>
          <div className="about-image-circle">
            <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Team meeting" />
          </div>
          <div className="red-rectangle-shape"></div>
        </div>

      </div>
    </section>
  )
}

export default About
