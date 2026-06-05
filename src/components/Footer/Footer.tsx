import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        
        <div className="footer-top">
          <div className="arrows-down">
            <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 10 Q 20 20 30 10" stroke="#FF6B6B" strokeWidth="2" fill="none" />
              <path d="M25 15 L 30 10 L 35 15" stroke="#FF6B6B" strokeWidth="2" fill="none" />
              <path d="M30 10 Q 40 20 50 10" stroke="#FF6B6B" strokeWidth="2" fill="none" />
              <path d="M45 15 L 50 10 L 55 15" stroke="#FF6B6B" strokeWidth="2" fill="none" />
            </svg>
          </div>
          
          <h2 className="footer-title">Subscribe to<br/>our newsletter</h2>
          <p className="footer-subtitle">To make your stay special and even more memorable</p>
          
          <button className="btn-subscribe">Subscribe Now</button>
          
          <div className="purple-shape"></div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-links-grid">
          <div className="footer-col">
            <h4 className="footer-col-title">Company</h4>
            <a href="#">Home</a>
            <a href="#">Studio</a>
            <a href="#">Service</a>
            <a href="#">Blog</a>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">Terms & Policies</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Explore</a>
            <a href="#">Accesibility</a>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">Follow Us</h4>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="#">Youtube</a>
            <a href="#">Twitter</a>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">Contact</h4>
            <p>1498w Fluton ste, STE<br/>2D Chicgo, IL 63867.</p>
            <p>(123) 456789000</p>
            <p>info@elementum.com</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>©2023 Elementum. All rights reserved</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
