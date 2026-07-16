import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AboutMentor from './AboutMentor.jsx'
import ProgramsAndServices from './ProgramsAndServices.jsx'
import AuthorPage from './AuthorPage.jsx'
import RecognitionPage from './RecognitionPage.jsx'
import InsightsPage from './InsightsPage.jsx'
import ContactPage from './ContactPage.jsx'
import ScrollToTop from './ScrollToTop.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutMentor />} />
        <Route path="/programs" element={<ProgramsAndServices />} />
        <Route path="/author" element={<AuthorPage />} />
        <Route path="/recognition" element={<RecognitionPage />} />
        <Route path="/ventures" element={<InsightsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
