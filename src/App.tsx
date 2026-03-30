import './index.css'
import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/shared/Header'
import CircleButton from './components/molecules/CircleButton'
import Footer from './components/shared/Footer'

/** --------------------------- PORTFOLIO ELEMENT ---------------------- */

/** ------------------------------- ABOUT ME ----------------------------
 * INTRODUCTION
 * SPECIALTY
 * TECH STACK 
 */

/** ------------------------------ FEATURED PROJECTS -------------------
 * START (SUTUATION, TASK, ACTION, RESULT) OR
 * PROJECT OVERVIEW
 * THE PROBLEM
 * THE SOLUTION
 * LINKS (LIVE DEMO, CODE REPOSITORY)
 */

/** ----------------- TECHNICAL IMPLEMENTATION & DOCUMENTATION -----------
 * CODE QUALITY
 * README FILES
 * RESPONSIVENESS
 */

/** ---------------- SOCIAL PROOF AT CONTACT INFORMATION ----------------
 * CONTACT FORM / EMAIL
 * LINKS TO PROFESSIONAL PROFILES
 */

/** --------------------------- OPTIONAL ----------------------------------
 * TESTIMONIALS
 * BLOGS
 */

function App() {
  return (
    <ThemeProvider>
      <div className="h-screen overflow-hidden flex flex-col">
        <Header />
        <div className="flex-grow flex justify-center items-center">
          <CircleButton />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
