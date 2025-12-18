import { useState } from 'react'
import './Gallery.css'

// Las imágenes se agregarán después en public/images/gallery/
const galleryImages = [
  { id: 1, src: '/images/gallery/trabajo1.png', alt: 'Lifting de pestañas - Resultado', category: 'lifting' },
  { id: 2, src: '/images/gallery/trabajo2.png', alt: 'Laminado de cejas', category: 'laminado' },
  { id: 3, src: '/images/gallery/trabajo3.png', alt: 'Lifting de pestañas', category: 'lifting' },
  { id: 4, src: '/images/gallery/trabajo4.png', alt: 'Extensiones clásicas', category: 'extensiones' },
]

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [filter, setFilter] = useState('todos')

  const filteredImages = filter === 'todos' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter)

  const openLightbox = (image) => {
    setSelectedImage(image)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'auto'
  }

  return (
    <section id="galeria" className="gallery">
      <div className="gallery-container">
        <div className="gallery-header animate-on-scroll">
          <h2>Galería de Trabajos</h2>
          <p>Resultados reales en clientas satisfechas ✨</p>
        </div>

        <div className="gallery-filters">
          <button 
            className={`filter-btn ${filter === 'todos' ? 'active' : ''}`}
            onClick={() => setFilter('todos')}
          >
            Todos
          </button>
          <button 
            className={`filter-btn ${filter === 'lifting' ? 'active' : ''}`}
            onClick={() => setFilter('lifting')}
          >
            Lifting
          </button>
          <button 
            className={`filter-btn ${filter === 'laminado' ? 'active' : ''}`}
            onClick={() => setFilter('laminado')}
          >
            Laminado
          </button>
          <button 
            className={`filter-btn ${filter === 'extensiones' ? 'active' : ''}`}
            onClick={() => setFilter('extensiones')}
          >
            Extensiones
          </button>
        </div>

        <div className="gallery-grid">
          {filteredImages.map((image, index) => (
            <div 
              key={image.id} 
              className="gallery-item animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(image)}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
              <div className="gallery-overlay">
                <span>Ver foto</span>
              </div>
            </div>
          ))}
        </div>

        {galleryImages.length === 0 && (
          <div className="gallery-placeholder animate-on-scroll">
            <p>📸 Próximamente fotos de trabajos realizados</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>×</button>
          <img src={selectedImage.src} alt={selectedImage.alt} />
          <p className="lightbox-caption">{selectedImage.alt}</p>
        </div>
      )}
    </section>
  )
}

export default Gallery
