import ToggleSwitch from '../elements/ToggleSwitch'
import { useTheme } from '../../contexts/ThemeContext'
import { useState, useEffect } from 'react';

/**
 * 032920260409 - Task
 *  - [ ] 
 */


const Header = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const [seconds, setSeconds ]  = useState(60)

  useEffect(() => {

    const interval = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 60))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <header
      className={`px-4 py-1 h-16 grid grid-cols-[1fr_auto_1fr]  items-center relative  ${isDark ? 'border-white/40' : 'border-black/20'} shadow-md  ${isDark ? 'shadow-green-900/70': ''} `}
    >
        <div className="">
          <h1 className="col-span-3 text-4xl font-bold">
            Ron.
          </h1>
        </div>
        
        <div className="">
          <div className="flex flex-col items-center leading-none">
              <span className="text-4xl font-bold">
                {seconds.toString().padStart(2, '0')}
              </span>
          </div>
        </div>

        <div className="p-2 flex justify-end">
          <ToggleSwitch />
        </div>
    </header>
  )
}

export default Header

