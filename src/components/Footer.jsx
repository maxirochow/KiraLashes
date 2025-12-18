import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>
            <span className="brand-text">Kira</span>
            <span className="brand-accent">Lashes</span>
          </h3>
          <p>Realzando tu belleza natural ✨</p>
          <p className="footer-subtitle">Lifting y Extensiones</p>
        </div>

        <div className="footer-image">
          <img src="/images/lista-precios.jpg" alt="Lista de precios Kira Lashes" />
        </div>

        <div className="footer-links">
          <h4>Síguenos</h4>
          <a 
            href="https://instagram.com/kiraa._lashes" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            📸 @kiraa._lashes
          </a>
          <a 
            href="https://wa.me/56974724453" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            📱 +56 9 7472 4453
          </a>
        </div>

        <div className="footer-location">
          <h4>Ubicación</h4>
          <p>📍 Villarrica, Chile</p>
          <p>🏠 Servicio a domicilio</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Kira Lashes. Todos los derechos reservados 💕</p>
      </div>
    </footer>
  )
}

export default Footer
