import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-logo">
          <a href="/">Elementum</a>
        </div>
        <div className="navbar-links">
           <a href="#services">Home</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          <a href="#faqs">FAQs</a>
        </div>
        <button className="navbar-menu-btn" aria-label="Menu">
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
