import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Terms from './components/Terms'
import Privacy from './components/Privacy'
import FAQ from './components/FAQ'
import PoopStreats from './components/PoopStreats'
import ModerationDashboard from './components/ModerationDashboard'
import ReportsList from './components/ReportsList'
import ReportDetail from './components/ReportDetail'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/poopstreats" element={<PoopStreats />} />

        {/* Admin Moderation Routes */}
        <Route path="/admin/moderation" element={<ModerationDashboard />} />
        <Route path="/admin/reports" element={<ReportsList />} />
        <Route path="/admin/reports/:id" element={<ReportDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
