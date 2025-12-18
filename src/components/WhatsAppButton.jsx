import './WhatsAppButton.css'

function WhatsAppButton() {
  const phoneNumber = '56974724453'
  const message = '¡Hola! 💕 Me gustaría agendar una cita para pestañas ✨'
  
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <button className="whatsapp-button" onClick={handleClick} aria-label="Contactar por WhatsApp">
      <svg viewBox="0 0 32 32" className="whatsapp-icon">
        <path
          fill="currentColor"
          d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.052 31.22l6.012-1.97A15.877 15.877 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0Zm9.32 22.598c-.392 1.104-1.942 2.02-3.168 2.288-.84.18-1.936.324-5.63-1.21-4.726-1.96-7.768-6.756-8.004-7.07-.226-.314-1.9-2.532-1.9-4.83s1.2-3.428 1.628-3.898c.392-.43.856-.538 1.142-.538.286 0 .572.002.822.016.264.012.618-.1.968.74.392.94 1.332 3.236 1.448 3.472.118.236.196.51.04.824-.158.314-.236.51-.47.786-.236.274-.496.612-.708.822-.236.234-.482.49-.208.962.274.47 1.22 2.012 2.62 3.26 1.802 1.604 3.322 2.1 3.792 2.336.47.236.744.196 1.018-.118.274-.314 1.176-1.372 1.49-1.842.314-.47.628-.392 1.058-.236.432.158 2.726 1.286 3.196 1.52.47.236.784.354.902.55.116.196.116 1.128-.276 2.232Z"
        />
      </svg>
      <span className="whatsapp-tooltip">¡Escríbenos!</span>
    </button>
  )
}

export default WhatsAppButton
