import { useState } from 'react'
import './Booking.css'

const services = [
  { id: 1, name: 'Lifting de Pestañas', price: '$12.000' },
  { id: 2, name: 'Laminado de Cejas', price: '$5.000' },
  { id: 3, name: 'Lifting + Laminado', price: '$15.000' },
  { id: 4, name: 'Lifting + Tinte', price: '$18.000' },
  { id: 5, name: 'Lifting + Laminado + Tinte', price: '$20.000' },
  { id: 6, name: 'Extensiones Clásicas con Efectos', price: '$25.000' }
]

function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    address: '',
    notes: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Crear mensaje para WhatsApp
    const selectedService = services.find(s => s.id === parseInt(formData.service))
    const message = `¡Hola! 💕 Quiero agendar una cita:

📋 *Servicio:* ${selectedService?.name} (${selectedService?.price})
👤 *Nombre:* ${formData.name}
📱 *Teléfono:* ${formData.phone}
📅 *Fecha:* ${formData.date}
⏰ *Hora preferida:* ${formData.time}
📍 *Dirección:* ${formData.address}
${formData.notes ? `📝 *Notas:* ${formData.notes}` : ''}

¡Gracias! ✨`

    // Abrir WhatsApp con el mensaje
    const whatsappUrl = `https://wa.me/56974724453?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    
    setSubmitted(true)
  }

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      service: '',
      date: '',
      time: '',
      address: '',
      notes: ''
    })
    setSubmitted(false)
  }

  // Obtener fecha mínima (mañana)
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const minDate = tomorrow.toISOString().split('T')[0]

  if (submitted) {
    return (
      <section id="agendar" className="booking">
        <div className="booking-container">
          <div className="booking-success">
            <div className="success-icon">✅</div>
            <h2>¡Solicitud Enviada!</h2>
            <p>Tu solicitud de cita ha sido enviada por WhatsApp.</p>
            <p>Te confirmaremos la disponibilidad a la brevedad 💕</p>
            <button className="btn-primary" onClick={resetForm}>
              Agendar otra cita
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="agendar" className="booking">
      <div className="booking-container">
        <div className="booking-header">
          <h2>Agenda tu Cita</h2>
          <p>Completa el formulario y te contactaremos para confirmar tu hora</p>
        </div>

        <div className="booking-content">
          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre completo *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Teléfono *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+56 9 1234 5678"
              />
            </div>

            <div className="form-group">
              <label htmlFor="service">Servicio *</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona un servicio</option>
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name} - {service.price}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date">Fecha preferida *</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={minDate}
                />
              </div>

              <div className="form-group">
                <label htmlFor="time">Hora preferida *</label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecciona hora</option>
                  <option value="09:00">09:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="12:00">12:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                  <option value="17:00">17:00</option>
                  <option value="18:00">18:00</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="address">Dirección (Villarrica) *</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                placeholder="Tu dirección en Villarrica"
              />
            </div>

            <div className="form-group">
              <label htmlFor="notes">Notas adicionales</label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="¿Algo que debamos saber?"
                rows="3"
              />
            </div>

            <button type="submit" className="submit-btn">
              <span>📱</span> Enviar por WhatsApp
            </button>
          </form>

          <div className="booking-info">
            <div className="info-card">
              <h3>📍 Zona de Atención</h3>
              <p>Villarrica y alrededores</p>
              <p className="info-note">Servicio a domicilio para tu comodidad</p>
            </div>

            <div className="info-card">
              <h3>📱 Contacto Directo</h3>
              <p>+56 9 7472 4453</p>
              <a 
                href="https://instagram.com/kiraa._lashes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="instagram-link"
              >
                @kiraa._lashes
              </a>
            </div>

            <div className="info-card">
              <h3>⏰ Horarios</h3>
              <p>Lunes a Sábado</p>
              <p>9:00 - 19:00</p>
            </div>

            <div className="info-card highlight">
              <h3>💕 Importante</h3>
              <p>Las citas se confirman vía WhatsApp según disponibilidad</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Booking
