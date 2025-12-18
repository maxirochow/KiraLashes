import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import Services from './pages/Services'
import Booking from './pages/Booking'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Booking />
      </main>
      <Footer />
    </div>
  )
}

export default App
