import './index.css'
import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'

/**
 * My portfolio should have
 * Header -> Check
 * Container
 * Footer -> Check
 */

function App() {
  return (
    <ThemeProvider>
      <div className="h-screen overflow-hidden flex flex-col">
        <Header />
        <div className="flex-grow flex justify-center items-center">
          Hello
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
