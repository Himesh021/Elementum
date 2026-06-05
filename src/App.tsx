import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Offers from './components/Offers/Offers'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="about-services-wrapper">
        {/* Connecting Squiggly Line spanning both sections */}
        <div className="connecting-line">
          <svg viewBox="0 0 1000 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M 800 50 C 400 50, 600 300, 100 400 C -200 500, 400 600, 500 750" stroke="#FF6B6B" strokeWidth="2" fill="none" />
          </svg>
        </div>
        <About />
        <Services />
      </div>
      <Offers />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
