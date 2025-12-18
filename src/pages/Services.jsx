import './Services.css'

const services = [
  {
    id: 1,
    name: 'Lifting de Pestañas',
    description: 'Realza tus pestañas naturales con un curvado permanente que dura hasta 8 semanas.',
    price: '$12.000',
    duration: '45 min',
    icon: '✨'
  },
  {
    id: 2,
    name: 'Laminado de Cejas',
    description: 'Dale forma y dirección a tus cejas para un look más definido y natural.',
    price: '$8.000',
    duration: '30 min',
    icon: '🪄'
  },
  {
    id: 3,
    name: 'Lifting + Laminado',
    description: 'Combo completo para realzar tanto pestañas como cejas en una sola sesión.',
    price: '$15.000',
    duration: '1 hr',
    icon: '💫'
  },
  {
    id: 4,
    name: 'Lifting + Tinte',
    description: 'Curvado de pestañas más tinte para un look más intenso y definido.',
    price: '$16.000',
    duration: '1 hr',
    icon: '🌟'
  },
  {
    id: 5,
    name: 'Lifting + Laminado + Tinte',
    description: 'El tratamiento más completo para pestañas y cejas perfectas.',
    price: '$20.000',
    duration: '1.5 hr',
    icon: '👑'
  },
  {
    id: 6,
    name: 'Extensiones Clásicas',
    description: 'Extensiones pelo a pelo para un look natural y elegante con más volumen.',
    price: '$25.000',
    duration: '2 hr',
    icon: '💕'
  }
]

function Services() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="servicios" className="services">
      <div className="services-container">
        <div className="services-header">
          <h2>Nuestros Servicios</h2>
          <p>Tratamientos profesionales para realzar tu belleza natural</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.name}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-details">
                <span className="service-duration">⏱️ {service.duration}</span>
                <span className="service-price">{service.price}</span>
              </div>
              <button 
                className="service-btn"
                onClick={() => scrollToSection('agendar')}
              >
                Agendar
              </button>
            </div>
          ))}
        </div>

        <div className="services-note">
          <p>💕 Todos los servicios incluyen atención a domicilio en Villarrica</p>
          <p>📱 ¿Tienes dudas? Escríbenos al +56 9 7472 6455</p>
        </div>
      </div>
    </section>
  )
}

export default Services
