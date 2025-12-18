import './Hero.css'

function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="inicio" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            <span className="hero-title">Kira</span>
            <span className="hero-title-accent">Lashes</span>
          </h1>
          <p className="hero-subtitle">💕 LASHISTA ✨</p>
          <p className="hero-description">
            Especialista en pestañas y cejas. Realzo tu belleza natural con 
            técnicas profesionales de lifting, laminado y extensiones.
          </p>
          <div className="hero-features">
            <div className="feature">
              <span className="feature-icon">🏠</span>
              <span>Trabajo a domicilio</span>
            </div>
            <div className="feature">
              <span className="feature-icon">📍</span>
              <span>Villarrica</span>
            </div>
            <div className="feature">
              <span className="feature-icon">📱</span>
              <span>+56 9 7472 6455</span>
            </div>
          </div>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => scrollToSection('agendar')}>
              Agendar Cita
            </button>
            <button className="btn-secondary" onClick={() => scrollToSection('servicios')}>
              Ver Servicios
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-container">
            <div className="floating-card">
              <span>✨</span>
              <p>Realza tu mirada</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,60 C360,120 720,0 1440,60 L1440,120 L0,120 Z" fill="#fff"/>
        </svg>
      </div>
    </section>
  )
}

export default Hero
