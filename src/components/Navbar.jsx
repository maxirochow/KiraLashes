import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => scrollToSection('inicio')}>
          <span className="logo-text">Kira</span>
          <span className="logo-accent">Lashes</span>
        </div>

        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className={`hamburger ${isOpen ? 'active' : ''}`}></span>
        </button>

        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li>
            <button onClick={() => scrollToSection('inicio')}>Inicio</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('servicios')}>Servicios</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('galeria')}>Galería</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('agendar')}>Agendar</button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
