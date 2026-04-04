import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'

import './index.css'
import App from './App.tsx'
import Home from './components/sections/Home'
import AboutBento from './components/sections/AboutMe.tsx' 
import ProjectBento from './components/sections/Projects.tsx' 
import Contact from './components/sections/Contact' 


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutBento />} />
          <Route path="/projects" element={<ProjectBento />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </App>
    </BrowserRouter>
  </StrictMode>,
)
