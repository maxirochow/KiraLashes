import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import Services from './pages/Services'
import Booking from './pages/Booking'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import useScrollAnimation from './hooks/useScrollAnimation'
import './App.css'

function App() {
  useScrollAnimation()

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Booking />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
