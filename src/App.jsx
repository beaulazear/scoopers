import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Terms from './components/Terms'
import Privacy from './components/Privacy'
import About from './components/About'
import FAQ from './components/FAQ'
import PoopStreats from './components/PoopStreats'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/poopstreats" element={<PoopStreats />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
