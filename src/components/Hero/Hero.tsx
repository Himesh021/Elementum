import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            The <span className="text-underline-orange">thinkers</span> and<br/>
            doers were <span className="pill-highlight pink">changing</span><br/>
            the <span className="pill-highlight">status</span> Quo with
          </h1>
          <p className="hero-subtitle">
            We are a team of strategists, designers communicators, researchers. Togeather,<br/>
            we belive that progress only happens when you refuse to play things safe.
          </p>
        </div>

        {/* Floating Avatars */}
        <div className="hero-avatars">
          <img src="https://i.pravatar.cc/150?img=11" alt="Team member" className="avatar avatar-1" />
          <img src="https://i.pravatar.cc/150?img=12" alt="Team member" className="avatar avatar-2" />
          <img src="https://i.pravatar.cc/150?img=13" alt="Team member" className="avatar avatar-3" />
          <img src="https://i.pravatar.cc/150?img=14" alt="Team member" className="avatar avatar-4" />
          <img src="https://i.pravatar.cc/150?img=15" alt="Team member" className="avatar avatar-5" />
          <img src="https://i.pravatar.cc/150?img=16" alt="Team member" className="avatar avatar-6" />
          <img src="https://i.pravatar.cc/150?img=17" alt="Team member" className="avatar avatar-7" />
          <img src="https://i.pravatar.cc/150?img=18" alt="Team member" className="avatar avatar-8" />
        </div>

        {/* Abstract Elements */}
        <div className="abstract-shape shape-purple"></div>
        <div className="abstract-shape shape-lines">
          <svg viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 10 0 Q 30 50 10 100 T 10 200" stroke="#FF6B6B" strokeWidth="2" fill="none" />
            <path d="M 30 0 Q 50 50 30 100 T 30 200" stroke="#1A1A1A" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero
